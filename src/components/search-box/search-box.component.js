import React from 'react'
import './search-box.styles.css'


const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input className="search" id="searchField" type="search" placeholder={placeholder}
      onChange={handleChange} />
)
}

export default SearchBox
