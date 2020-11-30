import React, { useState } from "react";
import classes from "./HeaderCover.module.css";
import search from "./search.svg";
import { useAuth } from "../shared/hooks/auth-hooks";
import { useHttpClient } from "../shared/hooks/http-hook";

const HeaderCover = (props) => {
  const { userId, token } = useAuth();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [searchText, setSearchText] = useState("");
  const handleSubmit = async (e) => {
    console.log("Clicked");
    e.preventDefault();
    let urltoEditandAdd = `/all-products`;
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}${urltoEditandAdd}`,
        "POST",
        {
          "Content-Type": "application/json",
        },
        JSON.stringify({
          query: searchText,
        })
      );
      console.log("responseData", responseData);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleChangeSearchText = (e) => {
    console.log("searchText", e.target.value);
    setSearchText(e.target.value);
  };
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
            Protect your hair
          </h1>
          <label
            className={[`noMarginBottom`, classes.headerCoverLabel].join(" ")}
          >
            WE PROVIDE YOU SOLUTION
          </label>
          <div
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
              placeholder="What your are looking for?"
              value={searchText}
              onChange={handleChangeSearchText}
            />
            <button
              className={classes.headerSearchButton}
              style={{
                backgroundColor: "transparent",
                border: "none",
              }}
              onClick={handleSubmit}
            >
              <img
                className={classes.headerCoverSearchButton}
                alt="search"
                src={search}
              />
            </button>
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
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default HeaderCover;
