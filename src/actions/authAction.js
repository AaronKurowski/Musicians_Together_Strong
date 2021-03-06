import { REGISTER_USER, LOGIN_USER, GET_USER, LOGOUT_USER } from "./types";
import axios from 'axios';
import authReducer from "../reducers/authReducer";

export const registerUser = (postRegister) => dispatch => {
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

export const loginUser = (credentials) => dispatch => {
    axios.post('https://localhost:44394/api/authentication/login', credentials)
        .then(res => {
            const token = res.data.token;
            localStorage.setItem('token', token);
            alert("You have logged in successfully!");
            dispatch(getUser(token));
        });
}

export const getUser = (token) => dispatch => {
    axios.get('https://localhost:44394/api/examples/user', {
        headers: {"Authorization" : `Bearer ${token}`}
    }).then(user => dispatch({
            type: GET_USER,
            payload: [user.data]
        }));   
}

export const logoutUser = () => dispatch => {
    dispatch({
        type: LOGOUT_USER,
        payload: []
    })
    localStorage.removeItem("token");
    alert("You have logged out")
}
