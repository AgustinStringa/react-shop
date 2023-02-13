import React, { useContext } from "react";
import IcoSearch from "Icons/lupa.png";
import "./InputSearch.css";
import { ShopContext } from "Context/ShopContext";

const InputSearch = () => {
  const { filters, setFilters } = useContext(ShopContext);
  const handleChange = (evt) => {
    setFilters({
      text: evt.target.value,
    });
  };
  return (
    <form action="">
      <div className="filter-search">
        <input
          type="search"
          name=""
          id=""
          className="filter-search__input"
          placeholder="Search product"
          onChange={handleChange}
        />
        <button className="filter-search__button">
          <figure>
            <img src={IcoSearch} alt="magnifying glass" />
          </figure>
        </button>
      </div>
    </form>
  );
};

export default InputSearch;
