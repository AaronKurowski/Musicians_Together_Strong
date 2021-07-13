import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import gearImage from '../../Images/gear.jpg';
import drums from '../../Images/drums.svg';
import gigs from '../../Images/gigs.svg';
import band from '../../Images/band.svg';
import music from '../../Images/music.svg';


const Home = () => {

    return(
        <React.Fragment>
            <div className="home-title"></div>
            <h3>Need to find a fill-in, show, or gear? You've come to the right place!</h3>

            <div className="home-btn-div">
                
                <Link to="/music" className="music-link">
                    <div className="home-btns">
                        <button className="btn btn-lg music-btn-main" type="submit">Music</button>
                        <img className="home-img" src={music}></img>
                    </div>
                </Link>

                <Link to="/listings">
                    <div className="home-btn-listings home-btns">
                        <button className="btn btn-lg show-btn" type="submit">Show Listings</button>
                        <img className="home-img" src={gigs}></img>
                    </div>
                </Link>

                <Link to="/gear">
                    <div className="home-btn-gear home-btns">
                        <button className="btn btn-lg gear-btn" type="submit">On-Time Gear</button>
                        <img className="home-img" src={drums}></img>
                    </div>
                </Link>       
            </div>
            <h6 className="creator">Musicians Together Strong© is brought to you by Aaron Kurowski to bring the needs of a musician into one place
            </h6>
        </React.Fragment>        
    );
}

export default Home;
