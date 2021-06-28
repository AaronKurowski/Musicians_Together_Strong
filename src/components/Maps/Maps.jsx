import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import './Maps.css';
import mapsKey from '../../Keys/MapsKey.js';

const mapStyles = {
    width: '500px',
    height: '500px',
}

class MapContainer extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 8
    };

    

    render(){
        console.log(mapsKey);
        return(
            <Map 
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 43.0388, lng: -87.9065 }}    
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: mapsKey.mapsKey
})(MapContainer)