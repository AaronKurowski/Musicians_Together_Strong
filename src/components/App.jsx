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


class App extends Component {
    // componentDidMount = () => {
    //     // jwt authentication
    // }

    render(){
        return(
            <Provider store={store}>
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
                        <Route exact path="/listings" component={ShowListings}/>
                        <Route exact path="/gear" component={Gear}/>
                        <Route exact path="/music" component={Music}/>
                        
                    </Switch>
                </div>
            </Provider>
        );
    }
}
export default App;
