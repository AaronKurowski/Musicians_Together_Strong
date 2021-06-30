import React from 'react';
import Songs from '../Songs/Songs.jsx';
import './Music.css';
import audio from '../../Audio/lol.mp3';


const Music = () => {
    const playAudio = () => {
        new Audio(audio).play();
    }

    return(
        <div>
            
            <Songs />
            <h2>Music</h2>
            <button onClick={() => playAudio()}>I got loud</button>
        </div>
    );
}

export default Music;
