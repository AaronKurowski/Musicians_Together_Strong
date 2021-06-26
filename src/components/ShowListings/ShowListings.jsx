import React, {Component} from 'react';
import ShowForm from './ShowForm.jsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows, createShow } from '../../actions/showAction';

class ShowListings extends Component {
    componentDidMount = () => {
        this.props.fetchShows();
    }

    mapShows = () => {
        console.log(this.props.shows);
        return this.props.shows.map(show => (
            <div>
                {show.name}
            </div>
        ));
    }
    render(){
        return(
            <div>
                {this.mapShows()}
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
