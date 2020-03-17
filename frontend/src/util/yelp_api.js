import axios from "axios";

export const search = params => {
    return axios.get('/api/yelp', params)
};

let params = (pref) => {
    return {
        term: "burrito",
        location: 'san francisco',
        radius: 5,
        categories: 'breakfast_brunch',
        limit: 10,
        price: "3",
        open_now: true,
    }
}

