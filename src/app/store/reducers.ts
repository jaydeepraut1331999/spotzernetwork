import { Action, createReducer, on, State } from "@ngrx/store";
import { initialState, UIState } from "../models/ui-state";
import { uiActions } from "./actions";


export function uiReducer(state: any, action: Action) {
    return _uiReducer(state, action);
}

const _uiReducer = createReducer(initialState,
    on(uiActions.loadAvailableSuccess, (state, { taskAvailable }) => {
        return ({ ...state, taskAvailable, loading: false })
    }),
    on(uiActions.loadPendingSuccess, (state, { taskPending }) => ({ ...state, taskPending, loading: false })),
    on(uiActions.loadInvoiceSuccess, (state, { taskInvoice }) => ({ ...state, taskInvoice, loading: false })),
    on(uiActions.loadHistorySuccess, (state, { taskCompleted }) => ({ ...state, taskCompleted, loading: false })),

    on(uiActions.loadAvailableFailure, (state, { error }) => ({ ...state, error, loading: false })),
    on(uiActions.updateTaskSucess, (state, { taskAvailable, taskPending }) => ({ ...state, taskAvailable, taskPending, loading: false })),
    on(uiActions.updateTaskCompleted, (state, { taskPending, taskCompleted, taskInvoice }) => ({ ...state, taskPending, taskCompleted, taskInvoice, loading: false })),
    on(uiActions.loginSucess, (state, { isLoggedIn }) => ({ ...state, isLoggedIn, loading: false })),
    on(uiActions.updateUserInfo, (state, { userInfo }) => ({ ...state, userInfo, loading: false }))
);


