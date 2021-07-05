import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchAllProfiles} from '../../actions/profileAction';
import './Profiles.css';
import { Link } from 'react-router-dom';


class Profiles extends Component {
    constructor(){
        super();
        this.state = {
            searchQuery: ''
        }
    }

    componentWillMount = () => {
        this.props.fetchAllProfiles();
    }

    mapProfiles = () => {
        const filteredProfiles = this.filterProfiles(this.props.profiles, this.state.searchQuery)
        return(
            <ul className="list-group">
                {filteredProfiles.map((profile) =>  
                    <Link className="profile-link" to={{pathname: "/viewprofile", state: {id: profile.id}}}>
                        <li className="hover list-group-item">
                            <div>
                                {profile.firstName} {profile.lastName}<br />
                            </div>
                            <div className="profile-div">{profile.genre} {profile.instrument}</div>                    
                        </li>
                    </Link>
                )}
            </ul>
        );
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    filterProfiles = (profiles, query) => {
        if(!query){
            return profiles;
        }
        let filteredSongs = profiles.filter((profile) => {
            if(profile.instrument.toLowerCase() == query.toLowerCase()){
                return true;
            }
        });
        return filteredSongs;
    }

    render(){
        return(
            <div className="outer-profile-div">
                <div className="search-div">
                    <form className="instrument-form">
                        <label for="searchQuery">Search user by their instrument</label> <br />
                        <select name="searchQuery" value={this.state.value} onChange={(event) => this.handleChange(event)}>
                            <option disabled selected value> --- select an option ---</option>
                            <option value="guitar">Guitar</option>
                            <option value="bass">Bass</option>
                            <option value="drums">Drums</option>
                            <option value="vocals">Vocals</option>
                            <option value="cello">Cello</option>
                            <option value="flute">Flute</option>
                            <option value="keyboards">Keyboards</option>
                            <option value="saxophone">Saxophone</option>
                            <option value="french horn">French Horn</option>
                            <option value="egg shakers">Egg Shakers</option>
                        </select>
                        {/* <button className="btn" type="submit">Search Genres</button> */}
                    </form>
                </div>
                {this.mapProfiles()}
            </div>
        );
    }
}

Profiles.propTypes = {
    fetchAllProfiles: PropTypes.func.isRequired,
    profiles: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    profiles: state.profile.items
})

// use redux to store profiles. go to backend and figure it out

export default connect(mapStateToProps, { fetchAllProfiles }) (Profiles);
