import { FETCH_SONGS, CREATE_SONG, FETCH_USER_SONGS } from "./types";
import axios from 'axios';

export const fetchSongs = () => dispatch => {
    axios.get('https://localhost:44394/api/song')
        .then(songs => dispatch({
            type: FETCH_SONGS,
            payload: songs.data
        }));
}

export const createSong = (postSong) => dispatch => {
    axios.post('https://localhost:44394/api/song', {
        title: postSong.title,
        userId: postSong.userId,
        artist: postSong.artist,
        album: postSong.album,
        genre: postSong.genre,
        audioFile: postSong.audioFile,
        imageURL: postSong.imageURL,
        releaseDate: postSong.releaseDate
    })
    .then(song => dispatch({
        type: CREATE_SONG,
        payload: song.data
    }));
}

export const fetchUserSongs = (userId) => dispatch => {
    axios.get(`https://localhost:44394/api/song/${userId}`)
        .then(songs => dispatch({
            type: FETCH_USER_SONGS,
            payload: songs.data
        }));
}
