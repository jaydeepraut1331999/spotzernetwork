import { initialState, UIState } from "../models/ui-state";
import { uiActions } from "../store/actions";
import { uiReducer } from "../store/reducers";



describe('Test reducers', () => {
    it('loadAvailableSuccess', () => {
        const action = uiActions.loadAvailableSuccess({taskAvailable:[]});
        const newState = {
            ...initialState , taskAvailable : []
        };
        expect(uiReducer(initialState,action)).toEqual(newState);
    })
});