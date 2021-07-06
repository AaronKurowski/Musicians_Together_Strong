import { FETCH_BAG } from "./types";
import axios from 'axios';

export const fetchGearBag = (userId) => dispatch => {
    axios.get(`https://localhost:44394/api/gearbag/${userId}`)
        .then(bag => dispatch({
            type: FETCH_BAG,
            payload: bag.data
        }));
}
