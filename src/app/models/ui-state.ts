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