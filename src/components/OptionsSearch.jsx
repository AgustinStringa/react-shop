import React from 'react'
import './OptionsSearch.css'
const OptionsSearch = () => {
  return (
    <div className="filter-order">
    <label htmlFor="filter-order" className="filter-order-label">Order:</label>
    <select name="" id="filter-order" className="filter-order-select">
      <option value="" disabled>
        --Please choose an option--
      </option>
      <option value="">most recent</option>
      <option value="">price</option>
    </select>
  </div>
  )
}

export default OptionsSearch