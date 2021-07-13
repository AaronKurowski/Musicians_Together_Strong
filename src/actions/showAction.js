import { FETCH_SHOWS, NEW_SHOW } from "./types";
import axios from 'axios';


//each action creator is a function
//thunk middleware allows us to call dispatch function direclty so we can make async requests
//dispatch is like resolving a promise; dispatch allows for sending of data
export const fetchShows = () => dispatch => {
    axios.get('https://localhost:44394/api/show')
        .then(shows => dispatch({
            type: FETCH_SHOWS,
            payload: shows.data
        }));
}

export const createShow = (postShow) => dispatch => {
    axios.post('https://localhost:44394/api/show', {
            userId: postShow.userId,
            name: postShow.name,
            description: postShow.description,
            bands: postShow.bands,
            imageurl: postShow.imageurl,
            entryfee: postShow.entryfee,
            date: postShow.date,
            location: postShow.location
        })
        .then(show => dispatch({
            type: NEW_SHOW,
            payload: show.data
    }));
}
