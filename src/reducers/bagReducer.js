import { FETCH_BAG, ADD_GEAR_TO_BAG } from '../actions/types';

const initialState = {
    items: []
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_BAG:
            return{
                ...state,
                items: action.payload
            };
        case ADD_GEAR_TO_BAG:
            return{
                ...state,
                items: [action.payload, ...state.items]
            };
        default:
            return state;
    }
}
