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

    formatDate = (dateString) => {
        var options = { year: 'numeric', month: 'long', day: 'numeric'}
        return new Date(dateString).toLocaleDateString([], options);
    }

    mapShows = () => {
        console.log(this.props.shows);
        return this.props.shows.map(show => (
            <div className="card card-showlisting">
                <div className="card-body card-show-body">
                    <img className="card-img-top" src={show.imageURL} alt="show flyer"></img>
                    <h3 className="show-name">{show.name}</h3> 
                    <p>Lineup: {show.bands}</p>         
                    <p>{show.description}</p>
                    <p>${show.entryFee} Entry</p>
                    <p>{this.formatDate(show.date)}</p>
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
