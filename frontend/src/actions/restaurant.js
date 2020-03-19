import { search } from "../util/yelp_api";


// action constants
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";

// regular action creators
export const receiveRestaurant = restaurant => ({
    type: RECEIVE_RESTAURANT,
    restaurant
})

export const receiveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS,
    restaurants
})

// gets the restaurant user puts in and then saves it to the state
export const fetchRestaurant = (params, dispatch) => (
    search(params).then(restaurant => dispatch(receiveRestaurant(restaurant)))
)

export const getRestaurants = (params, dispatch) => (
    search(params).then(restaurants => dispatch(receiveRestaurants(restaurants)))
)