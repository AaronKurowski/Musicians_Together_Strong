import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './UserProfile.css';
import {Modal, Button} from 'react-bootstrap';
import { updateProfile } from '../../actions/profileAction';
import { fetchSongs } from '../../actions/musicAction';


class UserProfile extends Component {
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            genre: '',
            instrument: '',
            showModal: false
        };
    }

    componentWillMount = () => {
        this.props.fetchSongs();
    }

    handleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const updatedInfo = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            genre: this.state.genre,
            instrument: this.state.instrument
        }

        this.props.updateProfile(this.props.user.id, updatedInfo);

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            genre: '',
            instrument: ''
        })
    }

    filterSongs = (songs, userId) => {
        let filteredSongs = songs.filter((song) => {
            if(song.userId == userId){
                return true;
            }
        })
        return filteredSongs;
    }

    mapSongs = () => {
        const filteredSongs = this.filterSongs(this.props.songs, this.props.user.id);
        return(

            // <ul class="list-group">
            //         {filteredSongs.map(song =>  
            //             <li className="hover list-group-item">
            //                 <div>
            //                     {song.title} by {song.artist}<br/>
            //                 </div>
            //                 <div className="genre-div">{song.genre}</div>
                            

            //             </li>
            //         )}
            //     </ul>

            <div>
                <h3>Songs you've posted:</h3>
                <ul className="list-group">
                    {filteredSongs.map(song => 
                        <li className="hover list-group-item">
                            <div>{song.title}</div>
                            <div>{song.album}</div>
                            <div>{song.artist}</div>
                        </li>    
                    )}
                </ul>
            </div>

            // <div>
            //      <h3 className="profile-songs">Songs you've posted: </h3>
            //     {filteredSongs.map((song) => 
            //         <div>{song.title}</div>
            //     )}
            // </div>
        );
    }

    render(){
        console.log(this.props.user);
        console.log(this.props.songs);
        return(
            <div className="outer-profile-div">
                <div className="card card-profile mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            img
                        </div>
                        <div className="col-md-8">
                            <div className="card-body card-body-profile">
                                <h5 className="card-title">{this.props.user.firstName} {this.props.user.lastName}</h5>
                                <p className="card-text">{this.props.user.instrument}</p>
                                <p className="card-text">{this.props.user.genre}</p>
                                <p className="card-text"><small className="text-muted">{this.props.user.email}</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <Button className="modal-opener" onClick={() => this.handleModal()}>Update Your Info</Button>

                <Modal show={this.state.showModal} onHide={() => this.handleModal()}>
                    <Modal.Header>Enter the Song Details</Modal.Header>
                    <Modal.Body>
                        <form onSubmit={(event) => this.handleSubmit(event)}>
                            <label for="firstName">First Name</label>
                            <input type="text" name="firstName" value={this.state.firstName} onChange={(event) => this.handleChange(event)}></input>

                            <label for="lastName">Last Name</label>
                            <input type="text" name="lastName" value={this.state.lastName} onChange={(event) => this.handleChange(event)}></input>

                            <label for="email">Email</label>
                            <input type="text" name="email" value={this.state.email} onChange={(event) => this.handleChange(event)}></input>

                            <label for="genre">Genre</label>
                            <input type="text" name="genre" value={this.state.genre} onChange={(event) => this.handleChange(event)}></input>

                            <label for="instrument">Instrument</label>
                            <input type="text" name="instrument" value={this.state.instrument} onChange={(event) => this.handleChange(event)}></input>
                        
                            <button className="btn modal-submit-btn" type="submit" onClick={() => this.handleModal()}>Update Info!</button>

                        </form>
                    </Modal.Body>
                    <Modal.Footer><Button className="modal-closer" onClick={() => this.handleModal()}>Close</Button></Modal.Footer>
                </Modal>

                {this.mapSongs()}

            </div>
        );
    }
}

UserProfile.propTypes = {
    user: PropTypes.array.isRequired,
    updateProfile: PropTypes.func.isRequired,
    fetchSongs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    user: state.auth.items,
    songs: state.music.items
});

export default connect(mapStateToProps, { updateProfile, fetchSongs })(UserProfile);
