import React from "react";
import { Link } from "react-router-dom";

const FinanceTile = (props) => {
  return (
    <div className="col-4 mt-4 mb-4">
      <div className="d-flex flex-column">
        <div className="financeTileCoverImageDiv">
          <div></div>
        </div>
        <div className="financeTileContentDiv pt-3 pb-3">
          <h1 className="noMargin financeTileHeading pl-4">Technology</h1>
          <ul>
            <li>ipsum anim cras consequat vulputate turpis</li>
            <li>ipsum anim cras consequat vulputate turpis</li>
            <li>ipsum anim cras consequat vulputate turpis</li>
          </ul>
          {/* <div className="financeTileRatingDiv pl-4">
            <label
              className="noMargin mr-2 blackFont"
              style={{ fontWeight: 600, fontSize: "14px" }}
            >
              Rate:
            </label>
            {[...Array(5)].map((i) => {
              return (
                <img
                  key={i}
                  src="assets/img/community/ratingBean.png"
                  className="mr-1"
                />
              );
            })}
          </div> */}
          <div className="financeTileButtonsDiv pl-4 d-flex">
            <label className="noMargin financeTileButton">
              <Link style={{ color: "#fff" }} to="/community-post-detail">
                Read
              </Link>
            </label>
            <span style={{ flex: 1 }}></span>
            <label className="noMargin financeTileButton">Browse Forum</label>
            <span style={{ flex: 1 }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceTile;
