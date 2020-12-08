import React from "react";

const IndividualServices = () => {
  return (
    <div className="individualServicesMainDiv">
      <div className="container">
        <div className="col">
          <h2 className="text-center coreGroupSessionHeading noMargin">
            Add Ons: IndividualServices
          </h2>
          <div className="row mt-5">
            <div className="col-12 col-md-5">
              <p className="noMargin individualServicePara">
                Learn from professionals, make informed choices, ask guidance
                for custom tailored approach and land your ideal career
              </p>
              <ul className="mt-4">
                <li className="individualServiceLi">
                  Connect virtually and meet in person for a coffee chat to brew
                  your connection
                </li>
                <li className="individualServiceLi2">
                  Decide how you want to beverage the session.
                  <div className="mt-4">
                    <div>
                      <img
                        alt="Resume Review"
                        src="assets/img/ourservices/resumeReview.png"
                        className="mr-3"
                        style={{ maxWidth: "24px" }}
                      />
                      <label style={{ fontSize: "21px" }} className="blackFont">
                        {" "}
                        Resume Review
                      </label>
                    </div>
                    <div>
                      <img
                        alt="Mock Interview"
                        src="assets/img/ourservices/mockInterview.png"
                        className="mr-3"
                        style={{ maxWidth: "24px" }}
                      />
                      <label style={{ fontSize: "21px" }} className="blackFont">
                        {" "}
                        Mock Interview
                      </label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-7">
              <div>
                <img
                  alt="Individual Services"
                  src="assets/img/ourservices/individualServices.png"
                  className="indicudualServicesImage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualServices;
