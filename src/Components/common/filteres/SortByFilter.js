import React from "react";

const SortByFilter = (props) => {
  return (
    <>
      <select id="sort_by" onChange={(e) => props.addFilter(e.target.value)}>
        <option value="1">sort by</option>
        {props.SortBy.map((cur) => {
          return (
            <option value={cur.name} key={cur.id}>
              {cur.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SortByFilter;
