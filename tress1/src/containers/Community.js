import React from "react";
import HeaderCover from "../components/HeaderCover";
import CommunityFilter from "../components/community/CommunityFilter";
import CommunityClients from "../components/community/CommunityClients";
import PostTile from "../components/community/PostTile";
import RecentPostTile from "../components/community/RecentPostTile";
import CommunityPagination from "../components/community/CommunityPagination";

const Community = (props) => {
  return (
    <div>
      <CommunityFilter />
      <HeaderCover heading="Cummunity">
        <CommunityClients />
      </HeaderCover>
      <div className="postTileMainDiv mb-5">
        <div className="container">
          <div className="row">
            {[...Array(6)].map((i) => {
              return <PostTile key={i} />;
            })}
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="container">
          <h1 className="recentPostHeading text-center">Recent Must Read</h1>
          <div className="row">
            {[...Array(10)].map((i) => {
              return <RecentPostTile key={1} />;
            })}
          </div>
        </div>
      </div>
      <CommunityPagination />
    </div>
  );
};

export default Community;
