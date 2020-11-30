import React from "react";

export const AboutHeader = () => {
  return (
    <div
      className="aboutHeaderMainDiv"
      style={{ marginTop: "9rem", marginBottom: "5rem" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column align-items-end pt-5">
            <h1 className="noMargin aboutUsMainHeading">ABOUT US</h1>
            <h3 className="noMargin aboutUsTagLine">
              Brewing one Connection at a time
            </h3>
            <p className="text-right aboutUsPara noMargin">
              Cold Crew is here to connect aspiring professionals and students
              with industry leaders by providing access to a world-class
              platform on which they can connect with one another and access the
              resources they need to be successful.
            </p>
            <br />
            <p className="text-right aboutUsPara noMargin">
              We provide webinars across multiple industries hosted by leaders
              in each space accompanied with a plethora of follow on services.
              It is our belief that with the right guidance we can help
              individuals channel their passion and achieve successful career
              outcomes by brewing one connection at a time.
            </p>
          </div>
          <div className="col-12 col-md-6 ">
            <div className="aboutUsHeaderBackImageDiv"></div>
            {/* <img
              alt="About header"
              src="assets/img/about/aboutHeader.png"
              className="headerImage"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
