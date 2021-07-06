import { FETCH_BAG } from '../actions/types';

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
        default:
            return state;
    }
}
