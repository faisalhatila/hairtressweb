import React from "react";

const MakeDecisions = () => {
  return (
    <div className="makeDecisionsMainDiv mb-5">
      <div className="container">
        <div className="col">
          <h1 className="text-center ourDecisionsHeading">
            Lets make our own decisions
          </h1>
          <div className="row">
            <div className="col-12 col-md-4 offset-md-2">
              <div className="bookASessionDiv">
                <h1 className="text-center noMargin">
                  Book a session for $30 approx. 30 mints
                </h1>
              </div>
              <div className="bookNowDiv">
                <h1 className="text-center noMargin">Book Now</h1>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="bookASessionDiv">
                <h1 className="text-center noMargin">
                  Join a Webinar for $2.99 for approx. 40 mints
                </h1>
              </div>
              <div className="bookNowDiv">
                <h1 className="text-center noMargin">Join</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeDecisions;
