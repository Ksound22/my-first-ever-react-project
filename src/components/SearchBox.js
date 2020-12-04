import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4 m-3">
      <input
        className="from-control"
        placeholder="Search a movie..."
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
