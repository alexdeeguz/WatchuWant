import axios from "axios";

export const search = params => {
    return axios.get('/api/yelp', params)
};

export const getFavorites = userId => {
    return axios.get('/api/yelp/favorites', userId)
};