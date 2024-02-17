import { Action, createReducer, on, State } from "@ngrx/store";
import { uiActions } from "./actions";

export interface UIState {
    taskAvailable: any[];
    taskPending: any[];
    taskCompleted: any[];
    taskInvoice: any[];
    loading: boolean;
    error: string;
    isLoggedIn: boolean;
    userInfo: {}
}

export const initialState: UIState = {
    taskAvailable: [],
    taskPending: [],
    taskCompleted: [],
    taskInvoice: [],
    loading: false,
    error: '',
    isLoggedIn: false,
    userInfo: {}
};

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

export function uiReducer(state: any, action: Action) {
    return _uiReducer(state, action);
}
