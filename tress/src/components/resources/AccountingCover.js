import React from "react";

const AccountingCover = (props) => {
  return (
    <div className="accountingCoverMainDiv">
      <div className="container">
        <div className="accountingCoverImageMainDiv">
          <div className="container d-flex justify-content-center align-items-center accountingCoverHeaderDiv">
            <h1 className="accountingCoverHeading">{props.heading}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountingCover;
