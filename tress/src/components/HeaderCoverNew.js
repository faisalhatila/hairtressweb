import React from "react";
import classes from "./HeaderCoverNew.module.css";
import search from "./search.svg";

const HeaderCoverNew = (props) => {
  return (
    <div className={classes.headerCoverMainDiv}>
      <div
        style={{
          backgroundImage: `linear-gradient(
      0deg,
      rgba(190, 104, 77, 0.75),
      rgba(190, 104, 77, 0.75)
    ),
    url(${props.image})`,
        }}
        className={classes.headerCoverDiv}
      >
        <div
          className={[
            `container`,
            `d-flex`,
            `flex-column`,
            `justify-content-center`,
            `align-items-center`,
            classes.headerCoverHeaderDiv,
          ].join(" ")}
        >
          <h1
            className={[`noMarginBottom`, classes.headerCoverHeading].join(" ")}
          >
            {props.mainHeading}
          </h1>
          <label
            className={[`noMarginBottom`, classes.headerCoverLabel].join(" ")}
          >
            {props.subHeading}
          </label>
          <label
            className={[`noMarginBottom`, classes.headerCoverLabel1].join(" ")}
          >
            {props.text}
          </label>
          {/* <div
            className={[
              `d-flex`,
              `mt-5`,
              `mb-5`,
              classes.headerCoverSearchDiv,
            ].join(" ")}
          >
            <input
              type="text"
              className={classes.headerCoverSearchInputField}
              placeholder="What are you looking for?"
            />
            <img
              className={classes.headerCoverSearchButton}
              alt="search"
              src={search}
            />
          </div>
          <div>
            <label
              className={[
                `noMarginBottom`,
                classes.headerCoverRegisterButton,
              ].join(" ")}
            >
              Register
            </label>
          </div> */}
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default HeaderCoverNew;