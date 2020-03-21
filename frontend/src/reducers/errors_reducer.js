import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import preferenceErrorReducer from './preference_error_reducer'

export default combineReducers({
    session: SessionErrorsReducer,
    preferences: preferenceErrorReducer
});