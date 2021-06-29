import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            userName: '',
            password: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const credentials = {
            userName: this.state.userName,
            password: this.state.password
        };

        // use redux to send credentials
        
        this.setState({
            userName: '',
            password: ''
        });
    }

    render(){
        return(
            <div className="login-form-div">
                <form onSubmit>
                    <label for="userName">UserName</label>
                    <input type="text" name="userName" id="userName" value={this.state.userName} onChange={(event) => this.handleChange(event)} />

                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" value={this.state.password} onChange={(event) => this.handleChange(event)} />
                </form>
            </div>
        );
    }
}

export default LoginForm;