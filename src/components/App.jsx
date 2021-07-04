import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './Home/Home.jsx';
import ShowListings from './ShowListings/ShowListings.jsx';
import Gear from './Gear/Gear.jsx';
import Music from './Music/Music.jsx';

// import { Provider } from 'react-redux';
// import store from '../store.js';
import './App.css';
import Nav from './Nav/Nav';
import Login from './Login/Login.jsx';
import Register from './Registration/Register.jsx';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../actions/authAction';
// import axios from 'axios';


class App extends Component {

    componentWillMount = () => {
        const jwt = localStorage.getItem('token');
        try{
            debugger;
            const user = jwtDecode(jwt);
            console.log(user.username + " is logged in");
            this.props.getUser(jwt);
        } 
        catch{
            console.log("No one is logged in");
        }
    }

    // getUser = async (token) => {
    //     let response = await axios.get('https://localhost:44394/api/examples/user', {
    //     headers: {"Authorization" : `Bearer ${token}`}
    // })
    //     console.log(response.data);
    //     return response;
    // }
    
    render(){
        console.log(this.props)
        return(
            
                <div id="grad" className="container-fluid main-div">
                    <Nav />
                    <h1>Musicians Together Strong</h1>

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        {/* <Route render={props => {
                            if(!user){
                                return <Redirect to="/login" />
                            } else{
                                return <ProfileScreen {...props} user={user} />
                            }
                        }} /> */}
                        <Route exact path='/register' component={Register}></Route>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/gearbag" /* component={gearbag} */ />
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

export default connect(mapStateToProps, {getUser})(App);
