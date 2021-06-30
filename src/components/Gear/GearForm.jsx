import React, { Component } from 'react';
import './GearForm.css';
import { connect } from 'react-redux';
import { createGear } from '../../actions/gearAction';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

class GearForm extends Component {
    constructor(){
        super();
        this.state = {
            userId: null,
            name: '',
            description: '',
            price: null,
            imageurl: '',
            condition: '',
            dateListed: null,
            showModal: false
        };
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
        debugger;

        const gear = {
            userId: this.state.userId,
            name: this.state.name,
            description: this.state.description,
            price: parseInt(this.state.price),
            imageurl: this.state.imageurl,
            condition: this.state.condition,
            dateListed: this.state.dateListed
        };

        this.props.createGear(gear);

        this.setState({
            userId: null,
            name: '',
            description: '',
            price: null,
            imageurl: '',
            condition: '',
            dateListed: null,
        });
    }

    render(){
        return(
            <div className="modal-div">
                <div className="center-modal">
                    <Button className="modal-opener" onClick={() => this.handleModal()}>Post Your Gear!</Button>
                </div>
                <Modal show={this.state.showModal} onHide={() => this.handleModal()}>
                    <Modal.Header>Enter the Gear Details</Modal.Header>
                    <Modal.Body>
                        <form className="show-form" onSubmit={(event) => this.handleSubmit(event)}>
                            <div className="form-contents">
                                <label for="name">Name</label>
                                <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleChange(event)}/>

                                <label for="description">Description</label>
                                <input type="text" name="description" value={this.state.description} onChange={(event) => this.handleChange(event)}></input>
                               
                                <label for="price">Price</label>
                                <input type="text" name="price" value={this.state.price} onChange={(event) => this.handleChange(event)}></input>
                                
                                <label for="imageurl">ImageURL</label>
                                <input type="text" name="imageurl" value={this.state.imageurl} onChange={(event) => this.handleChange(event)}></input>
                               
                                <label for="condition">Condition</label>
                                <input type="text" name="condition" value={this.state.condition} onChange={(event) => this.handleChange(event)}></input>
                               
                                <label for="dateListed">Date</label>
                                <input type="date" name="dateListed" value={this.state.dateListed} onChange={(event) => this.handleChange(event)}></input>
                                
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

GearForm.propTypes = {
    createGear: PropTypes.func.isRequired
};

export default connect(null, { createGear })(GearForm);
