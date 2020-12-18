import React, { useState } from "react";
import { AboutHeader } from "../components/aboutus/AboutHeader";
import HowItWorks from "../components/aboutus/HowItWorks";
import OurTeam from "../components/aboutus/OurTeam";
import OurMentors from "../components/aboutus/OurMentors";
import HeaderCover from "../components/HeaderCover";
import image1 from "./1.jpg";
import classes from "./AboutUs.module.css";
import HeaderCoverNew from "../components/HeaderCoverNew";
import image from "./question.png";
import { Helmet } from "react-helmet";

export const AboutUs = (props) => {
  const [searchText, setSearchText] = useState("");
  const handleSubmit = async (e) => {
    console.log("Clicked");
    e.preventDefault();
    console.log("props", props);
    props.history.push("/recommeded-product", {
      search: searchText,
    });
  };
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
      </Helmet>
      <HeaderCoverNew image={image} mainHeading="ABOUT US" />
      <div className="container my-5">
        <div className="d-flex flex-wrap">
          <div className="d-flex flex-column col-12 col-md-6">
            <h1 className={classes.mainHeading}>Why us ?</h1>
            <h3 className={[classes.subHeading, `py-4`].join(" ")}>
              We are an off-shore software agency, having our approach to the US
              and Pakistan.
            </h3>
            <p className={classes.para}>
              We aim to provide innovative and creative solutions by doing an
              in-depth analysis of your problem. We started this company with a
              mission to become one of the top leading IT Solution Companies.
            </p>
          </div>
          <div className="d-flex flex-column col-12 col-md-6">
            <h1 className={classes.mainHeading}>What we Deliver</h1>
            <p className={[classes.para, `py-4`].join(" ")}>
              We provide promising solutions to your digital-based problems.
              Your success is the most incredible asset we enjoy.
            </p>
            <ol>
              <li>Professionalism</li>
              <li>Professionalism</li>
              <li>Professionalism</li>
              <li>Professionalism</li>
            </ol>
          </div>
        </div>
        <div className="d-flex flex-row-reverse flex-wrap my-5">
          <div className="d-flex flex-column col-12 col-md-6">
            <h1 className={classes.mainHeading}>Why us ?</h1>
            <h3 className={[classes.subHeading, `py-4`].join(" ")}>
              We are an off-shore software agency, having our approach to the US
              and Pakistan.
            </h3>
            <p className={classes.para}>
              We aim to provide innovative and creative solutions by doing an
              in-depth analysis of your problem. We started this company with a
              mission to become one of the top leading IT Solution Companies.
            </p>
          </div>
          <div className="d-flex flex-column col-12 col-md-6">
            <h1 className={classes.mainHeading}>What we Deliver</h1>
            <p className={[classes.para, `py-4`].join(" ")}>
              We provide promising solutions to your digital-based problems.
              Your success is the most incredible asset we enjoy.
            </p>
            <ol>
              <li>Professionalism</li>
              <li>Professionalism</li>
              <li>Professionalism</li>
              <li>Professionalism</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
