import React from 'react'
import './OptionsSearch.css'
const OptionsSearch = () => {
  return (
    <div class="filter-order">
    <label for="filter-order" class="filter-order-label">Order:</label>
    <select name="" id="filter-order" class="filter-order-select">
      <option value="" disabled selected>
        --Please choose an option--
      </option>
      <option value="">most recent</option>
      <option value="">price</option>
    </select>
  </div>
  )
}

export default OptionsSearch