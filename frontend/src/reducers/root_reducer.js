import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import favorites from './favorites_reducer';
import restaurants from './restaurants_reducer';
import visited from './visited_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    favorites,
    visited,
    restaurants
});

export default RootReducer;