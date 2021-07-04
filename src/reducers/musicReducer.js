import { FETCH_SONGS, CREATE_SONG, FETCH_USER_SONGS } from "../actions/types";

const initialState = {
    items: []
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_SONGS:
            return{
                ...state,
                items: action.payload
            };
        case CREATE_SONG:
            return{
                ...state,
                items: [action.payload, ...state.items]
            };
        case FETCH_USER_SONGS:
            return{
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}
