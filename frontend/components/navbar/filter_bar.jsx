import React from 'react';

const FilterBar = () => {
  return (
    <div className="filter-button-container">
      <div className= "filters">
        <button className="filter-button">Dates</button>
        <button className="filter-button">Guests</button>
        <button className="filter-button">Home type</button>
        <button className="filter-button">Price</button>
        <button className="filter-button">More filters</button>
      </div>
      <div className="switches">
        <label className="showmap">
          Show Map
        </label>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  )
}

export default FilterBar;