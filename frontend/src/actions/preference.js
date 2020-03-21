import * as PreferenceAPI from '../util/preference_util';

// action constants
export const RECEIVE_PREFERENCES = "ADD_PREFERENCES";
export const RETRIEVE_PREFERNCES = "RETRIEVE_PREFERENCES";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

// regular action creators
export const receivePreferences = preferences => ({
    type: RECEIVE_PREFERENCES,
    preferences
})

export const receivePreferenceErrors = errors =>({
    type: RECEIVE_ERRORS,
    errors
})

// thunk action
export const postPreferences = preferences => dispatch => (
    PreferenceAPI.addPreferences(preferences)
        .then(res => dispatch(receivePreferences(res.data)))
            // errs => dispatch(receivePreferenceErrors(errs.responseJSON)))
        
)

export const patchPreferences = preferences => dispatch => (
    PreferenceAPI.editPreferences(preferences)
        .then(res => dispatch(receivePreferences(res.data)))
)

export const retrievePreferences = userID => dispatch => (
    PreferenceAPI.retrievePreferences({params: {userID}})
         .then(res => dispatch(receivePreferences(res.data)))
)