import React from "react";

const TechnologyCover = (props) => {
  return (
    <div className="technologyCoverMainDiv">
      <div className="container">
        <div className="technologyCoverImageMainDiv">
          <div className="container d-flex justify-content-center align-items-center technologyCoverHeaderDiv">
            <h1 className="technologyCoverHeading">{props.heading}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCover;
