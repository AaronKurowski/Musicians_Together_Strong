import { combineReducers } from "redux";
import showReducer from './showReducer';

export default combineReducers({
    shows: showReducer,
    // gear: gearReducer,
    // music: musicReducer
});
