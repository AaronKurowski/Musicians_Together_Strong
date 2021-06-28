import { combineReducers } from "redux";
import showReducer from './showReducer';
import gearReducer from './gearReducer';

export default combineReducers({
    shows: showReducer,
    gear: gearReducer,
    // music: musicReducer
});
