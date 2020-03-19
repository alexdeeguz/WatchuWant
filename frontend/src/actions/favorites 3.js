import * as favoriteRestaurantAPIUtil from '../util/favorite_util';

export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const RECEIVE_NEW_FAVORITE = 'RECEIVE_NEW_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

export const receiveFavorites = favorites =>({
    type: RECEIVE_FAVORITES,
    favorites
});

export const removeFavorite = favorite =>({
    type: REMOVE_FAVORITE,
    favorite
})
export const receiveFavorite = favorite =>({
    type: RECEIVE_FAVORITE,
    favorite
});

export const receiveNewFavorite = favorite => ({
    type: RECEIVE_NEW_FAVORITE,
    favorite
});

// THUNK

export const fetchFavorites = (userId) => dispatch =>(
    favoriteRestaurantAPIUtil.getFavorites(userId)
        .then(favorites =>(dispatch(receiveFavorites(favorites))))
);

export const fetchFavorite = favoriteId => dispatch => (
    favoriteRestaurantAPIUtil.getFavorite(favoriteId)
        .then(favorite => dispatch(receiveFavorite(favorite)))
)

export const postFavorite = data => dispatch =>(
    favoriteRestaurantAPIUtil.postFavorite(data)
        .then(favorite=> (dispatch(receiveNewFavorite(favorite))))
)

export const deleteFavorite = favoriteId => dispatch =>(
    favoriteRestaurantAPIUtil.deleteFavorite(favoriteId)
        .then(favorite => dispatch(removeFavorite(favorite)))
)

