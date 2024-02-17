import { uiActions } from "../store/actions";
import { uiReducer, UIState } from "../store/reducers";

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

describe('Test reducers', () => {
    it('loadAvailableSuccess', () => {
        const action = uiActions.loadAvailableSuccess({taskAvailable:[]});
        const newState = {
            ...initialState , taskAvailable : []
        };
        expect(uiReducer(initialState,action)).toEqual(newState);
    })
});