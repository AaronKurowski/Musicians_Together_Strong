import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createShow } from '../../actions/showAction';
import PropTypes from 'prop-types';
import './ShowForm.css';
import { Button, Modal } from 'react-bootstrap';


class ShowForm extends Component {
    constructor(){
        super();
        this.state = {
            userId: null,
            name: '',
            description: '',
            bands: '',
            imageurl: '',
            entryfee: null,
            date: null,
            location: '',
            showModal: false
        }
    }

    handleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        const show = {
            userId: this.state.userId,
            name: this.state.name,
            description: this.state.description,
            bands: this.state.bands,
            imageurl: this.state.imageurl,
            entryfee: parseInt(this.state.entryfee),
            date: this.state.date,
            location: this.state.location
        };
        this.props.createShow(show);

        this.setState({
            userId: null,
            name: '',
            description: '',
            bands: '',
            imageurl: '',
            entryfee: null,
            date: null,
            location: ''
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return(
            <div className="modal-div">
                <div className="center-modal">
                    <Button className="modal-opener" onClick={() => this.handleModal()}>Post a Show!</Button>
                </div>
                <Modal show={this.state.showModal} onHide={() => this.handleModal()}>
                    <Modal.Header>Enter the Show Details</Modal.Header>
                    <Modal.Body>
                        <form className="show-form" onSubmit={(event) => this.handleSubmit(event)}>
                            <div className="form-contents">
                                <label for="name">Name</label>
                                <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleChange(event)}/>

                                <label for="description">Description</label>
                                <input type="text" name="description" value={this.state.description} onChange={(event) => this.handleChange(event)}></input>
                               
                                <label for="bands">Bands</label>
                                <input type="text" name="bands" value={this.state.bands} onChange={(event) => this.handleChange(event)}></input>
                                
                                <label for="imageurl">ImageURL</label>
                                <input type="text" name="imageurl" value={this.state.imageurl} onChange={(event) => this.handleChange(event)}></input>
                               
                                <label for="entryfee">Entry Fee</label>
                                <input type="text" name="entryfee" value={this.state.entryfee} onChange={(event) => this.handleChange(event)}></input>
                               
                                <label for="date">Date</label>
                                <input type="date" name="date" value={this.state.date} onChange={(event) => this.handleChange(event)}></input>

                                <label for="location">Location</label>
                                <input type="text" name="location" value={this.state.location} onChange={(event) => this.handleChange(event)}></input>
                                
                                <div className="modal-btn-div">
                                    <button onClick={() => this.handleModal()} className="btn modal-submit-btn" type="submit">Submit</button>
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

ShowForm.propTypes = {
    createShow: PropTypes.func.isRequired
};

export default connect(null, { createShow })(ShowForm);