import { FETCH_ALL_PROFILES, FETCH_PROFILE } from "./types";
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
