import React, { Component } from 'react';
import './Login.css';
import Register from '../Registration/Register.jsx';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm.jsx';


class Login extends Component {

    componentWillMount = () => {
        //
    }
    
    render(){
        return(
            <div>
                <Link to="/register">Not Signed up? Register Here!</Link>
                <LoginForm />
            </div>
        );
    }
}

export default Login;
