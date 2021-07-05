import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm.jsx';


class Login extends Component {

    render(){
        return(
            <div className="big-log">
                <div className="link-div">
                    <Link style={{color: 'white'}} to="/register">Not Signed up? Register Here!</Link>
                </div>
                <LoginForm />  
            </div>
        );
    }
}

export default Login;
