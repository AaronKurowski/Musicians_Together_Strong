import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchShows, createShow} from '../../actions/showAction';
import ShowListings from './ShowListings';

class ShowForm extends Component {
    constructor(){
        super();
        this.state = {
            userId: null,
            name: '',
            description: '',
            bands: '',
            imageurl: '',
            entryfee: null,
            date: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const show = {
            userId: this.state.userId,
            name: this.state.name,
            description: this.state.description,
            bands: this.state.bands,
            imageurl: this.state.imageurl,
            entryfee: this.state.entryfee,
            date: this.state.date
        }
        this.props.createShow(show);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label for="name">Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleChange(event)}/>

                    <label for="description">Description</label>
                    <input type="text" name="description" value={this.state.description} onChange={(event) => this.handleChange(event)}></input>
                    
                    <label for="bands">Bands</label>
                    <input type="text" name="bands" value={this.state.bands} onChange={(event) => this.handleChange(event)}></input>
                    
                    <label for="imageurl">ImageURL</label>
                    <input type="text" name="imageurl" value={this.state.imageurl} onChange={(event) => this.handleChange(event)}></input>
                    
                    <label for="entryfee">Entry Fee</label>
                    <input type="text" name="entryfee" value={this.state.entryfee} onChange={(event) => this.handleChange(event)}></input>
                    
                    <label for="date">Date</label>
                    <input type="date" name="date" value={this.state.date} onChange={(event) => this.handleChange(event)}></input>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default ShowForm;