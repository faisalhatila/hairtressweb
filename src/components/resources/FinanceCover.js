import React from "react";

const FinanceCover = (props) => {
  return (
    <div className="financeCoverMainDiv">
      <div className="container">
        <div className="financeCoverImageMainDiv">
          <div className="container d-flex justify-content-center align-items-center financeCoverHeaderDiv">
            <h1 className="financeCoverHeading">{props.heading}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceCover;
