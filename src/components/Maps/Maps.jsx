import React, { Component, useState } from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import './Maps.css';
import mapsKey from '../../Keys/MapsKey.js';
import Geocoder from './Geocode.jsx';
import Geocode from "react-geocode";
import geoKey from "../../Keys/MapsKey";


const mapStyles = {
    width: '98.1%',
    height: '550px',

}

class MapContainer extends Component {
    constructor(){
        super();
        this.Geocoder("Kenosha");
        this.state = {
            address: {}
        }
    }

    Geocoder = async (param) => {
        Geocode.setApiKey(mapsKey.geoKey);
        debugger;

        await Geocode.fromAddress(param).then(
        (response) => {
            console.log(response.results[0].geometry.location);
            const coords = response.results[0].geometry.location;
            this.setState({
                address: coords
            })
        },
        (error) => {
            console.log(error);
            return "something error";
        }
    );
    }

    render(){
        console.log(mapsKey.geoKey);
        return(
            <div className="map">
                <Map className="map"
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 43.0388, lng: -87.9065 }}    
                >
                    <Marker 
                        key="marker_1"
                        position={this.state.address}
                    />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: mapsKey.mapsKey
})(MapContainer)