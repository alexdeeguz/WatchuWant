import axios from 'axios';

export const getFavorites = () =>{
    return axios.get('api/restaurants/')
}

export const getFavorite = favoriteId =>{
    return axios.get(`api/restaurants/${favoriteId}`)
}

export const postFavorite = data =>{
    return axios.post('api/restaurants/', data)
}