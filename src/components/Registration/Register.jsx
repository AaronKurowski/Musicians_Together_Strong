import React from 'react';
import RegisterForm from './RegisterForm.jsx';
import { Link } from 'react-router-dom';

const Register = () => {
    return(
        <div>
            <Link to="/login">Have an Account? Login Here!</Link>
            <RegisterForm />
        </div>
    );
}

export default Register;
