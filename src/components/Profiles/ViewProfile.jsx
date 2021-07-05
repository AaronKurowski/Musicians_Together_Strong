import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProfile, removeProfile } from '../../actions/profileAction';
import {useLocation} from 'react-router-dom';


class ViewProfile extends Component {

    componentWillMount = () => {
        const songId = this.props.location.state.id;
        this.props.fetchProfile(songId);
    }

    componentWillUnmount = () => {
        this.props.removeProfile();
    }

    render(){
        console.log(this.props.location.state.id);
        console.log(this.props)
        if(this.props.profile.length == 0){
            return(
                <div>Loading...</div>
            );
        }
        else{
            return(
                <div>
                    {this.props.profile[0].firstName}
                </div>

            );
        }
    }
}

ViewProfile.propTypes = {
    fetchProfile: PropTypes.func.isRequired,
    profile: PropTypes.array.isRequired,
    removeProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile.items
});

export default connect(mapStateToProps, { fetchProfile, removeProfile })(ViewProfile);
