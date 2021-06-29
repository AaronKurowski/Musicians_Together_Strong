import React, { Component } from 'react';
import './Login.css';
import Register from '../Registration/Register.jsx';
import { Link } from 'react-router-dom';

class Login extends Component {

    componentWillMount = () => {
        //
    }
    
    render(){
        return(
            <div>
                <Link to="/register">Not Signed up? Register Here!</Link>
            </div>
        );
    }
}

export default Login;
