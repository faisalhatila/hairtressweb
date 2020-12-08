import React from "react";
import { Link } from "react-router-dom";

const RecentPostTile = (props) => {
  return (
    <div className="col-12 col-md-6 mt-4">
      <div
        className="d-flex flex-column"
        // style={{ borderRadius: "10px", overflow: "hidden" }}
      >
        <div className="recentPostTileMainDiv">
          <div className="d-flex align-items-center pb-3">
            <div className="recentPostTileImageDiv col-3 d-none d-md-block">
              <img
                alt="Engineering"
                className="recentPostImage"
                src="assets/img/community/engineering1.png"
              />
            </div>
            <div className="recentPostTileContentDiv d-flex flex-column col-12 col-md-9">
              <h1 className="recentPostTileHeading noMargin pt-4">
                {" "}
                Engineering
              </h1>
              <p className="recentPostTagLine noMargin">
                ipsum anim cras consequat ulputate turpis
              </p>
              <p className="recentPostPara noMargin">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <label className="recentPostReadMoreButton noMargin">
                  <Link style={{ color: "#fff" }} to="/community-post-detail">
                    Read More
                  </Link>
                </label>
                <div className="d-flex flex-column">
                  <div className="d-flex">
                    {/* <label className="noMagin mr-2 blackFont noMargin">
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
                    })} */}
                    <div className="postTileRatingDiv">
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
                  </div>
                  <label className=" noMargin recentPostComment">
                    10 comments
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPostTile;
