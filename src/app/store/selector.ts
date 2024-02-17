import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getStateData: any = createFeatureSelector<any>('data'); // get store state.

export const getAvailableTasks = createSelector(getStateData, (stateData: any): any[] => {
    return stateData?.taskAvailable;
});
export const getPendingTasks = createSelector(getStateData, (stateData: any): any[] => {
    return stateData?.taskPending;
});
export const getCompletedTasks = createSelector(getStateData, (stateData: any): any[] => {
    return stateData?.taskCompleted;
});
export const getInvoices = createSelector(getStateData, (stateData: any): any[] => {
    return stateData?.taskInvoice;
});

export const isUserLoggedIn = createSelector(getStateData, (stateData: any): boolean => {
    return stateData?.isLoggedIn;
});


