import React, {useState} from 'react';
import Songs from '../Songs/Songs.jsx';
import './Music.css';
import Profiles from '../Profiles/Profiles.jsx';
import Search from '../Search/Search.jsx';


const Music = () => {
    const[view, setView] = useState(null);

    if(view == null){
        return(
            <div>View is null</div>
            
        );
    }
    return(
        <div>

            <Songs />

            <Profiles />
        </div>
    );
}

export default Music;
