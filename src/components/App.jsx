import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home/Home.jsx';
import ShowListings from './ShowListings/ShowListings.jsx';
import Gear from './Gear/Gear.jsx';
import Music from './Music/Music.jsx';

import { Provider } from 'react-redux';
import store from '../store.js';


class App extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <Provider store={store}>
                <div>
                    <h3>Musicians Together Strong</h3>
                    <Switch>
                        <Route exact path="/" component={Home}/>
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
