import React from "react";
import CareerNeeds from "../components/ourservices/CareerNeeds";
import GroupSessions from "../components/ourservices/GroupSessions";
import IndividualServices from "../components/ourservices/IndividualServices";
import HeaderCover from "../components/HeaderCover";

const OurServices = () => {
  return (
    <div>
      <HeaderCover heading="Our Services" />
      <CareerNeeds />
      <div className="container">
        <div className="col">
          <h2 className="noMargin text-center careerNeedsHeading">
            Connect with industry professionals from anywhere in the world
          </h2>
          <h2 className="noMargin text-center careerNeedsHeading">
            Keep it easy from day one
          </h2>
        </div>
      </div>
      <GroupSessions />
      <HeaderCover />
      <IndividualServices />
      <div className="mt-5 mb-5">
        <div>
          <div className="col-12 d-flex flex-column align-items-center">
            <h3 className="noMargin mt-3 ourVisionHeading">Our Platform</h3>
            <div className="mt-3 d-flex flex-column flex-md-row">
              <label className="homePageSignUpButton noMargin hvr-sweep-to-right col mr-3">
                Sign up
              </label>
              <label className="homePageMentorButton noMargin hvr-sweep-to-right col mt-3 mt-md-0">
                Become A Mentor
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
