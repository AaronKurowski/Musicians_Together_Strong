import React, { Component } from 'react';
import './Register.css';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authAction';
import PropTypes from 'prop-types';


class RegisterForm extends Component {
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            email: '',
            phoneNumber: '',
            instrument: '',
            band: '',
            genre: ''
        };
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        debugger;
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            password: this.state.password,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            instrument: this.state.instrument,
            band: this.state.band,
            genre: this.state.genre
        };
        debugger;
        this.props.registerUser(user);

        debugger;
        this.setState({
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            email: '',
            phoneNumber: '',
            instrument: '',
            band: '',
            genre: ''
        });
    }

    render(){
        return(
            <div className="register-div">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label for="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={(event) => this.handleChange(event)}></input>

                    <label for="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={(event) => this.handleChange(event)}></input>

                    <label for="userName">UserName</label>
                    <input type="text" name="userName" id="userName" value={this.state.userName} onChange={(event) => this.handleChange(event)}></input>

                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" value={this.state.password} onChange={(event) => this.handleChange(event)}></input>

                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" value={this.state.email} onChange={(event) => this.handleChange(event)}></input>

                    <label for="phoneNumber">PhoneNumber</label>
                    <input type="tel" name="phoneNumber" id="phoneNumber" value={this.state.phoneNumber} onChange={(event) => this.handleChange(event)}></input>

                    <label for="instrument">Main Instrument</label>
                    <input type="text" name="instrument" id="instrument" value={this.state.instrument} onChange={(event) => this.handleChange(event)}></input>

                    <label for="band">Band</label>
                    <input type="text" name="band" id="band" value={this.state.band} onChange={(event) => this.handleChange(event)}></input>

                    <label for="genre">Genre</label>
                    <input type="text" name="genre" id="genre" value={this.state.genre} onChange={(event) => this.handleChange(event)}></input>

                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

RegisterForm.propTypes = {
    registerUser: PropTypes.func.isRequired
};

export default connect(null, { registerUser })(RegisterForm);
