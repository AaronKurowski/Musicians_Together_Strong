import { FETCH_SONGS, CREATE_SONG } from "./types";
import axios from 'axios';

export const fetchSongs = () => dispatch => {
    debugger;
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
        album: postSong.artist,
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
