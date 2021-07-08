import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchGear } from '../../actions/gearAction';
import { fetchAllProfiles } from '../../actions/profileAction';
import { addGearToBag } from '../../actions/bagAction';
import {getUser} from '../../actions/authAction';
import './Gear.css';
import '../Maps/Maps.css';
import GearForm from './GearForm.jsx';
import Map from '../Maps/Maps.jsx';
import Geocode from "react-geocode";
import mapsKey from '../../Keys/MapsKey.js';


class Gear extends Component {
    constructor(props){
        super(props);
        this.state = {
            loc: {},
            searchQuery: '',
            allLocations: []
        }
        this.props.fetchGear();
        

    }

    componentDidMount = () => {
        // this.props.fetchGear();
        this.props.fetchAllProfiles();
        this.props.getUser();
    }

    Geocoder = async (param) => {
        Geocode.setApiKey(mapsKey.geoKey);
        
        await Geocode.fromAddress(param).then(
        (response) => {
                console.log(response.results[0].geometry.location);
                const coords = response.results[0].geometry.location;

                this.setState({
                    allLocations: [...this.state.allLocations, coords]
                });
            },
            (error) => {
                console.log(error);
            }
        );
    }

    // method that returns the seller from gears foreign id
    getSeller = (userId) => {
        for(let i = 0; i < this.props.profiles.length; i++){
            if(this.props.profiles[i].id == userId){
                return this.props.profiles[i].userName
            }
        }
    }

    mapGear = () => {

        return this.props.gear.map((gear, index) => (
            <tr className="table-row" onClick={() => this.Geocoder(gear.location)}>
                <td>{this.getSeller(gear.userId)}</td>
                <td>{gear.name}</td>
                <td>${gear.price}</td>
                <td>{gear.description}</td>
                <td>{gear.condition}</td>
                <td>{gear.dateListed}</td>
                <td>Average</td>
                <td>{gear.location}</td>
                <td>{gear.contact}</td>
                <td><button onClick={() => this.props.addGearToBag(this.props.user[0].id, gear.gearId)}>Add</button></td>
            </tr>
        ));
    }

    render(){
        console.log(this.props.gear);
        return(
            <React.Fragment>
                <GearForm />
                {/*GearSearch */}
                
                <div className="gear-main-div">
                    <div className="map-div">
                        
                    </div>
                    <div className="table-div">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Seller</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Condition</th>
                                    <th scope="col">Date Listed</th>
                                    <th scope="col">Avg Response Time</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.mapGear()}
                            </tbody>
                        </table> 
                    </div> 
                    <Map allLocations={this.state.allLocations} gear={this.props.gear} loc={this.state.loc} />
                </div>
            </React.Fragment>
        );  
    }
}

Gear.propTypes = {
    fetchGear: PropTypes.func.isRequired,
    gear: PropTypes.array.isRequired,
    fetchAllProfiles: PropTypes.func.isRequired,
    profiles: PropTypes.array.isRequired,
    addGearToBag: PropTypes.func.isRequired,
    user: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    gear: state.gear.items,
    profiles: state.profile.items,
    user: state.auth.items
});

export default connect(mapStateToProps, { getUser, fetchGear, fetchAllProfiles, addGearToBag })(Gear);
