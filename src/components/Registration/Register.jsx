import React from 'react';
import RegisterForm from './RegisterForm.jsx';
import { Link } from 'react-router-dom';
import '../Login/LoginForm.css';
import '../Login/Login.css';
import './RegisterForm.css';

const Register = () => {
    return(
        <div className="big-log">           
            <Link style={{color: 'white'}} to="/login">Have an Account? Login Here!</Link>
            <RegisterForm />
        </div>
    );
}

export default Register;
