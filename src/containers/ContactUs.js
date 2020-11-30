import React from "react";
import HeaderCover from "../components/HeaderCover";

const ContactUs = (props) => {
  return (
    <div>
      <HeaderCover heading="Contact Us" />
      <div className="container mb-5">
        <div className="col">
          <h3 className="text-center howItWorksHeading">Location</h3>
          <img src="assets/img/googleMapImage.png" alt="Google Map Image" />
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="blackFont postDetailRightDivHeading mt-4">
                Contact Us
              </h2>
              <p className="noMargin pt-3 blackFont">
                Address: 500 Terry Francois Street San Francisco, CA 94158{" "}
              </p>
              <p className="noMargin pt-3 blackFont">
                Email: nizam_xe@yahoo,com
              </p>
              <p className="noMargin pt-3 blackFont"> Contact: 123-456-789</p>
            </div>
            <div className="col-12 col-md-6">
              <form className="col">
                <div className="col-12 col-md-12 mt-3 contactFormInputDiv">
                  <input
                    type="text"
                    className="contactFormInputField"
                    placeholder="Name"
                  />
                </div>
                <div className="col-12 col-md-12 mt-3 contactFormInputDiv">
                  <input
                    type="text"
                    className="contactFormInputField"
                    placeholder="Address"
                  />
                </div>
                <div className="d-flex flex-column flex-md-row">
                  <div
                    className="col-12 mt-3 contactFormInputDiv"
                    style={{ flex: 20 }}
                  >
                    <input
                      type="text"
                      className="contactFormInputField"
                      placeholder="Email"
                    />
                  </div>
                  <span style={{ flex: 1 }}></span>
                  <div
                    className="col-12 mt-3 contactFormInputDiv"
                    style={{ flex: 20 }}
                  >
                    <input
                      type="text"
                      className="contactFormInputField"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-12 mt-3 contactFormInputDiv">
                  <input
                    type="text"
                    className="contactFormInputField"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-12 col-md-12 mt-3 contactFormInputDiv">
                  <textarea
                    className="contactFormInputField"
                    rows="3"
                    placeholder="Write comment"
                  ></textarea>
                </div>
                <div className="col-12 d-flex justify-content-center mt-4">
                  <label className="noMargin contactFormSubmitButton">
                    Submit
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
