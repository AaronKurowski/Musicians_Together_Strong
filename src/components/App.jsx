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

import { Provider } from 'react-redux';
import store from '../store.js';
import './App.css';
import Nav from './Nav/Nav';
import Login from './Login/Login.jsx';
import Register from './Registration/Register.jsx';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class App extends Component {
    

    componentWillMount = () => {
        console.log(this.props);
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            console.log(user.name + " logged in");
        } 
        catch{
            console.log("User not logged in");
        }
    }

    // componentDidMount = () => {
    //     localStorage.removeItem('token');
    //     console.log(localStorage);
    //     // const jwt = localStorage.getItem('token');
    //     try{
    //         debugger;
    //         // const user = jwtDecode(jwt);
    //         // console.log("User logged in");
    //     }catch{
    //         console.log("User not logged in");
    //     }
    // }

    render(){
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
    userToken: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    userToken: state.userToken
});

export default connect(mapStateToProps)(App);
