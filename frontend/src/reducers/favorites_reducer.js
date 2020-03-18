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
            return {};
        case RECEIVE_FAVORITE:

            return {[action.favorite.data._id]: action.favorite.data};

        case RECEIVE_NEW_FAVORITE:

            return {[action.favorite.data._id]: action.favorite.data};
        default:
            return state;
    }

}

export default favoritesReducer;

