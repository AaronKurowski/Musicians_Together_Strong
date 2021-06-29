import React, { Component } from 'react';
import './Register.css';

class RegisterForm extends Component {
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            email: '',
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

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            password: this.state.password,
            email: this.state.email,
            instrument: this.state.instrument,
            band: this.state.band,
            genre: this.state.genre
        };

        // redux action to handle the call
        this.setState({
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            email: '',
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
                    <input type="text" id="firstName" value={this.state.firstName} onChange={(event) => this.handleChange(event)}></input>

                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" value={this.state.lastName} onChange={(event) => this.handleChange(event)}></input>

                    <label for="userName">UserName</label>
                    <input type="text" id="userName" value={this.state.userName} onChange={(event) => this.handleChange(event)}></input>

                    <label for="password">Password</label>
                    <input type="password" id="userName" value={this.state.password} onChange={(event) => this.handleChange(event)}></input>

                    <label for="email"></label>
                    <input type="email" id="email" value={this.state.email} onChange={(event) => this.handleChange(event)}></input>

                    <label for="instrument">Main Instrument</label>
                    <input type="text" id="instrument" value={this.state.instrument} onChange={(event) => this.handleChange(event)}></input>

                    <label for="band">Last Name</label>
                    <input type="text" id="band" value={this.state.band} onChange={(event) => this.handleChange(event)}></input>

                    <label for="genre">Last Name</label>
                    <input type="text" id="genre" value={this.state.genre} onChange={(event) => this.handleChange(event)}></input>

                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default RegisterForm;
