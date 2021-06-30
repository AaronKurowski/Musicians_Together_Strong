import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';


class Nav extends Component {
    componentWillMount = () => {

    }

    render(){
        console.log('user: ' + this.props.user)
        return(
            <div class="navbar">
                <Link to='/'>Home</Link>
                <Link to='/gearbag'>Gear Bag</Link>

                {!this.props.user.userId &&
                    <Link className="nav-link" to='/login'>Log In/Register</Link>
                }
                {this.props.user.userId &&
                    <Link onClick={() => this.props.logoutUser(this.props.user.userId)} style={{float: 'right'}} >Log Out</Link>     
                }
                {/* <Link style={{float: 'right'}} to='/register'>Register</Link> */}
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
