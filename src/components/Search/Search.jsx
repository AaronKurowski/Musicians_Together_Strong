import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';


const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");

    
    return(
        <div className="search-div">
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" value={searchQuery} placeholder="Search..." onChange={(event) => setSearchQuery(event.target.value)}></input>
                <button type="Submit">Search</button>
            </form>

        </div>
    );
}

export default Search;