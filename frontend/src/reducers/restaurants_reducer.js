import {
    RECEIVE_RESTAURANT,
    RECEIVE_RESTAURANTS,
} from "../actions/restaurant";

import {
    RECEIVE_USER_LOGOUT
} from '../actions/session_actions'

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {};
    if(action.type === RECEIVE_RESTAURANT) {
        newState = Object.assign({}, state, {restaurant: action.restaurant});
        return newState;
    } else if(action.type === RECEIVE_RESTAURANTS) {
        if (action.restaurants.name === 'Error') return state;
        const arr = action.restaurants.businesses;
        arr.forEach(r => {
            newState[r.id] = r;
        });
        return newState;
    } else if ( action.type === RECEIVE_USER_LOGOUT){
        return {};
    } else {
        return state;
    }
}

export default restaurantsReducer;