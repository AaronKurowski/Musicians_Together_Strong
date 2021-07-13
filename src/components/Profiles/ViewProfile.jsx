import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProfile, removeProfile } from '../../actions/profileAction';
import './ViewProfile.css';
import { Link } from 'react-router-dom';
import SongForm from '../Songs/SongForm.jsx';
import ReactAudioPlayer from 'react-audio-player';


class ViewProfile extends Component {
    constructor(){
        super();
        this.state = {
            currentAudio: ''
        };
    }


    componentWillMount = () => {
        const songId = this.props.location.state.id;
        const profileId = this.props.location.state.id;
        if(!songId){
            this.props.fetchProfile(profileId);
        }
        else{
            this.props.fetchProfile(songId);
        }
    }

    componentWillUnmount = () => {
        this.props.removeProfile();
    }

    handleMusic = (song) => {
        this.setState({
            currentAudio: song.audioFile
        });
    }

    // function is the same as in other files. Leaving for now but could put in a helper file to clean up
    filterSongs = (songs, userId) => {
        let filteredSongs = songs.filter((song) => {
            if(song.userId == userId){
                return true;
            }
        })
        return filteredSongs;
    }

    mapSongs = () => {
        const filteredSongs = this.filterSongs(this.props.songs, this.props.profile[0].id)
        return(
            <div>
                <h3>Songs {this.props.profile[0].firstName} has posted:</h3>
                <ul className="list-group">
                    {filteredSongs.map(song => 
                        <li key={song} onClick={() => this.handleMusic(song)} className="profile-songs hover list-group-item">
                            <div>{song.title}</div>
                            {/* <div>{song.artist}</div> */}
                            <div>{song.genre}</div>
                        </li>
                    )}
                </ul>
            </div>
        );
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
                <React.Fragment>
                    <div className="outer-viewprofile-div outer-profile-div">
                        <Link to="/music"><button className="btn profile-back">Back</button></Link>
                        <div className="card card-profile mb-3">
                            <div className="row g-0">
                                <div className="col-md-4 img-div">
                                    <img className="profile-img" src={this.props.profile[0].imageURL} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body card-body-profile">
                                        <h5 className="card-title">{this.props.profile[0].firstName} {this.props.profile[0].lastName}</h5>
                                        <p className="card-text">{this.props.profile[0].instrument}</p>
                                        <p className="card-text">{this.props.profile[0].genre}</p>
                                        <p className="card-text">{this.props.profile[0].band}</p>
                                        <p className="card-text"><small className="text-muted">{this.props.profile[0].email}</small></p>
                                    </div>
                                </div>
                            </div>      
                        </div>
                        <div className="viewprofile-audio-div">
                            <ReactAudioPlayer src={this.state.currentAudio} className="audio-player" controls/>
                        </div>
                    </div>
                    {this.mapSongs()}
                </React.Fragment>
            );
        }
    }
}

ViewProfile.propTypes = {
    fetchProfile: PropTypes.func.isRequired,
    profile: PropTypes.array.isRequired,
    removeProfile: PropTypes.func.isRequired,
    songs: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile.items,
    songs: state.music.items
});

export default connect(mapStateToProps, { fetchProfile, removeProfile })(ViewProfile);
