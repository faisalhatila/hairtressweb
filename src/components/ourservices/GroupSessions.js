import React from "react";

const GroupSessions = () => {
  return (
    <div className="groupSessionsMainDiv mt-6">
      <div className="container">
        <div className="col">
          <h2 className="text-center coreGroupSessionHeading noMargin">
            Core: Group Session
          </h2>
          <h4 className="groupSessionTagLine noMargin text-center pt-3">
            Explore insight about several industries through webinars
          </h4>
          <div className="d-flex justify-content-center mt-5">
            <img
              alt="Group Sessions"
              src="assets/img/ourservices/groupSessions.png"
              className="coreGroupSessionImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupSessions;
