import React from 'react'
import InputSearch from 'Components/InputSearch'
import OptionsSearch from 'Components/OptionsSearch'
import './SearchFilters.css'
const SearchFilters = () => {
  return (
    <div className="search-filters">
        <InputSearch/>
        <OptionsSearch/>
    </div>
  )
}

export default SearchFilters