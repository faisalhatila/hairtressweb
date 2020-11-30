import React from "react";

const HealthCareCover = (props) => {
  return (
    <div className="healthCareCoverMainDiv">
      <div className="container">
        <div className="healthCareCoverImageMainDiv">
          <div className="container d-flex justify-content-center align-items-center healthCareCoverHeaderDiv">
            <h1 className="healthCareCoverHeading">{props.heading}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCareCover;
