import { combineReducers } from "redux";
import showReducer from './showReducer';
import gearReducer from './gearReducer';
import authReducer from './authReducer';

export default combineReducers({
    shows: showReducer,
    gear: gearReducer,
    auth: authReducer
    // music: musicReducer
});
