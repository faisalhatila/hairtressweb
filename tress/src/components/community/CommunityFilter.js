import React from "react";
import SearchBar from "../SearchBar";

const CommunityFilter = (props) => {
  return (
    <div className="communityFilterMainDiv mt-4 mb-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center">
              <label className="noMargin mr-3" style={{ fontSize: "20px" }}>
                Filter by:
              </label>
              <label className="noMargin filterButtons mr-3">Time</label>
              <label className="noMargin filterButtons">Industry</label>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityFilter;
