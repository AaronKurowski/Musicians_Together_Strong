import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchGear } from '../../actions/gearAction';
import './Gear.css';
import '../Maps/Maps.css';
import GearForm from './GearForm.jsx';
import Map from '../Maps/Maps.jsx';
import Geocode from "react-geocode";
import mapsKey from '../../Keys/MapsKey.js';

class Gear extends Component {
    constructor(){
        super();
        this.state = {
            loc: {}
        }
    }

    componentWillMount = () => {
        this.props.fetchGear();
    }

    Geocoder = async (param) => {
        Geocode.setApiKey(mapsKey.geoKey);
        
        await Geocode.fromAddress(param).then(
        (response) => {
                console.log(response.results[0].geometry.location);
                const coords = response.results[0].geometry.location;
                this.setState({
                    loc: coords
                });
            },
            (error) => {
                console.log(error);
            }
        );
    }

    mapGear = () => {
        console.log(this.props.gear);

        return this.props.gear.map((gear, index) => (
            <tr className="table-row" onClick={() => this.Geocoder(gear.location)}>
                <td>Seller</td>
                <td>{gear.name}</td>
                <td>${gear.price}</td>
                <td>{gear.description}</td>
                <td>{gear.condition}</td>
                <td>{gear.dateListed}</td>
                <td>Average</td>
                <td>{gear.location}</td>
                <td>{gear.contact}</td>
            </tr>
        ));
    }

    render(){
        console.log(this.props);
        console.log(this.state.loc)
        return(
            <React.Fragment>
                <GearForm />

                {/* Weird interaction with maps. doesn't style, overlaps everything */}
                
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
                    <Map loc={this.state.loc} />  
                </div>
            </React.Fragment>
        );  
    }
}

Gear.propTypes = {
    fetchGear: PropTypes.func.isRequired,
    gear: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    gear: state.gear.items
});

export default connect(mapStateToProps, { fetchGear })(Gear);
