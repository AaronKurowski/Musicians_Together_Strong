import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import './Maps.css';
import mapsKey from '../../Keys/MapsKey.js';
import MapMarker from './MapMarker.jsx';

const mapStyles = {
    width: '98.1%',
    height: '550px',

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
            <div className="map">
                <Map className="map"
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 43.0388, lng: -87.9065 }}    
                >
                    <Marker 
                        key="marker_1"
                        position={{
                            lat: 43.0388,
                            lng: -87.9065
                        }}
                    />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: mapsKey.mapsKey
})(MapContainer)