import { LOGIN_USER, REGISTER_USER, GET_USER } from "../actions/types";

const initialState = {
    items: []
}

export default function(state = initialState, action){
    switch(action.type){
        case REGISTER_USER:
            return{
                ...state,
                items: action.payload
            };
        case LOGIN_USER:
            return{
                ...state,
                items: action.payload
            };
        case GET_USER:
            return{
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}
