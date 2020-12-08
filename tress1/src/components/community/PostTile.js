import React from "react";
import { Link } from "react-router-dom";

const PostTile = () => {
  return (
    <div className="col-12 col-md-4 mt-4">
      <div
        className="d-flex flex-column"
        style={{ borderRadius: "10px", overflow: "hidden" }}
      >
        <div className="postTileCoverImageDiv">
          <div></div>
        </div>
        <div className="postTileContentDiv pb-3">
          <div className="col">
            <div className="pb-3 pt-3 pl-4">
              <h1 className="noMargin postTileHeading">Engineering</h1>
            </div>
            <ul>
              <li>ipsum anim cras consequat vulputate turpis</li>
              <li>ipsum anim cras consequat vulputate turpis</li>
              <li>ipsum anim cras consequat vulputate turpis</li>
            </ul>
            <div className="postTileRatingDiv pl-4">
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
            </div>
            <div className="postTileButtonsDiv pl-4 d-flex">
              <label className="noMargin postTileButton">
                <Link style={{ color: "#fff" }} to="/community-post-detail">
                  Read
                </Link>
              </label>
              <span style={{ flex: 1 }}></span>
              <label className="noMargin postTileButton">Browse Forum</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTile;
