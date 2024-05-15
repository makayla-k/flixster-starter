import React from "react";
import ReactDOM from "react-dom";
import '../ComponentsCSS/SearchComponent.css'


function SearchComponent() {
  return (
    // JSX code for rendering the component
      <form className="search">
          <input type="text" name="movieSearch"></input>
          <button>Search</button>
      </form>
  );
}

export default SearchComponent;