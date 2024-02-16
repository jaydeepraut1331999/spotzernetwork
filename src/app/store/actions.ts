import { createAction, props } from "@ngrx/store";


export const uiActions = {

    loginSucess: createAction('[UI] Login Success', props<{ isLoggedIn: boolean }>()),
    loadTaskAvailable : createAction('[UI] Load Task Available'),
    loadAvailableSuccess : createAction('[UI] Task Available Success', props<{ taskAvailable: any[] }>()),
    loadAvailableFailure : createAction('[UI] Task Available Failure', props<{ error: string }>()),

    assignTask : createAction('[UI] Assign Task', props<{ rowData: any }>()),
    updateTaskSucess: createAction('[UI] Task Updated Success', props<{ taskAvailable: any[] , taskPending: any[] }>()),

    completeTask : createAction('[UI] Completed Task', props<{ rowData: any }>()),
    updateTaskCompleted: createAction('[UI] Task Completed Success', props<{ taskPending: any[] , taskCompleted: any[] , taskInvoice:any[]  }>()),

    updateUserInfo : createAction('[UI] Load User Information', props<{ userInfo: any }>()),

    loadTaskPending : createAction('[UI] Load Task Pending'),
    loadPendingSuccess : createAction('[UI] Task Pending Success', props<{ taskPending: any[] }>()),
    loadPendingFailure : createAction('[UI] Task Pending Failure', props<{ error: string }>()),

    loadTaskHistory : createAction('[UI] Load Task History'),
    loadHistorySuccess : createAction('[UI] Task History Success', props<{ taskCompleted: any[] }>()),
    loadHistoryFailure : createAction('[UI] Task History Failure', props<{ error: string }>()),


    loadInvoices : createAction('[UI] Load Invoices'),
    loadInvoiceSuccess : createAction('[UI] Invoices Success', props<{ taskInvoice: any[] }>()),
    loadInvoiceFailure : createAction('[UI] Invoices Failure', props<{ error: string }>()),
}
