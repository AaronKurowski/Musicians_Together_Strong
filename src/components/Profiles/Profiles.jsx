import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchAllProfiles} from '../../actions/profileAction';
import './Profiles.css';


class Profiles extends Component {
    componentWillMount = () => {
        debugger;
        this.props.fetchAllProfiles();
    }

    mapProfiles = () => {
        return(
            <div className="inner-profile-div">
                {this.props.profiles.map((profile, index) => 
                    <h6>{profile.userName}</h6>

                )}
            </div>
        );
    }

    render(){
        console.log(this.props.profiles);
        return(
            <div className="outer-profile-div">
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
