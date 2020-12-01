import React, { useState } from "react";
import classes from "./HeaderCover.module.css";
import search from "./search.svg";
import { useAuth } from "../shared/hooks/auth-hooks";
import { useHttpClient } from "../shared/hooks/http-hook";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const HeaderCover = (props) => {
  const history = useHistory();
  const { userId, token } = useAuth();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const handleSubmit = async (e) => {
    console.log("Clicked");
    e.preventDefault();
    console.log("props", props)
    // props.history.push('/recommeded-product', {
    //   query: 'searchText'
    // })
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
            <form onSubmit={props.submit} className="d-flex" style={{ flex: 1 }}>
              <input
                type="text"
                className={classes.headerCoverSearchInputField}
                placeholder="What your are looking for?"
                value={props.searchText}
                onChange={(e) => props.setSearch(e.target.value)}
              />
              <button
                className={classes.headerSearchButton}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
                type="submit"
              // onClick={props.searchResult(searchText)}
              >
                {/* <Link to="/recommeded-product"> */}
                <img
                  className={classes.headerCoverSearchButton}
                  alt="search"
                  src={search}
                />
                {/* </Link> */}
              </button>

            </form>
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
