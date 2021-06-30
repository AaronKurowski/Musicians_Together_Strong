import { LOGIN_USER, REGISTER_USER, GET_USER, LOGOUT_USER } from "../actions/types";

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
        case LOGOUT_USER:
            return{
                ...state,
                items: state.items.filter((item, index) => index !== action.payload)
            }
        default:
            return state;
    }
}
