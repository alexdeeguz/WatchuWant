import * as PreferenceAPI from '../util/preference_util';

// action constants
export const RECEIVE_PREFERENCES = "ADD_PREFERENCES";
export const RETRIEVE_PREFERNCES = "RETRIEVE_PREFERENCES";


// regular action creators
export const receivePreferences = preferences => ({
    type: RECEIVE_PREFERENCES,
    preferences
})

// thunk action
export const postPreferences = preferences => dispatch => {
    PreferenceAPI.addPreferences(preferences)
        .then(res => dispatch(receivePreferences(res.data)))
}

export const patchPreferences = preferences => dispatch => (
    PreferenceAPI.editPreferences(preferences)
        .then(res => dispatch(receivePreferences(res.data)))
)

export const retrievePreferences = userID => dispatch => (
    PreferenceAPI.retrievePreferences({params: {userID}})
         .then(res => dispatch(receivePreferences(res.data)))
)