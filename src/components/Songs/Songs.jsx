import React, { Component } from 'react';
import SongForm from './SongForm.jsx';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSongs } from '../../actions/musicAction';


class Songs extends Component {
    componentWillMount = () => {
        debugger;
        this.props.fetchSongs();
    }


    render(){
        return(
            <div>
                <SongForm />

                {this.props.songs.map(song => 
                    <div>{song.title}</div>
                )}

            </div>
        );
    }
}

Songs.propTypes = {
    fetchSongs: PropTypes.func.isRequired,
    songs: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    songs: state.songs.items
});

export default connect(mapStateToProps, { fetchSongs })(Songs);
