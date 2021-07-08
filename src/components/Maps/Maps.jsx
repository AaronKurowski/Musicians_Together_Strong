import React, { Component, useState } from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import './Maps.css';
import mapsKey from '../../Keys/MapsKey.js';
import Geocode from "react-geocode";


const mapStyles = {
    width: '98.1%',
    height: '550px',
    marginTop: '12px'

}

class MapContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        // console.log(this.props.allLocations);
        // console.log(this.props.autoGeocoder)
        return(
            <div className="map">
                <Map className="map"
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 43.0388, lng: -87.9065 }}    
                >
                    {this.props.allLocations.map((object, index) => {
                        return <Marker key={index} position={object} />
                    })}
                </Map>
            </div>
        );
    }
}



export default GoogleApiWrapper({apiKey: mapsKey.mapsKey})(MapContainer)