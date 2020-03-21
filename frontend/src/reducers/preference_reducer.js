import { RECEIVE_PREFERENCES } from "../actions/preference";

const preferenceReducer = (state = {}, action) => {
    Object.freeze(state);
    if(action.type === RECEIVE_PREFERENCES) {
        return action.preferences
    } else {
        return state;
    }
}

export default preferenceReducer;