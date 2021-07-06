import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGearBag } from '../../actions/bagAction';
import { getUser } from '../../actions/authAction';


class GearBag extends Component {

    UNSAFE_componentWillMount = () => {
        try{
            let jwt = localStorage.getItem('token');
            this.props.getUser(jwt);
        }
        catch(error){
            console.log(error);
        }   
    }

    componentDidMount = () => {
        const currentUserId = this.props.user[0].id;
        this.props.fetchGearBag(currentUserId);
        console.log(this.props.bag);
    }

    render(){
        return(
            <div className="gearbag-div">
                <table className>
                    <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Condition</th>
                                <th>Price</th>
                                <th>Contact</th>
                                <th>Location</th>
                            </tr>
                    </thead>
                    <tbody>
                        {this.props.bag.map((item, index) => 
                            <tr>
                                <td>{item.gear.name}</td>
                                <td>{item.gear.description}</td>
                                <td>{item.gear.condition}</td>
                                <td>{item.gear.price}</td>
                                <td>{item.gear.contact}</td>
                                <td>{item.gear.location}</td>
                                <td><button>Delete</button></td>
                                <td><button>Confirm</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

GearBag.propTypes = {
    fetchGearBag: PropTypes.func.isRequired,
    bag: PropTypes.array.isRequired,
    user: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    bag: state.bag.items,
    user: state.auth.items
});

export default connect(mapStateToProps, { fetchGearBag, getUser })(GearBag);
