import React from "react";
import "./Filter.css";
const Filter = ({ updateinput, updaterate }) => {
  return (
    <div>
      <form className="search">
        <input
          type="text"
          placeholder="Search by movie title..."
          onChange={(e) => updateinput(e.target.value)}
        />
        <span style={{ color: "white" }}>OR</span>
        <select
          className="search-rate"
          defaultValue={0}
          onChange={(e) => updaterate(e.target.value)}
        >
          <option value={0}>Search by movie rate...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </form>
    </div>
  );
};

export default Filter;
