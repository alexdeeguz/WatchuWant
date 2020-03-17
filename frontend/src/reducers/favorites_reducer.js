import { 
    RECEIVE_NEW_FAVORITE, 
    RECEIVE_FAVORITE, 
    RECEIVE_FAVORITES 
} from '../actions/favorites';

// const _nullState = {
//     restaurantId: null
// }

const favoritesReducer = (state ={}, action) =>{
    Object.freeze(state);
    let newState = Object.assign({}, state)
    debugger
    switch (action.type) {
        case RECEIVE_FAVORITES:
            action.favorites.data.forEach((fav, idx)=>{
                newState[fav._id] = fav
            })
            return newState;
        case RECEIVE_FAVORITE:
            return {[action.favorite.data._id]: action.favorite.data};
        case RECEIVE_NEW_FAVORITE:
            
            return {[action.favorite.data._id]: action.favorite.data};
        default:
            return state;
    }

}

export default favoritesReducer;

