import { ADD_GEAR_TO_BAG, FETCH_BAG } from "./types";
import axios from 'axios';

export const fetchGearBag = (userId) => dispatch => {
    axios.get(`https://localhost:44394/api/gearbag/${userId}`)
        .then(bag => dispatch({
            type: FETCH_BAG,
            payload: bag.data
        }));
}

export const addGearToBag = (userId, gearId) => dispatch => {
    debugger;
    axios.post(`https://localhost:44394/api/gearbag/${userId}/${gearId}`, {
        userId: userId,
        gearId: gearId,
        quantity: 1
    })
        .then(bag => dispatch({
            type: ADD_GEAR_TO_BAG,
            payload: bag.data
        }));
    alert("Gear added to bag successfully!")
}
