import {
    RECEIVE_VISITED,
    RECEIVE_SINGLE_VISITED,
    RECEIVE_NEW_VISITED
} from '../actions/visited'

import {
    RECEIVE_USER_LOGOUT
} from '../actions/session_actions'

const visitedReducer = ( state = {}, action)=>{
    Object.freeze(state);

    let nextState = Object.assign({},state);
    
    switch (action.type) {
        case RECEIVE_VISITED:
            action.visited.data.forEach((visited, idx)=> {
                nextState[visited._id] = visited
            })
            return nextState;
        case RECEIVE_SINGLE_VISITED:

            nextState[action.singleVisited.data._id] = action.singleVisited.data;
            return nextState;
        case RECEIVE_NEW_VISITED:

            nextState[action.singleVisited.data._id] = action.singleVisited.data;
            return nextState;
        case RECEIVE_USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

export default visitedReducer;