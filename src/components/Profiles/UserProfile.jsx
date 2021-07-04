import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './UserProfile.css';
import {Modal, Button} from 'react-bootstrap';
import { updateProfile } from '../../actions/profileAction';


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

    render(){
        console.log(this.props.user);
        return(
            <div className="outer-profile-div">
                <h2>Hello {this.props.user.userName}</h2>
                {this.props.user.instrument}
                {this.props.user.genre}
                {this.props.user.email}
                {this.props.user.firstName}
                {this.props.user.lastName}

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


            </div>
        );
    }
}

UserProfile.propTypes = {
    user: PropTypes.array.isRequired,
    updateProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    user: state.auth.items
});

export default connect(mapStateToProps, { updateProfile })(UserProfile);
