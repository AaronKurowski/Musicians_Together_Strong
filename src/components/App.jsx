import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
} from "react-router-dom";

import Home from './Home/Home.jsx';
import ShowListings from './ShowListings/ShowListings.jsx';
import Gear from './Gear/Gear.jsx';
import Music from './Music/Music.jsx';

import './App.css';
import Nav from './Nav/Nav';
import Login from './Login/Login.jsx';
import Register from './Registration/Register.jsx';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../actions/authAction';
import UserProfile from './Profiles/UserProfile.jsx';
import ViewProfile from './Profiles/ViewProfile.jsx';


class App extends Component {
    componentWillMount = () => {
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            console.log(user.username + " is logged in");
            this.props.getUser(jwt);
        } 
        catch{
            console.log("No one is logged in");
        }
    }
    
    render(){
        return(
            <div id="grad" className="container-fluid main-div">
                <Nav />
                <h1>Musicians Together Strong</h1>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path='/register' component={Register}></Route>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/gearbag" /* component={gearbag} */ />
                    <Route exact path="/userprofile" component={UserProfile}/>
                    <Route exact path="/viewprofile" component={ViewProfile} />
                    <Route exact path="/listings" component={ShowListings}/>
                    <Route exact path="/gear" component={Gear}/>
                    <Route exact path="/music" component={Music}/> 
                </Switch>
            </div>
        );
    }
}

App.propTypes = {
    user: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    user: state.user
});

export default withRouter(connect(mapStateToProps, {getUser})(App));
