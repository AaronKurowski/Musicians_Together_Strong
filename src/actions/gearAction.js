import { FETCH_GEAR, NEW_GEAR, BUY_GEAR } from "./types";
import axios from 'axios';

export const fetchGear = () => dispatch => {
    axios.get('https://localhost:44394/api/gear')
        .then(gear => dispatch({
            type: FETCH_GEAR,
            payload: gear.data
        }));
}

export const createGear = (postGear) => dispatch => {
    axios.post('https://localhost:44394/api/gear', {
        userId: postGear.userId,
        name: postGear.item,
        description: postGear.description,
        price: postGear.price,
        imageurl: postGear.imageurl,
        condition: postGear.condition,
        dateListed: postGear.dateListed,
        location: postGear.location,
        contact: postGear.contact
    })
    .then(gear => dispatch({
        type: NEW_GEAR,
        payload: gear.data
    }));
}

export const buyGear = (buyerId, gearId) => dispatch => {
    axios.put(`https://localhost:44394/api/gear/${gearId}`, {
        buyerId: buyerId
    })
    .then(gear => dispatch({
        type: BUY_GEAR,
        payload: [gear.data]
    }));
    alert("Transaction Confirmed")
}
