import React from "react";
import HeaderCover from "../components/HeaderCover";
import CommunityClients from "../components/community/CommunityClients";
import Comment from "../components/communitypost/Comment";
import AddCommentBox from "../components/communitypost/AddCommentBox";
import SearchBar from "../components/SearchBar";

const CommunityPostDetail = (props) => {
  return (
    <div>
      <HeaderCover heading="Cummunity">
        <CommunityClients />
      </HeaderCover>
      <div className="container mb-5">
        <div className="col">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1 className="noMargin blackFont">Engineering</h1>
              <div className="d-flex align-items-center justify-content-between dataAboutPostDiv">
                <div className="d-flex flex-column">
                  <label className="noMargin">Author: Lorem Ispum</label>
                  <label className="noMargin">Dated: 4 Sep 2020</label>
                </div>
                <div className="technologyTileRatingDiv pl-4">
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
              <p className="darkBlueFont">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those.
              </p>
              <img
                alt="Engineering"
                src="assets/img/community/communityPost/engineeringBigImage.png"
              />
              <p className="darkBlueFont">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not
                know how to pursue pleasure rationally encounter consequences
                that are extremely painful. Nor again is there anyone who loves
                or pursues or desires to obtain pain of itself, because it is
                pain, but because occasionally circumstances occur in which toil
                and pain can procure him some great pleasure. To take a trivial
                example, which of us ever undertakes laborious physical
                exercise, except to obtain some advantage from it? But who has
                any right to find fault with a man who chooses to enjoy a
                pleasure that has no annoying consequences, or one who avoids a
                pain that produces no resultant pleasure? On the other hand, we
                denounce with righteous indignation and dislike men who are so
                beguiled and demoralized by the charms of pleasure of the
                moment, so blinded by desire, that they cannot foresee the pain
                and trouble that are bound to ensue; and equal blame belongs to
                those who fail in their duty through weakness of will, which is
                the same as saying through shrinking from toil and pain. But I
                must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure, but because those who do not know how to
                pursue pleasure rationally encounter consequences that are
                extremely painful. Nor again is there anyone who loves or
                pursues or desires to obtain pain of itself, because it is pain,
                but because occasionally circumstances occur in which toil and
                pain can procure him some great pleasure. To take a trivial
                example, which of us ever undertakes laborious physical
                exercise, except to obtain some advantage from it? But who has
                any right to find fault with a man who chooses to enjoy a
                pleasure that has no annoying consequences, or one who avoids a
                pain that produces no resultant pleasure? On the other hand, we
                denounce with righteous indignation and dislike men who are so
                beguiled and demoralized by the charms of pleasure of the
                moment, so blinded by desire, that they cannot foresee the pain
                and trouble that are bound to ensue; and equal blame belongs to
                those who fail in their duty through weakness of will, which is
                the same as.
              </p>
              {[...Array(2)].map((i) => {
                return <Comment key={i} />;
              })}
              <AddCommentBox />
            </div>
            <div className="col-12 col-md-4">
              <SearchBar />
              <h2 className="blackFont postDetailRightDivHeading mt-4">
                Engineering
              </h2>
              <img
                alt="Engineering"
                src="assets/img/community/communityPost/engineeringSmallImage.png"
              />
              {[...Array(6)].map((i) => {
                return (
                  <p className="noMargin mt-3 postDetailRightDivContent">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will.
                  </p>
                );
              })}
              <h2 className="blackFont postDetailRightDivHeading mt-4">
                Engineering
              </h2>
              <img
                alt="Engineering"
                src="assets/img/community/communityPost/engineeringSmallImage.png"
              />
              {[...Array(6)].map((i) => {
                return (
                  <p className="noMargin mt-3 postDetailRightDivContent">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will.
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPostDetail;
