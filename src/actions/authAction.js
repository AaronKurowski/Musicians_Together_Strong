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
            payload: user.data
        }));
}

// export function loginUser(credentials) {
//     return axios.post('https://localhost:44394/api/authentication/login', credentials).then(res => {
//         const token = res.data.token;
//         localStorage.setItem('token', token);
//         getUser(token);
//     })
// }

export function loginUser(data) {
    return dispatch => {
        return axios.post('https://localhost:44394/api/authentication/login', data)
        .then(res => {
            const token = res.data.token;
            localStorage.setItem('token', token);
            getUser(token);
        });
    }
}

// export const loginUser = (postLogin) => dispatch => {
//     debugger;
//     axios.post('https://localhost:44394/api/authentication/login', {
//         userName: postLogin.userName,
//         password: postLogin.password
//     })
//         .then(userToken => dispatch({
//             type: LOGIN_USER,
//             payload: userToken.data
//         }));
//         console.log("made it here");
// }

export const getUser = (token) => async dispatch => {
    debugger;
    await axios.get('https://localhost:44394/api/examples/user', {
        headers: {"Authorization" : `Bearer ${token}`}
    }).then(user => dispatch({
            type: GET_USER,
            payload: user.data
        }));
}
