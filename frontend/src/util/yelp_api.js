import axios from "axios";

export const search = params => {
    return axios.get('/api/yelp', params)
};