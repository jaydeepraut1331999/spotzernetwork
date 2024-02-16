import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { delay, Observable, of } from 'rxjs';
import { uiActions } from '../store/actions';
import * as selectors from '../store/selector';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private store: Store<any>) { }

  public get storeData() {
    return {
      getAvailableTasks: ((): Observable<any[]> =>
        this.store.select(selectors.getAvailableTasks))(),
      getPendingTasks: ((): Observable<any[]> =>
        this.store.select(selectors.getPendingTasks))(),
      getCompletedTasks: ((): Observable<any[]> =>
        this.store.select(selectors.getCompletedTasks))(),
      getInvoices: ((): Observable<any[]> =>
        this.store.select(selectors.getInvoices))(),
      IsUserLoggedIn: ((): Observable<boolean> =>
        this.store.select(selectors.isUserLoggedIn))()

    }
  }

  public get actionData() {
    return {
      assignTask: (rowData: any): any => {
        this.store.dispatch(uiActions.assignTask({ rowData }));
      },
      completeTask: (rowData: any): any => {
        this.store.dispatch(uiActions.completeTask({ rowData }));
      },
      loginSuccess: (): any => {
        this.store.dispatch(uiActions.loginSucess({ isLoggedIn: true }));
      },
      updateUserInfo: (userInfo: any): any => {
        this.store.dispatch(uiActions.updateUserInfo({ userInfo }));
      },
    }
  }

}
