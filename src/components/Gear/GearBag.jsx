import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGearBag, deleteGearFromBag } from '../../actions/bagAction';
import { getUser } from '../../actions/authAction';
import { buyGear, fetchGear } from '../../actions/gearAction';
import './GearBag.css';


class GearBag extends Component {
    constructor(){
        super();
        this.state = {
            confirmedOrders: 0
        };
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
            this.props.fetchGear();
        }
        catch(error){
            console.log(error);
        }
    }

    confirmOrder = (userId, gearId) => {
        debugger;
        this.props.buyGear(userId, gearId);
        this.props.deleteGearFromBag(this.props.user[0].id, gearId);
    }

    findGearWithBuyers = (gear) => {
        debugger;
        let filteredTransactions = gear.filter((item) => {
            if(item.buyerId !== null){
                return true;
            }
            return false;
        })
        return filteredTransactions;
    }

    mapTransactions = (gear) => {
        debugger;
        let transactionsWithBuyers = this.findGearWithBuyers(gear);
        debugger;
        return(
            <table className="transaction-table">
                <thead>
                    <tr>
                        <th>Price</th>
                        <th>Item</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionsWithBuyers.map(item => 
                        <tr className="transaction-data">
                            <td>${item.price}</td>
                            <td>{item.name}</td>
                            <td>Contact: {item.contact}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    showCorrectGearOnTable = (bag) => {
        let gearWithNoBuyer = bag.filter((item) => {
            if(item.gear.buyerId == null){
                return true;
            }
            return false;
        });
        return gearWithNoBuyer;
    }

    render(){
        // console.log(this.state.ordersConfirmed);
        console.log(this.props.bag);
        const correctGear = this.showCorrectGearOnTable(this.props.bag);
        return(
            <div className="gearbag-div">
                <div className="table-div-bag">
                    <table className="gearbag-table">
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
                            {correctGear.map((item, index) => 
                                <tr className="table-row">
                                    <td>{item.gear.name}</td>
                                    <td>{item.gear.description}</td>
                                    <td>{item.gear.condition}</td>
                                    <td>${item.gear.price}</td>
                                    <td>{item.gear.contact}</td>
                                    <td>{item.gear.location}</td>
                                    <td><button className="delete-btn btn" onClick={() => this.props.deleteGearFromBag(this.props.user[0].id, item.gear.gearId)}>Delete</button></td>
                                    <td><button className="confirm-btn btn" onClick={() => this.confirmOrder(this.props.user[0].id, item.gear.gearId)}>Confirm</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="transaction-div">
                    <h3>Transactions</h3>
                    {this.mapTransactions(this.props.gear)}
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
    deleteGearFromBag: PropTypes.func.isRequired,
    buyGear: PropTypes.func.isRequired,
    fetchGear: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    bag: state.bag.items,
    user: state.auth.items,
    gear: state.gear.items
});

export default connect(mapStateToProps, { fetchGearBag, getUser, deleteGearFromBag, buyGear, fetchGear })(GearBag);
