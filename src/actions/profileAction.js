import { FETCH_ALL_PROFILES, FETCH_PROFILE, REMOVE_PROFILE, UPDATE_PROFILE } from "./types";
import axios from 'axios';


export const fetchAllProfiles = () => dispatch => {
    axios.get('https://localhost:44394/api/profile')
        .then(profiles => dispatch({
            type: FETCH_ALL_PROFILES,
            payload: profiles.data
        }));
}

export const fetchProfile = (userId) => dispatch => {
    axios.get(`https://localhost:44394/api/profile/${userId}`)
        .then(profile => dispatch({
            type: FETCH_PROFILE,
            payload: profile.data
        }))
}

export const updateProfile = (userId, info) => dispatch => {
    axios.put(`https://localhost:44394/api/profile/${userId}`, {
        firstName: info.firstName,
        lastName: info.lastName,
        email: info.email,
        genre: info.genre,
        instrument: info.instrument
    }).then(user => dispatch({
        type: UPDATE_PROFILE,
        payload: user.data
    }))
}

export const removeProfile = () => dispatch => {
    dispatch({
        type: REMOVE_PROFILE,
        payload: []
    })
}
