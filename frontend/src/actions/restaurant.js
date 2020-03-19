import { search } from "../util/yelp_api";


// action constant
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";

// regular action creator
export const receiveRestaurant = restaurant => ({
    type: RECEIVE_RESTAURANT,
    restaurant
})

// gets the restaurant user puts in and then saves it to the state
export const fetchRestaurant = (params, dispatch) => (
    search(params).then(restaurant => dispatch(receiveRestaurant(restaurant)))
)