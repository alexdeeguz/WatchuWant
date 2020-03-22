import { 
    RECEIVE_NEW_FAVORITE, 
    RECEIVE_FAVORITE, 
    RECEIVE_FAVORITES ,
    REMOVE_FAVORITE
} from '../actions/favorites';


import {
    RECEIVE_USER_LOGOUT   
} from '../actions/session_actions'


const favoritesReducer = (state ={}, action) =>{
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    
    switch (action.type) {
        case RECEIVE_FAVORITES:
            
            action.favorites.data.forEach((fav, idx)=>{
                nextState[fav._id] = fav
            })
            return nextState;
        case REMOVE_FAVORITE:

            delete nextState[action.favorite._id]
            return nextState;
        case RECEIVE_FAVORITE:

            nextState[action.favorite.data._id] = action.favorite.data
            return nextState;
        case RECEIVE_NEW_FAVORITE:
            nextState[action.favorite.data._id] = action.favorite.data
            return nextState;
        case RECEIVE_USER_LOGOUT:
            return {};
        default:
            return state;
    }

}

export default favoritesReducer;

