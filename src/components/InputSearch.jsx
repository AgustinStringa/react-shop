import React from 'react'
import IcoSearch from 'Icons/lupa.png'
import './InputSearch.css'
const InputSearch = () => {
  return (
    <form action="">
    <div class="filter-search">
      <input
        type="search"
        name=""
        id=""
        class="filter-search__input"
        placeholder="Search product"
      />
      <button class="filter-search__button">
        <figure>
          <img src={IcoSearch} alt="magnifying glass" />
        </figure>
      </button>
    </div>
  </form>
  )
}

export default InputSearch