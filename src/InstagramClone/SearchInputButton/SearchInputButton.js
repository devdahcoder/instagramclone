import React from 'react'
import "./style/searchinputbutton.css"

const SearchInputButton = () => {
    return (
        <div className="unfocused-search-container" role="button" tabindex="0">
            <div className="unfocused-search-display">
                <span className="unfocused-search-icon coreSpriteSearchIcon"></span>
                <span className="unfocused-search-placeholder">Search</span>
            </div>
        </div>
    )
}

export default SearchInputButton
