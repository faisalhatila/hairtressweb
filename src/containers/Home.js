import React, { useState } from "react";
import { Link } from "react-router-dom";
import { head } from "lodash";
import HeaderCover from "../components/HeaderCover";
import ServiceDesc from "../components/home/ServiceDesc";
import HowItWorks from "../components/home/HowItWorks";
import classes from "./Home.module.css";
import image1 from "./1.jpg";
import image from "./homeHeaderCover.png";
import { Helmet } from "react-helmet";
const HomeContainer = (props) => {
  const [searchText, setSearchText] = useState("");
  const handleSubmit = async (e) => {
    console.log("Clicked");
    e.preventDefault();
    console.log("props", props);
    props.history.push("/all-results", {
      search: searchText,
    });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hair Tress</title>
      </Helmet>
      <HeaderCover
        image={image1}
        searchText={searchText}
        setSearch={setSearchText}
        submit={handleSubmit}
      />
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
          <div>
            <Link to="/sign-up">
              <p
                className={[
                  `noMarginBottom`,
                  `text-center`,
                  classes.getStartButton,
                ].join(" ")}
              >
                GET STARTED
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
