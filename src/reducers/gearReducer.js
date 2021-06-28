import { FETCH_GEAR, NEW_GEAR } from '../actions/types';

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
        default:
            return state;
    }
}
