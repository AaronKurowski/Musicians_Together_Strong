import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGearBag, deleteGearFromBag } from '../../actions/bagAction';
import { getUser } from '../../actions/authAction';
import './GearBag.css';


class GearBag extends Component {
    constructor(){
        super();
        this.state = {
            ordersConfirmed: []
        };
        debugger;
        
    }


    componentWillMount = () => {
        try{
            let jwt = localStorage.getItem('token');
            this.props.getUser(jwt);
        }
        catch(error){
            console.log(error);
        }   
    }

    componentDidMount = () => {
        try{
            const currentUserId = this.props.user[0].id;
            this.props.fetchGearBag(currentUserId);
        }
        catch(error){
            console.log(error);
        }
    }

    // confirmOrder = (gear) => {
    //     //send email to seller
    //     debugger;
    //     this.setState({
    //         ordersConfirmed: [...this.state.ordersConfirmed, gear]
    //     });
    //     console.log(this.state.ordersConfirmed);
    // }

    mapTransactions = (orders) => {
        debugger;
        return(
            <div>
                {orders.map(order => 
                    <div className="transaction-data">
                        <div>${order.price} </div>
                        <div>{order.name} </div>
                        <div>The time confirmed</div>
                    </div>
                )}
            </div>
        );
    }

    render(){
        // console.log(this.state.ordersConfirmed);
        console.log(this.props.gear);
        return(
            <div className="gearbag-div">
                <div className="table-div-bag table-div">
                    <table className="table">
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
                                <tr className="table-row">
                                    <td>{item.gear.name}</td>
                                    <td>{item.gear.description}</td>
                                    <td>{item.gear.condition}</td>
                                    <td>${item.gear.price}</td>
                                    <td>{item.gear.contact}</td>
                                    <td>{item.gear.location}</td>
                                    <td><button className="delete-btn btn" onClick={() => this.props.deleteGearFromBag(this.props.user[0].id, item.gear.gearId)}>Delete</button></td>
                                    <td><button className="confirm-btn btn" onClick>Confirm</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="transaction-div">
                    <h3>Transactions</h3>
                    {this.mapTransactions(this.state.ordersConfirmed)}
                </div>
            </div>
        );
    }
}

GearBag.propTypes = {
    fetchGearBag: PropTypes.func.isRequired,
    bag: PropTypes.array.isRequired,
    user: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    deleteGearFromBag: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    bag: state.bag.items,
    user: state.auth.items
});

export default connect(mapStateToProps, { fetchGearBag, getUser, deleteGearFromBag })(GearBag);
