import React, { useState } from 'react';


const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");



    
    return(
        <div className="search-div">
                    <form>
                        <label for="searchQuery">Search user by their instrument</label>
                        <select name="searchQuery" value={this.state.value} onChange={(event) => this.handleChange(event)}>
                            <option disabled selected value> --- select an option ---</option>
                            <option value="guitar">Guitar</option>
                            <option value="bass">Bass</option>
                            <option value="drums">Drums</option>
                            <option value="vocals">Vocals</option>
                            <option value="cello">Cello</option>
                            <option value="flute">Flute</option>
                            <option value="keyboards">Keyboards</option>
                            <option value="saxophone">Saxophone</option>
                            <option value="french horn">French Horn</option>
                            <option value="egg shakers">Egg Shakers</option>
                        </select>
                    </form>
                </div>
    );
}

export default Search;