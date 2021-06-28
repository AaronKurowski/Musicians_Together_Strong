import { FETCH_GEAR, NEW_GEAR } from "./types";
import axios from 'axios';

export const fetchGear = () => dispatch => {
    debugger;
    axios.get('https://localhost:44394/api/gear')
        .then(gear => dispatch({
            type: FETCH_GEAR,
            payload: gear.data
        }));
}

export const createGear = (postGear) => dispatch => {
    debugger;
    axios.post('https://localhost:44394/api/gear', {
        userId: postGear.userId,
        name: postGear.name,
        description: postGear.description,
        price: postGear.price,
        imageurl: postGear.imageurl,
        condition: postGear.condition,
        datelisted: postGear.datelisted
    })
    .then(gear => dispatch({
        type: NEW_GEAR,
        payload: gear.data
    }));
}
