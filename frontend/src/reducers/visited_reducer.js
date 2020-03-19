import {
    RECEIVE_VISITED,
    RECEIVE_SINGLE_VISITED,
    RECEIVE_NEW_VISITED
} from '../actions/visited'

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
            
            return {[action.singleVisited.data._id]: action.singleVisited.data};
        case RECEIVE_NEW_VISITED:

            return {[action.singleVisited.data._id]: action.singleVisited.data};
        default:
            return state;
    }
};

export default visitedReducer;