import React, {useState} from 'react';
import Songs from '../Songs/Songs.jsx';
import './Music.css';
import Profiles from '../Profiles/Profiles.jsx';
import Search from '../Search/Search.jsx';
import song from '../../Images/song.svg';
import people from '../../Images/people.svg';

const Music = () => {
    const[view, setView] = useState(null);

    if(view == null){
        return(
            <div className="outer-button-div">
                <h3>Looking for like-minded artists?<br /> Search for them through music they've posted or directly by the instrument they play!</h3>
                <div className="button-div">
                    
                    <button className="btn music-btn" onClick={() => setView("songs")}><div className="music-div-title">Music</div><img className="song-img" src={song}></img></button>
                    <button className="btn profile-btn" onClick={() => setView("musicians")}><div className="music-div-title">Profiles</div><img className="people-img" src={people}></img></button>

                </div>
            </div>
        );
    }

    else if(view == "songs"){
        return(
            <div>
                <h3>Songs</h3>
                <button className="btn back-btn" onClick={() => setView(null)}>Back</button>

                <Songs />    
            </div>
        );
    }

    else if(view == "musicians"){
        return(
            <div>
                <button className="btn back-btn" onClick={() => setView(null)}>Back</button>

                <h3>Musicians</h3>

                <Profiles />
            </div>
        );
    }
}

export default Music;
