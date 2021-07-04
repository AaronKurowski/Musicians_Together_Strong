import React, {useState} from 'react';
import Songs from '../Songs/Songs.jsx';
import './Music.css';
import Profiles from '../Profiles/Profiles.jsx';
import Search from '../Search/Search.jsx';


const Music = () => {
    const[view, setView] = useState(null);

    console.log(view);
    if(view == null){
        return(
            <div className="outer-button-div">
                <div className="button-div">
                    <button className="btn" onClick={() => setView("songs")}>Songs</button>
                    <button className="btn" onClick={() => setView("musicians")}>Musicians</button>
                </div>
            </div>

        );
    }

    else if(view == "songs"){
        return(
            <div>
                SONGS
                <button className="btn" onClick={() => setView(null)}>Null</button>

                <Songs />    
            </div>
        );
    }

    else if(view == "musicians"){
        return(
            <div>
                MUSICIANS
                <button className="btn" onClick={() => setView(null)}>Null</button>

                <Profiles />
            </div>

        );
    }
}

export default Music;
