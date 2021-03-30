import React from 'react'

const SearchBox = ({ searchText, setSearchText }) => {
    return (
        <div className="searchBox">
            <input 
                type="text" 
                value={ searchText }
                placeholder="Search movies here..." 
                onChange={ e => setSearchText(e.target.value) } 
            />
        </div>
    )
}

export default SearchBox