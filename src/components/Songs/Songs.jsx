import React, { Component } from 'react';
import SongForm from './SongForm.jsx';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSongs } from '../../actions/musicAction';
import './Songs.css';


class Songs extends Component {
    constructor(){
        super();
        this.state = {
            searchQuery: ''
        };
    };

    componentWillMount = () => {
        this.props.fetchSongs();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    filterSongs = (songs, query) => {
        if(!query){
            return songs;
        }
        let filteredSongs = songs.filter((song) => {
            if(song.genre.toLowerCase() == query.toLowerCase()){
                return true;
            }
        });
        return filteredSongs;
    }

    render(){
        const filteredSongs = this.filterSongs(this.props.songs, this.state.searchQuery)
        return(
            <div>

                <SongForm />

                <div className="search-div">
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <label for="searchQuery">Select a genre to search</label>
                        <select name="searchQuery" value={this.state.value} onChange={(event) => this.handleChange(event)}>
                            <option disabled selected value> --- select an option ---</option>
                            <option value="metal">Metal</option>
                            <option value="punk">Punk</option>
                            <option value="blues">Blues</option>
                            <option value="pop">Pop</option>
                            <option value="rap">Rap</option>
                            <option value="electronic">Electronic</option>
                        </select>
                        {/* <button className="btn" type="submit">Search Genres</button> */}
                    </form>
                </div>

                {/* <div className="search-div">
                    <form className="song-search" onSubmit={(event) => this.handleSubmit(event)}>
                        <input type="text" name="searchQuery" value={this.state.searchQuery} placeholder="Search Songs" onChange={(event) => this.handleChange(event)}></input>
                        <button type="Submit">Search</button>
                    </form>
                </div> */}
                
                {filteredSongs.map(song => 
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
    songs: state.music.items
});

export default connect(mapStateToProps, { fetchSongs })(Songs);
