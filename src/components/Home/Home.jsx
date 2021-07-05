import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return(
        <React.Fragment>
            <div className="home-title"></div>

            <div className="home-btn-div">
                
                <div className="home-btn-music home-btn btn-group">
                    <Link to="/music"><button className="btn btn-lg" type="submit">Music</button></Link>
                </div>

                <div className="home-btn-listings">
                    <Link to="/listings"><button className="btn btn-lg" type="submit">Show Listings</button></Link>
                </div>

                <div className="home-btn-gear">
                    <Link to="/gear"><button className="btn btn-lg" type="submit">On-Time Gear</button></Link>
                </div>
                
            </div>
        </React.Fragment>        
    );
}

export default Home;