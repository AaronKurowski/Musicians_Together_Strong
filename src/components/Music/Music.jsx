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
                    <button onClick={setView("songs")} className="btn" type="submit">View Songs</button>
                    <button onClick={setView("musicians")} className="btn" type="submit">View Musicians</button>
                </div>
            </div>

        );
    }

    else if(view == "songs"){
        return(
            <div>
                SONGS

                <Songs />    
            </div>
        );
    }

    else if(view == "musicians"){
        return(
            <div>
                MUSICIANS

                <Profiles />
            </div>

        );
    }
}

export default Music;
