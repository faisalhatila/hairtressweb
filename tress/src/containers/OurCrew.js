import React from "react";
import OurProfessionalCompanies from "../components/ourcrew/OurProfessionalCompanies";
import MakeDecisions from "../components/ourcrew/MakeDecisions";
import HeaderCover from "../components/HeaderCover";

const OurCrew = () => {
  return (
    <div>
      <HeaderCover heading="Our Crew" />
      <div className="container">
        <div className="col">
          <h2 className="noMargin text-center careerNeedsHeading">
            Gian access to Canada's top talented pool to choose your career
          </h2>
        </div>
      </div>
      <div className="container mt-5">
        <div className="col">
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <img
                alt="Our Goal"
                className="ourCrewImage"
                src="assets/img/ourcrew/ourGoal.png"
              />
            </div>
            <div className="col-12 col-md-5">
              <h2 className="noMargin text-center careerNeedsHeading">
                Gian access to Canada's top talented pool to choose your career
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="col">
          <div className="row align-items-center">
            <div className="col-12 col-md-5">
              <h2 className="noMargin text-center careerNeedsHeading">
                Gian access to Canada's top talented pool to choose your career
              </h2>
            </div>
            <div className="col-12 col-md-7">
              <img
                alt="Our Goal"
                className="ourCrewImage"
                src="assets/img/ourcrew/coldcrew.png"
              />
            </div>
          </div>
        </div>
      </div>
      <OurProfessionalCompanies />
      <div className="searchProcessMainDiv">
        <div className="container mt-5 mb-5 pt-5">
          <div className="col">
            <div className="row flex-column justify-content-center align-items-center">
              <div className="col-12 col-md-5">
                <h2 className="noMargin text-center careerNeedsHeading">
                  Search Process
                </h2>
              </div>
              <div className="col-12 col-md-7">
                <img
                  alt="Our Goal"
                  className="ourCrewImage"
                  src="assets/img/ourcrew/searchProcess.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeaderCover />
      <MakeDecisions />
    </div>
  );
};

export default OurCrew;
