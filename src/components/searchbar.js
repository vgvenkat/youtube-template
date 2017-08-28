import React from "react";

const searchBar = () =>
  <div className="searchBar" style={{ marginTop: "1em" }}>
    <input
      type="text"
      placeholder="search"
      style={{
        width: "40em",
        height: "2em",
        padding: "1em"
      }}
    />{" "}
  </div>;

export default searchBar;
