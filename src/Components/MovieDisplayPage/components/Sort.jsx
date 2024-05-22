import React from "react";
import ReactDOM from "react-dom";
import '../../../ComponentsCSS/Sort.css'


const SortComponent = ({ onChange }) =>  {

  return (
    // JSX code for rendering the component
      <form className="sort" onChange={onChange} defaultValue="">
          <select id="cars" name="cars">
            <option value="" disabled selected>Sort By</option>
            <option value="popularity.desc">Most Popular</option>
            <option value="release_date.desc">Recent Release Date</option>
            <option value="vote_average.desc">Highest Rating</option>
        </select>   
      </form>
  );
}

export default SortComponent;