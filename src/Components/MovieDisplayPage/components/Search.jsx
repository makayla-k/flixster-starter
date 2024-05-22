import React from "react";
import { useState } from "react";
import '../../../ComponentsCSS/SearchComponent.css'


function Search({ onSearch, onClear }) {
  const [searchText, setSearchText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchText)
  }
  return (
    // JSX code for rendering the component
    <>
      <form className="search" onSubmit={handleSubmit}>
          <input type="text" name="movieSearch" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
          <button>Search</button>
      </form>
      <button onClick={onClear}>Clear</button>
    </>
  );
}

export default Search;