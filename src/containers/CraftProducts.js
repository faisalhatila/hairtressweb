import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./CraftProducts.module.css";
// import image from "./question.png";
// import image from "./headerCovers/Craft.png";
import image from "../components/home/TheCraft.png";
import HeaderCoverNew from "../components/HeaderCoverNew";
import { useAuth } from "../shared/hooks/auth-hooks";
import { useHttpClient } from "../shared/hooks/http-hook";
import LoadingSpinner from "../shared/UI/LoadingSpinner";
import { Helmet } from "react-helmet";
import Gif2 from "./new/Gif/Gif4.gif";
import Gif1 from "./new/Gif/Gif1.gif";

const CraftProducts = (props) => {
  const { userId, token } = useAuth();
  const [searchText, setSearchText] = useState("");
  const [craft, setCrafts] = useState([]);
  const [recommendedcrafts, setRecommendedCrafts] = useState([]);
  const [quesStep, setQuesStep] = useState(1);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadingRecommendedCrafts, setLoadingRecommendedCrafts] = useState(
    false
  );
  const [loadingAllCrafts, setLoadingAllCrafts] = useState(false);
  const [loadingMoreCrafts, setLoadingMoreCrafts] = useState(false);
  const [showLoad, setShowLoad] = useState(false);
  const myData = JSON.parse(localStorage.getItem("userDatas"));

  useEffect(() => {
    const fetchProduct = async () => {
      console.log("useeffect rinning");
      let searchquery = searchText;
      if (props.location.state) searchquery = props.location.state.search;
      let urltoEditandAdd = `/all-products`;
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}${urltoEditandAdd}`,
          "POST",
          {
            "Content-Type": "application/json",
          },
          JSON.stringify({
            type: "c",
            query: searchquery,
          })
        );
        console.log("responseDatacraft", responseData);
        setCrafts(responseData.products);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProduct();
  }, []);
  useEffect(() => {
    const fetchProduct = async () => {
      console.log("useeffect rinning");
      let searchquery = searchText;
      if (props.location.state) searchquery = props.location.state.search;
      let urltoEditandAdd = `/recommended-products`;
      setLoadingRecommendedCrafts(true);
      // setLoadingAllCrafts(true);
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}${urltoEditandAdd}`,
          "POST",
          {
            "Content-Type": "application/json",
          },
          JSON.stringify({
            userId: userId,
            type: "c",
            query: searchquery,
          })
        );
        console.log("responseDataRecommendedcrafts", responseData);
        setLoadingRecommendedCrafts(false);
        // setLoadingAllCrafts(false);
        setRecommendedCrafts(responseData.products);
      } catch (err) {
        console.log(err.message);
        setLoadingRecommendedCrafts(false);
        // setLoadingAllCrafts(false);
      }
    };
    if (userId && myData.quiz) fetchProduct();
  }, [userId]);
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        // setLoadingRecommendedCrafts(true);
        setLoadingAllCrafts(true);
        console.log("Logging");
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/all-products`,
          "POST",
          {
            "Content-Type": "application/json",
          },
          JSON.stringify({
            query: searchText,
            type: "c",
          })
        );
        console.log("responseDataasd", responseData);
        if (responseData.products.length === 10) setShowLoad(true);
        // setLoadingRecommendedCrafts(false);
        setLoadingAllCrafts(false);
        // setRecommendedCrafts(responseData.products);
        setCrafts(responseData.products);
      } catch (err) {
        // setLoadingRecommendedCrafts(false);
        setLoadingAllCrafts(false);
      }
    }, 500);
    if (userId)
      return () => {
        clearTimeout(timer);
      };
  }, [searchText, sendRequest]);
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        // setLoadingRecommendedCrafts(true);
        // setLoadingAllCrafts(true);
        console.log("Logging");
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/recommended-products`,
          "POST",
          {
            "Content-Type": "application/json",
          },
          JSON.stringify({
            userId: userId,
            query: searchText,
            type: "c",
          })
        );
        console.log("responseDataasd", responseData);
        if (responseData.products.length === 10) setShowLoad(true);
        setLoadingRecommendedCrafts(false);
        // setLoadingAllCrafts(false);
        setRecommendedCrafts(responseData.products);
        // setCrafts(responseData.products);
      } catch (err) {
        setLoadingRecommendedCrafts(false);
        // setLoadingAllCrafts(false);
      }
    }, 500);
    if (userId && myData.quiz)
      return () => {
        clearTimeout(timer);
      };
  }, [searchText, sendRequest]);
  const handleLoadMoreCrafts = async () => {
    // const fetchProduct = async () => {
    setLoadingMoreCrafts(true);

    let searchquery = searchText;
    if (props.location.state) searchquery = props.location.state.search;
    let urltoEditandAdd = `/all-products?skip=${craft.length}`;

    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}${urltoEditandAdd}`,
        "POST",
        {
          "Content-Type": "application/json",
        },
        JSON.stringify({
          type: "c",
          query: searchquery,
        })
      );
      console.log("responseDataNewStudies", responseData);
      let tempCraft = craft.concat(responseData.products);
      console.log("tempCraft", tempCraft);
      tempCraft.concat(responseData.products);
      setCrafts(tempCraft);
      setLoadingMoreCrafts(false);
      if (responseData.products.length === 10) {
        setShowLoad(true);
      } else {
        setShowLoad(false);
      }
      console.log("all crafts", craft);
    } catch (err) {
      console.log(err.message);
    }
    // };
    // fetchProduct();
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Crafts</title>
      </Helmet>
      <HeaderCoverNew image={image} mainHeading="THE craft" />
      <div className="container">
        <div className="d-flex justify-content-center">
          <div
            className={[
              `d-flex`,
              `mt-5`,
              `mb-5`,
              `d-flex`,
              classes.headerCoverSearchDiv,
            ].join(" ")}
          >
            <input
              type="text"
              className={classes.headerCoverSearchInputField}
              placeholder="What are you looking for?"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <img
              className={classes.headerCoverSearchButton}
              alt="search"
              src="assets/img/relevant/products1/products/search.svg"
            />
          </div>
        </div>
        <div>
          {token && userId ? (
            <div className="d-flex flex-column mt-5 mb-5">
              <h4 style={{ color: "#8E5051", fontWeight: 600 }}>
                Crafts Recommended To You
              </h4>

              {loadingRecommendedCrafts && (
                <div>
                  <div className="row col-12 mb-5 mt-5">
                    {[...Array(3)].map((study, i) => {
                      return (
                        <span
                          className="col-12 col-md-6 mb-3"
                          target="_blank"
                          // href={study.link1}
                          key={i}
                        >
                          <div className="row mb-4">
                            <div
                              className="col-12 col-md-6 d-flex align-items-center justify-content-center"
                              style={{ height: "150px" }}
                            >
                              <div
                                className={classes.theprosImage}
                                style={{
                                  // backgroundImage: `url(${study.picture})`,
                                  backgroundColor: "rgb(136,136,136,0.4)",
                                  width: "100%",
                                  height: "100%",
                                  backgroundPosition: "center",
                                  backgroundSize: "cover",
                                  backgroundRepeat: "no-repeat",
                                  // boxShadow: "0px 0px 1px 2px #a7a7a7",
                                  borderRadius: "5px",
                                }}
                              ></div>
                            </div>
                            <div className="col-12 col-md-6 pt-md-0 pt-3">
                              <div className="d-flex flex-column">
                                {/* <div
                                  className={[
                                    `noMarginBottom`,
                                    classes.theProsHeading,
                                    classes.theStudyDummyHeading,
                                  ].join(" ")}
                                >
                                  <div
                                    className={classes.theStudyAnimatingSpan}
                                  ></div>
                                </div> */}
                                <img alt="GIF" src={Gif2} />
                                <div className={`pt-2`}>
                                  <img alt="GIF" src={Gif1} />
                                  {/* <p
                                    style={{
                                      fontSize: "16px",
                                      color: "#888",
                                      backgroundColor: "rgb(136, 136, 136,0.4)",
                                      height: "24px",
                                      width: "70%",
                                    }}
                                  ></p> */}
                                  <img alt="GIF" src={Gif1} className="mt-2" />
                                  {/* <p
                                    className="mt-2"
                                    style={{
                                      fontSize: "16px",
                                      color: "#888",
                                      backgroundColor: "rgb(136, 136, 136,0.4)",
                                      height: "24px",
                                      width: "70%",
                                    }}
                                  ></p> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
              {!loadingRecommendedCrafts && (
                <div className="mt-3">
                  {!myData.quiz && (
                    <h5>
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
                                    className={classes.thecraftImage}
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
                                        classes.thecraftHeading,
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
                          <h5>No studies recommended to your hair profile</h5>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : null}
        </div>
        <div className="d-flex flex-column mt-5 mb-5">
          <h4 style={{ color: "#8E5051", fontWeight: 600 }}>Crafts for you</h4>
          {loadingAllCrafts && (
            <div>
              <div className="row col-12 mb-5 mt-5">
                {[...Array(3)].map((study, i) => {
                  return (
                    <span
                      className="col-12 col-md-6 mb-3"
                      target="_blank"
                      // href={study.link1}
                      key={i}
                    >
                      <div className="row mb-4">
                        <div
                          className="col-12 col-md-6 d-flex align-items-center justify-content-center"
                          style={{ height: "150px" }}
                        >
                          <div
                            className={classes.theprosImage}
                            style={{
                              // backgroundImage: `url(${study.picture})`,
                              backgroundColor: "rgb(136,136,136,0.4)",
                              width: "100%",
                              height: "100%",
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              // boxShadow: "0px 0px 1px 2px #a7a7a7",
                              borderRadius: "5px",
                            }}
                          ></div>
                        </div>
                        <div className="col-12 col-md-6 pt-md-0 pt-3">
                          <div className="d-flex flex-column">
                            {/* <div
                              className={[
                                `noMarginBottom`,
                                classes.theProsHeading,
                                classes.theStudyDummyHeading,
                              ].join(" ")}
                            >
                              <div
                                className={classes.theStudyAnimatingSpan}
                              ></div>
                            </div> */}
                            <img alt="GIF" src={Gif2} />
                            <div className={`pt-2`}>
                              <img alt="GIF" src={Gif1} />
                              {/* <p
                                style={{
                                  fontSize: "16px",
                                  color: "#888",
                                  backgroundColor: "rgb(136, 136, 136,0.4)",
                                  height: "24px",
                                  width: "70%",
                                }}
                              ></p> */}
                              <img alt="GIF" src={Gif1} className="mt-2" />
                              {/* <p
                                className="mt-2"
                                style={{
                                  fontSize: "16px",
                                  color: "#888",
                                  backgroundColor: "rgb(136, 136, 136,0.4)",
                                  height: "24px",
                                  width: "70%",
                                }}
                              ></p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>
                  );
                })}
              </div>
            </div>
          )}
          {!loadingAllCrafts && (
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
                          className={classes.thecraftImage}
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
                              classes.thecraftHeading,
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
              {loadingMoreCrafts ? (
                <LoadingSpinner />
              ) : (
                <div>
                  {showLoad && (
                    <div>
                      <button
                        className={classes.loadMoreButton}
                        onClick={handleLoadMoreCrafts}
                      >
                        Explore More
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CraftProducts;
