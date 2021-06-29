import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authAction';


class Nav extends Component {
    componentWillMount = () => {

    }

    render(){
        console.log(this.props);
        return(
            <div class="navbar">
                <Link to='/'>Home</Link>
                <Link to='/gearbag'>Gear Bag</Link>

                {!this.props.user &&
                    <Link className="nav-link" to='/login'>Log In/Register</Link>
                }
                {this.props.user &&
                    <Link style={{float: 'right'}} >Log Out</Link>     
                }
                {/* <Link style={{float: 'right'}} to='/register'>Register</Link> */}
            </div>
        );
    }
}

Nav.propTypes = {
    loginUser: PropTypes.func.isRequired,
    userToken: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    userToken: state.userToken
});

export default connect(mapStateToProps, { loginUser })(Nav);
