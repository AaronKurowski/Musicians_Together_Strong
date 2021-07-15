import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';


class Nav extends Component {

    render(){
        // console.log('user: ' + this.props.user)
        // console.log(this.props)
        return(
            <div className="navbar">
                <Link to='/'>Home</Link>
                {/* <Link to='/gearbag'>Gear Bag</Link> */}

                {this.props.user.length == 0 &&
                    <Link className="nav-link" to='/login'>Log In/Register</Link> 
                }
                {this.props.user.length > 0 &&
                    <React.Fragment>
                        <Link to='/userprofile'>{this.props.user[0].firstName}'s Profile</Link>
                        <Link to='/gearbag'>Gearbag</Link>
                        <Link onClick={() => this.props.logoutUser(this.props.user.userId)} style={{float: 'right'}} >Log Out</Link>
                    </React.Fragment>  
                }
            </div>
        );
    }
}

Nav.propTypes = {
    user: PropTypes.array.isRequired,
    logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    user: state.auth.items
});

export default connect(mapStateToProps, { logoutUser })(Nav);
