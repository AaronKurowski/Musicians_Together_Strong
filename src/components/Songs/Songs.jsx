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
            <div className="musician-div">

                <SongForm />

                <div className="search-div">
                    <form className="genre-form">
                        <label className="genre-label" for="searchQuery">Select a genre to search</label><br />
                        <select name="searchQuery" value={this.state.value} onChange={(event) => this.handleChange(event)}>
                            <option disabled selected value> --- select an option ---</option>
                            <option value="metal">Metal</option>
                            <option value="punk">Punk</option>
                            <option value="blues">Blues</option>
                            <option value="pop">Pop</option>
                            <option value="rap">Rap</option>
                            <option value="electronic">Electronic</option>
                        </select>
                    </form>
                </div>
                
                {/* this div below needs to be clickable to redirect to the user who posted it */}
                <ul class="list-group">
                    {filteredSongs.map(song =>  
                        <li className="hover list-group-item">
                            <div>
                                {song.title} by {song.artist}<br/>
                            </div>
                            <div className="genre-div">{song.genre}</div>
                            

                        </li>
                    )}
                </ul>
                
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
