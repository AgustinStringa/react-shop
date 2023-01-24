import React from 'react'
import InputSearch from 'Components/InputSearch'
import OptionsSearch from 'Components/OptionsSearch'
import './SearchFilters.css'
import CategoryList from 'Containers/Layout/CategoryList/CategoryList'
const SearchFilters = () => {
  return (
    <div className="search-filters">
        <InputSearch/>
        <div className="category-filters">
          <CategoryList/>
        </div>
        <OptionsSearch/>
    </div>
  )
}

export default SearchFilters