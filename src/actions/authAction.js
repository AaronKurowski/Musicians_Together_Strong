import { REGISTER_USER, LOGIN_USER, GET_USER } from "./types";
import axios from 'axios';

export const registerUser = (postRegister) => dispatch => {
    debugger;
    axios.post('https://localhost:44394/api/authentication', {
        firstName: postRegister.firstName,
        lastName: postRegister.lastName,
        userName: postRegister.userName,
        password: postRegister.password,
        email: postRegister.email,
        phoneNumber: postRegister.phoneNumber,
        instrument: postRegister.instrument,
        band: postRegister.band,
        genre: postRegister.genre
    })
        .then(user => dispatch({
            type: REGISTER_USER,
            payload: user
        }));
}

// boiler plate
// export const createGear = (postGear) => dispatch => {
//     debugger;
//     axios.post('https://localhost:44394/api/gear', {
//         userId: postGear.userId,
//         name: postGear.name,
//         description: postGear.description,
//         price: postGear.price,
//         imageurl: postGear.imageurl,
//         condition: postGear.condition,
//         date: postGear.datelisted
//     })
//     .then(gear => dispatch({
//         type: NEW_GEAR,
//         payload: gear.data
//     }));
// }
