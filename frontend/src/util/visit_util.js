import axios from 'axios';

export const fetchAllVisited = (userId) =>{
    return axios.get(`/api/visited/user/${userId}`)
}

export const fetchSingleVisited = visitedId =>{
    return axios.get(`api/visited/${visitedId}`)
}

export const postVisited = data =>{
    return axios.post('api/visited/', data)
}