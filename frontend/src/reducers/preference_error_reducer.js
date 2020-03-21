import { RECEIVE_ERRORS } from '../actions/preference'

const preferenceErrorReducer = (state = {}, action) => {
    debugger
    Object.freeze(state);
    if (action.type === RECEIVE_ERRORS ) {
        return action.errors
    } else {
        return state;
    }
}
export default preferenceErrorReducer;