import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import favorites from './favorites_reducer';
import restaurants from './restaurants_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    favorites,
    restaurants
});

export default RootReducer;