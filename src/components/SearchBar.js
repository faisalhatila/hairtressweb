import React from "react";

const SearchBar = (props) => {
  return (
    <div className="searchBarMainDiv">
      <form>
        <div className="d-flex searchbarComponentMainDiv align-items-center">
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <div>
            <button type="submit" className="filterSearchButton">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
