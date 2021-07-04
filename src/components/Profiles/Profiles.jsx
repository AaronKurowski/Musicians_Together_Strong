import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchAllProfiles} from '../../actions/profileAction';
import './Profiles.css';


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
            <div className="inner-profile-div">
                {filteredProfiles.map((profile, index) => 
                    <h6>{profile.userName}</h6>

                )}
            </div>
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
                    <form>
                        <label for="searchQuery">Search user by their instrument</label>
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
