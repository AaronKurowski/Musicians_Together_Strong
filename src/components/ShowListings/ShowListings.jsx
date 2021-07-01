import React, {Component} from 'react';
import ShowForm from './ShowForm.jsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows } from '../../actions/showAction';
import './ShowListings.css';

class ShowListings extends Component {
    componentDidMount = () => {
        this.props.fetchShows();
    }

    mapShows = () => {
        console.log(this.props.shows);
        debugger;
        return this.props.shows.map(show => (
            <div className="card">
                <div className="card-body">
                    <img className="card-img-top" src={show.imageURL} alt="show flyer"></img>
                    <h4>{show.name}</h4> 
                    <p>Lineup: {show.bands}</p>         
                    <p>{show.description}</p>
                    <p>${show.entryFee}</p>
                    <p>{show.date}</p>
                </div>
            </div>
        ));
    }
    render(){
        return(
            <div>
                <ShowForm />
                <div className="grid">
                    {this.mapShows()}
                </div>
            </div>
        );
    }
}

ShowListings.propTypes = {
    fetchShows: PropTypes.func.isRequired,
    shows: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    shows: state.shows.items
});

export default connect(mapStateToProps, { fetchShows })(ShowListings);
