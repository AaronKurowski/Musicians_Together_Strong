import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createSong } from '../../actions/musicAction';


class SongForm extends Component {
    constructor(){
        super();
        this.state = {
            userId: '',
            title: '',
            artist: '',
            album: '',
            audioFile: '',
            imageURL: '',
            releaseDate: null,
            showeModal: false
        }
    };

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

        const song = {
            userId: this.props.user.userId,
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            audioFile: this.state.audioFile,
            imageURL: this.state.imageURL,
            releaseDate: this.state.releaseDate
        };

        // redux call
        this.props.createSong(song);

        this.setState({
            userId: '',
            title: '',
            artist: '',
            album: '',
            audioFile: '',
            imageURL: '',
            releaseDate: null,
            likeCount: 0
        });
    }

    render(){
        return(
            <div className="modal-div">
                <div className="center-modal">
                    <Button className="modal-opener" onClick={() => this.handleModal()}>Post a Song!</Button>
                </div>
                <Modal show={this.state.showModal} onHide={() => this.handleModal()}>
                    <Modal.Header>Enter the Song Details</Modal.Header>
                    <Modal.Body>
                        <form onSubmit={(event) => this.handleSubmit(event)}>
                            <div className="form-contents">
                                <label for="title">Title</label>
                                <input type="text" name="title" id="title" value={this.state.title} onChange={(event) => this.handleChange(event)}/>

                                <label for="artist">Artist</label>
                                <input type="text" name="artist" id="artist" value={this.state.artist} onChange={(event) => this.handleChange(event)}/>

                                <label for="album">Album</label>
                                <input type="text" name="album" id="album" value={this.state.album} onChange={(event) => this.handleChange(event)}/>

                                <label for="audioFile">Audio File</label>
                                <input type="text" name="audioFile" id="audioFile" value={this.state.audioFile} onChange={(event) => this.handleChange(event)}/>

                                <label for="imageURL">Image URL</label>
                                <input type="text" name="imageURL" id="imageURL" value={this.state.imageURL} onChange={(event) => this.handleChange(event)}/>

                                <label for="releaseDate">Release Date</label>
                                <input type="text" name="releaseDate" id="releaseDate" value={this.state.releaseDate} onChange={(event) => this.handleChange(event)}/>
                                
                                <div className="modal-btn-div">
                                    <button className="btn modal-submit-btn" type="submit" onClick={() => this.handleModal()}>Post Song!</button>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer><Button className="modal-closer" onClick={() => this.handleModal()}>Close</Button></Modal.Footer>
                </Modal>
            </div>
        );
    }
}

SongForm.propTypes = {
    createSong: PropTypes.func.isRequired
};


export default connect(null, { createSong })(SongForm);