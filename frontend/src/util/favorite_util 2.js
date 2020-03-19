import axios from 'axios';

export const getFavorites = (userId) =>{
    return axios.get(`/api/restaurants/user/${userId}`)
}

export const getFavorite = favoriteId =>{
    return axios.get(`api/restaurants/${favoriteId}`)
}

export const postFavorite = data =>{
    return axios.post('api/restaurants/', data)
}

export const deleteFavorite = favoriteId =>{
    return axios.delete(`api/restaurants/${favoriteId}`)
}