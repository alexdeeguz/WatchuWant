import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import favorites from './favorites_reducer';
import restaurant from './restaurant_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    favorites,
    restaurant
});

export default RootReducer;