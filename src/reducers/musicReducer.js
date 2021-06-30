import { FETCH_SONGS, CREATE_SONG } from "../actions/types";

const initialState = {
    items: []
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_SONGS:
            debugger;
            return{
                ...state,
                items: action.payload
            };
        case CREATE_SONG:
            return{
                ...state,
                items: [action.payload, ...state.items]
            };
        default:
            debugger;
            return state;
    }
}
