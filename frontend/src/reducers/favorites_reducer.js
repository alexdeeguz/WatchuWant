import { 
    RECEIVE_NEW_FAVORITE, 
    RECEIVE_FAVORITE, 
    RECEIVE_FAVORITES ,
    REMOVE_FAVORITE
} from '../actions/favorites';

// const _nullState = {
//     restaurantId: null
// }

const favoritesReducer = (state ={}, action) =>{
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    // debugger
    
    switch (action.type) {
        case RECEIVE_FAVORITES:
            action.favorites.data.forEach((fav, idx)=>{
                nextState[fav._id] = fav
            })
            return nextState;
        case REMOVE_FAVORITE:
            // might change this to just an axios call in the component
            delete nextState[action.favorite._id]
            // return {};
            return nextState;
        case RECEIVE_FAVORITE:

            nextState[action.favorite.data._id] = action.favorite.data
            // return {[action.favorite.data._id]: action.favorite.data};
            return nextState;
        case RECEIVE_NEW_FAVORITE:
            nextState[action.favorite.data._id] = action.favorite.data
            // return {[action.favorite.data._id]: action.favorite.data};
            return nextState;
        default:
            return state;
    }

}

export default favoritesReducer;

