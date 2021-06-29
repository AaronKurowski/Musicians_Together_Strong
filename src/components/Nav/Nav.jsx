import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    render(){
        return(
            <div class="navbar">
                <Link to='/'>Home</Link>
                <Link to='/cart'>Gear Bag</Link>

                {/* Conditionally render these */}
                <Link style={{float: 'right'}} to='/login'>Log In</Link>
                <Link style={{float: 'right'}} to='/register'>Register</Link>
                <Link style={{float: 'right'}} >Log Out</Link>
            </div>
        );
    }
}

export default Nav;