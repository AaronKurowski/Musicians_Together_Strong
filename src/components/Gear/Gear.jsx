import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchGear } from '../../actions/gearAction';
import './Gear.css';
import GearForm from './GearForm.jsx';

class Gear extends Component {
    componentWillMount = () => {
        this.props.fetchGear();
    }

    mapGear = () => {
        debugger;
        console.log(this.props.gear);
        return this.props.gear.map(gear => (
            <div>{gear.name}</div>
        ));
    }
    render(){
        return(
            <div>
                <GearForm />
                {this.mapGear()}
            </div>
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
