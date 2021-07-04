import React, {useState} from 'react';
import Songs from '../Songs/Songs.jsx';
import './Music.css';
import Profiles from '../Profiles/Profiles.jsx';
import Search from '../Search/Search.jsx';


const Music = () => {
    const[view, setView] = useState(null);

    if(view == null){
        return(
            <div className="outer-button-div">
                <h3>Search Songs or Musicians?</h3>
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
                <h3>Songs</h3>
                <button className="btn" onClick={() => setView(null)}>Back</button>

                <Songs />    
            </div>
        );
    }

    else if(view == "musicians"){
        return(
            <div>
                <button className="btn" onClick={() => setView(null)}>Back</button>

                <h3>Musicians</h3>

                <Profiles />
            </div>

        );
    }
}

export default Music;
