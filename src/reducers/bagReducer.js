import { FETCH_BAG, ADD_GEAR_TO_BAG, DELETE_GEAR } from '../actions/types';

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
        case DELETE_GEAR:
            return{
                ...state,
                items: state.items.filter((item, index) => index == action.payload)
            };
        default:
            return state;
    }
}
