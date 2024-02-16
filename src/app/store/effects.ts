import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { DataService } from "../services/data-service";
import { uiActions } from "./actions"
import * as selectors from '../store/selector';
import { SnackbarService } from "../services/snackbar-service";
@Injectable()
export class uiEffects {

  loadTaskAvailable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uiActions.loadTaskAvailable),
      mergeMap(() =>
        this.dataService.getTaskAvailable().pipe(
          map((taskAvailable) => uiActions.loadAvailableSuccess({ taskAvailable })),
          catchError((error) =>
            of(uiActions.loadAvailableFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadTaskPending$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uiActions.loadTaskPending),
      mergeMap(() =>
        this.dataService.getTaskInProgress().pipe(
          map((taskPending) => uiActions.loadPendingSuccess({ taskPending })),
          catchError((error) =>
            of(uiActions.loadPendingFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadInvoices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uiActions.loadInvoices),
      mergeMap(() =>
        this.dataService.getInvoices().pipe(
          map((taskInvoice) => uiActions.loadInvoiceSuccess({ taskInvoice })),
          catchError((error) =>
            of(uiActions.loadInvoiceFailure({ error: error.message }))
          )
        )
      ),


    )
  );

  loadTaskHistory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uiActions.loadTaskHistory),
      mergeMap(() =>
        this.dataService.getTaskHistory().pipe(
          map((taskCompleted) => uiActions.loadHistorySuccess({ taskCompleted })),
          catchError((error) =>
            of(uiActions.loadInvoiceFailure({ error: error.message }))
          )
        )
      )
    )
  );


  assignTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uiActions.assignTask),
      concatLatestFrom(() => [
        this.store$.select(selectors.getAvailableTasks),
        this.store$.select(selectors.getPendingTasks),
      ]),
      switchMap(([action, taskAvailable, taskPending]) => {
        this.snackbarSerive.openSnackBar("Task Assigned Successfully: Moved to In Progress");
        return of(uiActions.updateTaskSucess({
          taskAvailable: taskAvailable.filter((x) => x.id !== action.rowData.id),
          taskPending: [...taskPending, { ...action.rowData, status: 'pending' }]
        }));
      })
    )
  );

  completeTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uiActions.completeTask),
      concatLatestFrom(() => [
        this.store$.select(selectors.getCompletedTasks),
        this.store$.select(selectors.getPendingTasks),
        this.store$.select(selectors.getInvoices),
      ]),
      switchMap(([action, taskCompleted, taskPending, taskInvoice]) => {
        this.snackbarSerive.openSnackBar("Task Completed Successfully: Moved to History");
        return of(uiActions.updateTaskCompleted({
          taskPending: taskPending.filter((x) => x.id !== action.rowData.id),
          taskCompleted: [...taskCompleted, { ...action.rowData, status: 'Completed', 'completedOn': new Date() }],
           taskInvoice: [...taskInvoice, { ...action.rowData, status: 'completed', 'completedOn': new Date() }]
        }));
      })
    )
  );
  constructor(private actions$: Actions, private dataService: DataService,
    private snackbarSerive: SnackbarService,
    private store$: Store) { }
}