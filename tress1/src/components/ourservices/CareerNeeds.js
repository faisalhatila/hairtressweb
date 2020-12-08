import React from "react";

const CareerNeeds = () => {
  return (
    <div className="careerNeedsMainDiv">
      <div className="container">
        <div className="col">
          <h2 className="text-center careerNeedsHeading">
            One Stop Shop for all your career needs
          </h2>
          <div>
            <div className="row">
              <div className="col-12 col-md-4 offset-md-2 d-flex flex-column align-items-center">
                <div className="careerNeedsImgDiv">
                  <img src="assets/img/ourservices/core.png" alt="Core" />
                </div>
                <div
                  style={{
                    backgroundColor: "#000",
                    height: "50px",
                    width: "2px",
                  }}
                ></div>
                <div className="d-flex flex-column align-items-center careerNeedDescDiv">
                  <h3 className="noMargin">CORE</h3>
                  <label className="noMargin">- group sessions</label>
                  <label className="noMargin">- industry insight</label>
                </div>
                <p className="noMargin careerNeedsPara pt-4 pb-4">
                  Join for $2.99/session <br /> for approx. 40 mins
                </p>
              </div>
              <div className="col-12 col-md-4  d-flex flex-column align-items-center">
                <div className="careerNeedsImgDiv">
                  <img src="assets/img/ourservices/core.png" alt="Core" />
                </div>
                <div
                  style={{
                    backgroundColor: "#000",
                    height: "50px",
                    width: "2px",
                  }}
                ></div>
                <div className="d-flex flex-column align-items-center careerNeedDescDiv">
                  <h3 className="noMargin">ADD-ON</h3>
                  <label className="noMargin">
                    - individual sessions sessions
                  </label>
                  <label className="noMargin">- custom-tailored approach</label>
                </div>
                <p className="noMargin careerNeedsPara pt-4 pb-4">
                  Join for $3.99/session <br /> for approx. 30 mins
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerNeeds;
