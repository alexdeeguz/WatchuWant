import {
    RECEIVE_RESTAURANT,
    RECEIVE_RESTAURANTS,
} from "../actions/restaurant";

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = {};
    if(action.type === RECEIVE_RESTAURANT) {
        newState.restaurant = action.restaurant;
        return newState;
    } else if(action.type === RECEIVE_RESTAURANTS) {
        const arr = action.restaurants.businesses;
        arr.forEach(r => {
            newState[r.id] = r;
        });
        return newState;
    } else {
        return state;
    }
}

export default restaurantsReducer;