import { FETCH_GEAR, NEW_GEAR, BUY_GEAR } from '../actions/types';

const initialState = {
    items: []
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_GEAR:
            return{
                ...state,
                items: action.payload
            };
        case NEW_GEAR:
            return{
                ...state,
                items: [action.payload, ...state.items]
            };
        case BUY_GEAR:
            return{
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}
