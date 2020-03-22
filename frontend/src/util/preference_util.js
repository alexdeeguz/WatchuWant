import axios from 'axios';

export const addPreferences = preferences => (
    axios.post('/api/preferences/add', preferences)
)

export const editPreferences = preferences => (
    axios.patch('/api/preferences/edit', preferences)
)

export const retrievePreferences = userID => {
    return axios.get('/api/preferences/retrieve', userID)
}

