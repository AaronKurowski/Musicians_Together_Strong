import React, { useState } from 'react';

const GearSearch = () => {
    const [searchQuery, setSearchQuery] = useState();

    return(
        <form onSubmit>
            <input type="text"></input>
            <button type="submit">Search</button>
            
        </form>
    );
}