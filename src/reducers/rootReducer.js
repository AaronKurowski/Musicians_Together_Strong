import { combineReducers } from "redux";
import showReducer from './showReducer';
import gearReducer from './gearReducer';
import authReducer from './authReducer';
import musicReducer from './musicReducer';
import profileReducer from './profileReducer';

export default combineReducers({
    shows: showReducer,
    gear: gearReducer,
    auth: authReducer,
    music: musicReducer,
    profile: profileReducer
});
