import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { head } from "lodash";
import HeaderCover from "../components/HeaderCover";
import AboutTress from "../components/home/AboutTress";
import ServiceDesc from "../components/home/ServiceDesc";
import HowItWorks from "../components/home/HowItWorks";
import { useAuth } from "../shared/hooks/auth-hooks";
import { useHttpClient } from "../shared/hooks/http-hook";
import SearchIcon from "./search.svg";
import LoadingSpinner from "../shared/UI/LoadingSpinner";
import { Helmet } from "react-helmet";

import classes from "./Products.module.css";
import classess from "./RecommendedProduct.module.css";
import image from "./homeHeaderCover.png";
const Products = (props) => {
  const { userId, token } = useAuth();
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [pros, setPros] = useState([]);
  const [recommendedpros, setRecommendedPros] = useState([]);
  const [study, setStudy] = useState([]);
  const [recommendedStudy, setRecommendedStudy] = useState([]);
  const [craft, setCrafts] = useState([]);
  const [recommendedcrafts, setRecommendedCrafts] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const myData = JSON.parse(localStorage.getItem("userDatas"));

  const handleChangeSearchText = (e) => {
    console.log("searchText", e.target.value);
    setSearchText(e.target.value);
  };
  const fetchProduct = async (route, type, updateState, log) => {
    console.log("useeffect rinning");
    let searchquery = searchText;
    if (props.location.state) searchquery = props.location.state.search;
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}${route}`,
        "POST",
        {
          "Content-Type": "application/json",
        },
        JSON.stringify({
          userId: userId && userId,
          type: type,
          query: searchquery,
        })
      );
      console.log("responseData", responseData);
      updateState(responseData.products);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    let urltoEditandAdd = `/all-products`;
    let type = "pr";
    let logResponse = "responseDataProducts";
    fetchProduct(urltoEditandAdd, type, setProducts, logResponse);
    type = "s";
    logResponse = "responseDataStudy";
    fetchProduct(urltoEditandAdd, type, setStudy, logResponse);
    type = "p";
    logResponse = "responseDataPros";
    fetchProduct(urltoEditandAdd, type, setPros, logResponse);
    type = "c";
    logResponse = "responseDataCrafts";
    fetchProduct(urltoEditandAdd, type, setCrafts, logResponse);
  }, []);
  useEffect(() => {
    let urltoEditandAdd, type;
    urltoEditandAdd = `/recommended-products`;
    type = "pr";
    if (userId && token && myData.quiz)
      fetchProduct(urltoEditandAdd, type, setRecommendedProducts);
    type = "c";
    if (userId && token && myData.quiz)
      fetchProduct(urltoEditandAdd, type, setRecommendedCrafts);
    type = "p";
    if (userId && token && myData.quiz)
      fetchProduct(urltoEditandAdd, type, setRecommendedPros);
    type = "s";
    if (userId && token && myData.quiz)
      fetchProduct(urltoEditandAdd, type, setRecommendedStudy);
  }, [userId, token]);
  const handleSubmit = async (e) => {
    console.log("Clicked");
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
      setProducts(responseData.products);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Search Results</title>
      </Helmet>
      <div className={classess.headerCoverMainDiv}>
        <div
          style={{
            backgroundImage: `linear-gradient(
      0deg,
      rgba(190, 104, 77, 0.75),
      rgba(190, 104, 77, 0.75)
    ),
    url(${image})`,
          }}
          className={classess.headerCoverDiv}
        >
          <div
            className={[
              `container`,
              `d-flex`,
              `flex-column`,
              `justify-content-center`,
              `align-items-center`,
              classess.headerCoverHeaderDiv,
            ].join(" ")}
            style={{ minHeight: "80vh" }}
          >
            <h1
              className={[`noMarginBottom`, classess.headerCoverHeading].join(
                " "
              )}
            >
              Protect your hair
            </h1>
            <label
              className={[`noMarginBottom`, classess.headerCoverLabel].join(
                " "
              )}
            >
              WE PROVIDE YOU SOLUTION
            </label>
            <div
              className={[
                `d-flex`,
                `mt-5`,
                `mb-5`,
                classess.headerCoverSearchDiv,
              ].join(" ")}
            >
              <input
                type="text"
                className={classess.headerCoverSearchInputField}
                placeholder="What are you looking for?"
                value={searchText}
                onChange={handleChangeSearchText}
              />
              <button
                className={classess.headerSearchButton}
                onClick={handleSubmit}
              >
                {/* <Link to="/recommeded-product"> */}
                <img
                  className={classess.headerCoverSearchButton}
                  alt="search"
                  src={SearchIcon}
                />
                {/* </Link> */}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="text-center" style={{ color: "#8E5051" }}>
          Results
        </h2>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <LoadingSpinner />
          </div>
        ) : (
          <div>
            {token && userId ? (
              <div className="d-flex flex-column mt-5 mb-5">
                <h4 style={{ color: "#8E5051", fontWeight: 600 }}>
                  Products Recommended To You
                </h4>
                {!myData.quiz && (
                  <h5 className="mt-3">
                    You didn't have a hair profile, kindly submit a
                    <Link
                      to="/questionaire"
                      style={{ color: "rgb(114, 37, 38)", fontWeight: 600 }}
                    >
                      &nbsp;QUIZ
                    </Link>
                    , to your your recommended studies
                  </h5>
                )}
                {myData.quiz && (
                  <div className="row col-12 mb-5 mt-5">
                    {recommendedProducts.length ? (
                      recommendedProducts.map((product, i) => {
                        return (
                          <a
                            className="col-12 col-md-6 mb-3"
                            target="_blank"
                            href={product.link1}
                            key={i}
                          >
                            <div className="row mb-4">
                              <div
                                className="col-12 col-md-6 d-flex align-items-center justify-content-center"
                                style={{
                                  height: "150px",
                                  boxShadow: "0px 0px 1px 2px #a7a7a7",
                                }}
                              >
                                <div
                                  className={classes.theProductImage}
                                  style={{
                                    backgroundImage: `url(${product.picture})`,
                                    width: "100%",
                                    height: "80%",
                                    backgroundPosition: "center",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    borderRadius: "5px",
                                  }}
                                ></div>
                              </div>
                              <div className="col-12 col-md-6 pt-md-0 pt-3">
                                <div className="d-flex flex-column">
                                  <h2
                                    className={[
                                      `noMarginBottom`,
                                      classes.theProductHeading,
                                    ].join(" ")}
                                  >
                                    {product.name.length > 40
                                      ? `${product.name.substr(0, 51)}...`
                                      : product.name}
                                  </h2>
                                  <div className={`pt-2`}>
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        color: "#888",
                                      }}
                                    >
                                      Hair Length : {product.length}
                                    </p>

                                    <p
                                      style={{
                                        fontSize: "16px",
                                        color: "#888",
                                      }}
                                    >
                                      Hair Processing : {product.processing}
                                    </p>
                                  </div>
                                  <p
                                    className={[
                                      `noMarginBottom`,
                                      classes.theProductPara,
                                    ].join(" ")}
                                  >
                                    {product.desc}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        );
                      })
                    ) : (
                      <div className="d-flex justify-content-between">
                        <h5 className="col">
                          No products recommended to your hair profile
                        </h5>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : null}
            <div className="d-flex flex-column mt-5 mb-5">
              <h4 style={{ color: "#8E5051", fontWeight: 600 }}>
                Products for you
              </h4>
              <div className="row col-12 mb-5 mt-5">
                {products &&
                  products.map((product, j) => {
                    return (
                      <a
                        className="col-12 col-md-6 mb-3"
                        target="_blank"
                        href={product.link1}
                        key={j}
                      >
                        <div className="row mb-4">
                          <div
                            className="col-12 col-md-6 d-flex align-items-center justify-content-center"
                            style={{
                              height: "150px",
                              boxShadow: "0px 0px 1px 2px #a7a7a7",
                            }}
                          >
                            <div
                              className={classes.theProductImage}
                              style={{
                                backgroundImage: `url(${product.picture})`,
                                width: "100%",
                                height: "80%",
                                backgroundPosition: "center",
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                borderRadius: "5px",
                              }}
                            ></div>
                          </div>
                          <div className="col-12 col-md-6 pt-md-0 pt-3">
                            <div className="d-flex flex-column">
                              <h2
                                className={[
                                  `noMarginBottom`,
                                  classes.theProductHeading,
                                ].join(" ")}
                              >
                                {product.name.length > 40
                                  ? `${product.name.substr(0, 51)}...`
                                  : product.name}
                              </h2>
                              <div className={`pt-2`}>
                                <p style={{ fontSize: "16px", color: "#888" }}>
                                  Hair Length : {product.length}
                                </p>

                                <p style={{ fontSize: "16px", color: "#888" }}>
                                  Hair Processing : {product.processing}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    );
                  })}
              </div>
            </div>
            {token && userId ? (
              <div className="d-flex flex-column mt-5 mb-5">
                <h4 style={{ color: "#8E5051", fontWeight: 600 }}>
                  Crafts Recommended To You
                </h4>
                {!myData.quiz && (
                  <h5 className="mt-3">
                    You didn't have a hair profile, kindly submit a
                    <Link
                      to="/questionaire"
                      style={{ color: "rgb(114, 37, 38)", fontWeight: 600 }}
                    >
                      &nbsp;QUIZ
                    </Link>
                    , to your your recommended studies
                  </h5>
                )}
                {myData.quiz && (
                  <div className="row col-12 mb-5 mt-5">
                    {recommendedcrafts.length ? (
                      recommendedcrafts.map((craft, i) => {
                        return (
                          <a
                            className="col-12 col-md-6 mb-3"
                            target="_blank"
                            href={craft.link1}
                            key={i}
                          >
                            <div className="row mb-4" key={i}>
                              <div
                                className="col-12 col-md-6 d-flex align-items-center justify-content-center"
                                style={{ height: "150px" }}
                              >
                                <div
                                  className={classess.thecraftImage}
                                  style={{
                                    backgroundImage: `url(${craft.picture})`,
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    boxShadow: "0px 0px 1px 2px #a7a7a7",
                                    borderRadius: "5px",
                                  }}
                                ></div>
                              </div>
                              <div className="col-12 col-md-6 pt-md-0 pt-3">
                                <div className="d-flex flex-column">
                                  <h2
                                    className={[
                                      `noMarginBottom`,
                                      classess.thecraftHeading,
                                    ].join(" ")}
                                  >
                                    {craft.name}
                                  </h2>
                                  <div className={`pt-2`}>
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        color: "#888",
                                      }}
                                    >
                                      Hair Length : {craft.length}
                                    </p>
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        color: "#888",
                                      }}
                                    >
                                      Hair Density : {craft.density}
                                    </p>
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        color: "#888",
                                      }}
                                    >
                                      Hair Processing : {craft.processing}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        );
                      })
                    ) : (
                      <div className="d-flex justify-content-between">
                        <h5 className="">
                          No crafts recommended to your hair profile
                        </h5>
                      </div>
                    )}
                  </div>
                )}{" "}
              </div>
            ) : null}
            <div className="d-flex flex-column mt-5 mb-5">
              <h4 style={{ color: "#8E5051", fontWeight: 600 }}>
                Crafts for you
              </h4>
              <div className="row col-12 mb-5 mt-5">
                {craft.map((craft, j) => {
                  return (
                    // <a  key={j}>
                    <a
                      className="col-12 col-md-6 mb-3"
                      target="_blank"
                      href={craft.link1}
                      key={j}
                    >
                      <div className="row mb-4">
                        <div
                          className="col-12 col-md-6 d-flex align-items-center justify-content-center"
                          style={{ height: "150px" }}
                        >
                          <div
                            className={classess.thecraftImage}
                            style={{
                              backgroundImage: `url(${craft.picture})`,
                              width: "100%",
                              height: "100%",
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 0px 1px 2px #a7a7a7",
                              borderRadius: "5px",
                            }}
                          ></div>
                        </div>
                        <div className="col-12 col-md-6 pt-md-0 pt-3">
                          <div className="d-flex flex-column">
                            <h2
                              className={[
                                `noMarginBottom`,
                                classess.thecraftHeading,
                              ].join(" ")}
                            >
                              {craft.name}
                            </h2>
                            <div className={`pt-2`}>
                              <p style={{ fontSize: "16px", color: "#888" }}>
                                Hair Length : {craft.length}
                              </p>
                              <p style={{ fontSize: "16px", color: "#888" }}>
                                Hair Density : {craft.density}
                              </p>
                              <p style={{ fontSize: "16px", color: "#888" }}>
                                Hair Processing : {craft.processing}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            {token && userId ? (
              <div className="d-flex flex-column mt-5 mb-5">
                <h4 style={{ color: "#8E5051", fontWeight: 600 }}>
                  Pros Recommended To You
                </h4>
                {!myData.quiz && (
                  <h5 className="mt-3">
                    You didn't have a hair profile, kindly submit a
                    <Link
                      to="/questionaire"
                      style={{ color: "rgb(114, 37, 38)", fontWeight: 600 }}
                    >
                      &nbsp;QUIZ
                    </Link>
                    , to your your recommended studies
                  </h5>
                )}
                {myData.quiz && (
                  <div className="row col-12 mb-5 mt-5">
                    {recommendedpros.length ? (
                      recommendedpros.map((pros, i) => {
                        return (
                          <a
                            target="_blank"
                            key={i}
                            className="col-12 col-md-6 mb-3"
                            href={pros.link1}
                          >
                            <div className="row mb-4">
                              <div
                                className="col-12 col-md-6 d-flex align-items-center justify-content-center"
                                style={{
                                  boxShadow: "0px 0px 5px 2px rgb(173,173,173)",
                                  borderRadius: "5px",
                                  height: "150px",
                                }}
                              >
                                <div
                                  className={classess.theprosImage}
                                  style={{
                                    backgroundImage: `url(${pros.picture})`,
                                    height: "80%",
                                    width: "100%",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                  }}
                                ></div>
                              </div>
                              <div className="col-12 col-md-6 pt-3 pt-md-0 ">
                                <div className="d-flex flex-column justify-content-between">
                                  <h2
                                    className={[
                                      `noMarginBottom`,
                                      classess.theProsHeading,
                                    ].join(" ")}
                                  >
                                    {pros.name}
                                  </h2>
                                  <div className={`pt-2`}>
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        color: "#888",
                                      }}
                                    >
                                      Hair Length : {pros.length}
                                    </p>
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        color: "#888",
                                      }}
                                    >
                                      Hair Density : {pros.density}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        );
                      })
                    ) : (
                      <div className="d-flex justify-content-between">
                        <h5>No pros recommended to your hair profile</h5>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : null}
            <div className="d-flex flex-column mt-5 mb-5">
              <h4 style={{ color: "#8E5051", fontWeight: 600 }}>
                Pros for you
              </h4>
              <div className="row col-12 mb-5 mt-5">
                {pros.map((pros, j) => {
                  return (
                    <a
                      className="col-12 col-md-6 mb-3"
                      target="_blank"
                      href={pros.link1}
                    >
                      <div className="row mb-4" key={j}>
                        <div
                          className="col-12 col-md-6 d-flex align-items-center justify-content-center"
                          style={{
                            boxShadow: "0px 0px 5px 2px rgb(173,173,173)",
                            borderRadius: "5px",
                            height: "150px",
                          }}
                        >
                          <div
                            // className={classess.theprosImage}
                            style={{
                              backgroundImage: `url(${pros.picture})`,
                              height: "80%",
                              width: "100%",
                              backgroundSize: "contain",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                            }}
                          ></div>
                        </div>
                        <div className="col-12 col-md-6 pt-md-0 pt-3">
                          <div className="d-flex flex-column">
                            <h2
                              className={[
                                `noMarginBottom`,
                                classess.theProsHeading,
                              ].join(" ")}
                            >
                              {pros.name}
                            </h2>
                            <div className={`pt-2`}>
                              <p style={{ fontSize: "16px", color: "#888" }}>
                                Hair Length : {pros.length}
                              </p>
                              <p style={{ fontSize: "16px", color: "#888" }}>
                                Hair Density : {pros.density}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            {token && userId ? (
              <div className="d-flex flex-column mt-5 mb-5">
                <h4 style={{ color: "#8E5051", fontWeight: 600 }}>
                  Studies Recommended To You
                </h4>
                {!myData.quiz && (
                  <h5 className="mt-3">
                    You didn't have a hair profile, kindly submit a
                    <Link
                      to="/questionaire"
                      style={{ color: "rgb(114, 37, 38)", fontWeight: 600 }}
                    >
                      &nbsp;QUIZ
                    </Link>
                    , to your your recommended studies
                  </h5>
                )}
                {myData.quiz && (
                  <div className="row col-12 mb-5 mt-5">
                    {recommendedStudy.length ? (
                      recommendedStudy.map((study, i) => {
                        return (
                          <a
                            className="col-12 col-md-6 mb-3"
                            target="_blank"
                            href={study.link1}
                            key={i}
                          >
                            <div className="row mb-4">
                              <div
                                className="col-12 col-md-6 d-flex align-items-center justify-content-center"
                                style={{ height: "150px" }}
                              >
                                <div
                                  className={classess.theStudyImage}
                                  style={{
                                    backgroundImage: `url(${study.picture})`,
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    boxShadow: "0px 0px 1px 2px #a7a7a7",
                                    borderRadius: "5px",
                                  }}
                                ></div>
                              </div>
                              <div className="col-12 col-md-6 pt-md-0 pt-3">
                                <div className="d-flex flex-column">
                                  <h2
                                    className={[
                                      `noMarginBottom`,
                                      classess.theStudyHeading,
                                    ].join(" ")}
                                  >
                                    {study.name.length > 40
                                      ? `${study.name.substr(0, 51)}...`
                                      : study.name}
                                  </h2>
                                  <div className={`pt-2`}>
                                    <p
                                      style={{
                                        fontSize: "16px",
                                        color: "#888",
                                      }}
                                    >
                                      Hair Length : {study.length}
                                    </p>

                                    <p
                                      style={{
                                        fontSize: "16px",
                                        color: "#888",
                                      }}
                                    >
                                      Hair Processing : {study.processing}
                                    </p>
                                  </div>
                                  <p
                                    className={[
                                      `noMarginBottom`,
                                      classess.theStudyPara,
                                    ].join(" ")}
                                  >
                                    {study.desc}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        );
                      })
                    ) : (
                      <div className="d-flex justify-content-between">
                        <h5>No studies recommended to your hair profile</h5>
                      </div>
                    )}
                  </div>
                )}{" "}
              </div>
            ) : null}
            <div className="d-flex flex-column mt-5 mb-5">
              <h4 style={{ color: "#8E5051", fontWeight: 600 }} className="col">
                Studies for you
              </h4>
              <div className="row col-12 mb-5 mt-5">
                {study.map((study, j) => {
                  return (
                    <a
                      className="col-12 col-md-6 mb-3"
                      target="_blank"
                      href={study.link1}
                      key={j}
                    >
                      <div className="row mb-4">
                        <div
                          className="col-12 col-md-6 d-flex align-items-center justify-content-center"
                          style={{ height: "150px" }}
                        >
                          <div
                            className={classess.theStudyImage}
                            style={{
                              backgroundImage: `url(${study.picture})`,
                              width: "100%",
                              height: "100%",
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 0px 1px 2px #a7a7a7",
                              borderRadius: "5px",
                            }}
                          ></div>
                        </div>
                        <div className="col-12 col-md-6 pt-md-0 pt-3">
                          <div className="d-flex flex-column">
                            <h2
                              className={[
                                `noMarginBottom`,
                                classess.theStudyHeading,
                              ].join(" ")}
                            >
                              {study.name.length > 40
                                ? `${study.name.substr(0, 51)}...`
                                : study.name}
                            </h2>
                            <div className={`pt-2`}>
                              <p style={{ fontSize: "16px", color: "#888" }}>
                                Hair Length : {study.length}
                              </p>

                              <p style={{ fontSize: "16px", color: "#888" }}>
                                Hair Processing : {study.processing}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
