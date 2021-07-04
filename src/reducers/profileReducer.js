import { FETCH_ALL_PROFILES, FETCH_PROFILE, UPDATE_PROFILE } from "../actions/types";

const initialState = {
    items: []
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_ALL_PROFILES:
            return{
                ...state,
                items: action.payload
            };
        case FETCH_PROFILE:
            return{
                ...state,
                items: action.payload
            };
        case UPDATE_PROFILE:
            return{
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}
