import React, { useContext } from "react";
import "./OptionsSearch.css";
import { ShopContext } from "Context/ShopContext";

const OptionsSearch = () => {
  const { filters, setFilters } = useContext(ShopContext);
  const handleChange = (evt) => {
    setFilters({
      text: filters.text,
      [evt.target.value]: true,
    });
  };
  return (
    <div className="filter-order">
      <label htmlFor="filter-order" className="filter-order-label">
        Order:
      </label>
      <select
        name="select-filters"
        onChange={handleChange}
        id="filter-order"
        className="filter-order-select"
        defaultValue={"default"}
      >
        <option value="default" disabled>
          --Please choose an option--
        </option>
        <option value="recent">most recent</option>
        <option value="price">price</option>
      </select>
    </div>
  );
};

export default OptionsSearch;
