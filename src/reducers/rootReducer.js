import { combineReducers } from "redux";
import showReducer from './showReducer';

export default combineReducers({
    shows: showReducer,
    // another reducer,
    // and another reducer
});
