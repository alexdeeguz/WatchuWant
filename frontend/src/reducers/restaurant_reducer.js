import { RECEIVE_RESTAURANT } from "../actions/restaurant";

const restaurantReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = {};
    if(action.type === RECEIVE_RESTAURANT) {
        newState.restaurant = action.restaurant;
        return newState;
    } else {
        return state;
    }
}

export default restaurantReducer;