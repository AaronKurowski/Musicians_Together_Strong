import { LOGIN_USER, REGISTER_USER } from "../actions/types";

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
            }
        default:
            return state;
    }
}

console.log(action.payload);