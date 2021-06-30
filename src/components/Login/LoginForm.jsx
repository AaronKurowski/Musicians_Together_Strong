import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authAction';
import PropTypes from 'prop-types';
import './LoginForm.css';


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
        debugger;

        this.props.loginUser(credentials);
        this.setState({
            userName: '',
            password: ''
        });
    }

    render(){
        return(
            <div className="outer-login-div">
                <div className="login-form-div">
                    <form className="login-form" onSubmit={(event) => this.handleSubmit(event)}>
                        <label for="userName">UserName</label>
                        <input type="text" name="userName" id="userName" value={this.state.userName} onChange={(event) => this.handleChange(event)} />

                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" value={this.state.password} onChange={(event) => this.handleChange(event)} />

                        <button className="btn" type="submit">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

LoginForm.propTypes = {
    loginUser: PropTypes.func.isRequired
};


export default connect(null, { loginUser })(LoginForm);
