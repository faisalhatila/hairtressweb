import React, { useState } from "react";
import { Link } from "react-router-dom";
import { head } from "lodash";
import HeaderCover from "../components/HeaderCover";
import CareerNeeds from "../components/ourservices/CareerNeeds";
import GroupSessions from "../components/ourservices/GroupSessions";
import IndividualServices from "../components/ourservices/IndividualServices";
import AboutTress from "../components/home/AboutTress";
import ServiceDesc from "../components/home/ServiceDesc";
import HowItWorks from "../components/home/HowItWorks";
import classes from "./Home.module.css";
import image from "./homeHeaderCover.png";
const HomeContainer = () => {
  return (
    <div>
      <HeaderCover image={image} />
      <AboutTress />
      <ServiceDesc />
      <HowItWorks />
      <div className="container mb-5">
        <div
          className={[
            `d-flex flex-column`,
            `justify-content-center`,
            `align-items-center`,
          ].join(" ")}
        >
          <label
            className={[
              `noMarginBottom`,
              `text-center`,
              classes.getStartButton,
            ].join(" ")}
          >
            GET STARTED
          </label>
          <label
            className={[
              `noMarginBottom`,
              `text-center`,
              `pt-3`,
              classes.getStartTagLine,
            ].join(" ")}
          >
            We are here to help. Get in touch!
          </label>
        </div>
      </div>
      {/* <CareerNeeds />
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
      </div> */}
    </div>
  );
};

export default HomeContainer;
