import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./TheStudy.module.css";
// import image from "./question.png";
import image from "./headerCovers/Study.png";
import HeaderCoverNew from "../components/HeaderCoverNew";
import { useAuth } from "../shared/hooks/auth-hooks";
import { useHttpClient } from "../shared/hooks/http-hook";
import LoadingSpinner from "../shared/UI/LoadingSpinner";
import { Helmet } from "react-helmet";
import Gif2 from "./new/Gif/Gif4.gif";
import Gif1 from "./new/Gif/Gif1.gif";

const TheStudy = (props) => {
  const { userId, token } = useAuth();
  const [searchText, setSearchText] = useState("");
  const [study, setStudy] = useState([]);
  const [recommendedStudy, setRecommendedStudy] = useState([]);
  const [quesStep, setQuesStep] = useState(1);
  const [loadSkip, setLoadSkip] = useState(0);
  const [showLoad, setShowLoad] = useState(false);
  const [showRecommendedLoad, setShowRecommendedLoad] = useState(false);
  const [loadingMoreProducts, setLoadingMoreProducts] = useState(false);
  const [loadingAllStudies, setLoadingAllStudies] = useState(false);
  const [loadingRecommendedStudies, setloadingRecommendedStudies] = useState(
    false
  );
  const [
    loadingMoreRecommendedProducts,
    setLoadingMoreRecommendedProducts,
  ] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const handleGoToNextQues = () => {
    setQuesStep(quesStep + 1);
  };
  const myData = JSON.parse(localStorage.getItem("userDatas"));

  useEffect(() => {
    const fetchProduct = async () => {
      console.log("useeffect rinning");
      let searchquery = searchText;
      setLoadingAllStudies(true);
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
            type: "s",
            query: searchquery,
          })
        );
        console.log("responseDataStudy", responseData);
        setLoadingAllStudies(false);
        if (responseData.products.length === 10) setShowLoad(true);
        setStudy(responseData.products);
      } catch (err) {
        console.log(err.message);
        setLoadingAllStudies(false);
      }
    };
    fetchProduct();
  }, []);
  useEffect(() => {
    const fetchProduct = async () => {
      console.log("useeffect rinning");
      setloadingRecommendedStudies(true);
      let searchquery = searchText;
      setLoadingAllStudies(true);
      if (props.location.state) searchquery = props.location.state.search;
      let urltoEditandAdd = `/recommended-products`;
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}${urltoEditandAdd}`,
          "POST",
          {
            "Content-Type": "application/json",
          },
          JSON.stringify({
            userId: userId,
            type: "s",
            query: searchquery,
          })
        );
        console.log("responseDataRecommendedStudy", responseData);
        setloadingRecommendedStudies(false);
        setRecommendedStudy(responseData.products);
      } catch (err) {
        console.log(err.message);
        setloadingRecommendedStudies(false);
      }
    };
    if (userId && myData.quiz) fetchProduct();
  }, [userId]);
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        setloadingRecommendedStudies(true);
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
            type: "s",
          })
        );
        console.log("responseDataasd", responseData);
        setloadingRecommendedStudies(false);
        setRecommendedStudy(responseData.products);
      } catch (err) {
        setloadingRecommendedStudies(false);
      }
    }, 500);
    if (userId && myData.quiz)
      return () => {
        clearTimeout(timer);
      };
  }, [searchText, sendRequest]);
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        setloadingRecommendedStudies(true);
        console.log("Logging");
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/all-products`,
          "POST",
          {
            "Content-Type": "application/json",
          },
          JSON.stringify({
            userId: userId,
            query: searchText,
            type: "s",
          })
        );
        console.log("responseDataasd", responseData);
        setloadingRecommendedStudies(false);
        setStudy(responseData.products);
      } catch (err) {
        setloadingRecommendedStudies(false);
      }
    }, 500);
    if (userId)
      return () => {
        clearTimeout(timer);
      };
  }, [searchText, sendRequest]);
  const handleLoadMoreRecommendedStudies = async () => {
    // const fetchProduct = async () => {
    setLoadingMoreRecommendedProducts(true);

    let searchquery = searchText;
    if (props.location.state) searchquery = props.location.state.search;
    let urltoEditandAdd = `/recommended-products?skip=${recommendedStudy.length}`;

    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}${urltoEditandAdd}`,
        "POST",
        {
          "Content-Type": "application/json",
        },
        JSON.stringify({
          userId: userId,
          type: "s",
          query: searchquery,
        })
      );
      console.log("responseDataNewStudies", responseData);
      let tempStudies = recommendedStudy.concat(responseData.products);
      console.log("tempStudies", tempStudies);
      tempStudies.concat(responseData.products);
      setRecommendedStudy(tempStudies);
      setLoadingMoreRecommendedProducts(false);
      if (responseData.products.length === 10) {
        setShowRecommendedLoad(true);
      } else {
        setShowRecommendedLoad(false);
      }
      console.log("all studies", study);
    } catch (err) {
      console.log(err.message);
    }
    // };
    // fetchProduct();
  };
  const handleLoadMoreStudies = async () => {
    // const fetchProduct = async () => {
    setLoadingMoreProducts(true);

    let searchquery = searchText;
    if (props.location.state) searchquery = props.location.state.search;
    let urltoEditandAdd = `/all-products?skip=${study.length}`;
    console.log("loadSkip", loadSkip);

    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}${urltoEditandAdd}`,
        "POST",
        {
          "Content-Type": "application/json",
        },
        JSON.stringify({
          type: "s",
          query: searchquery,
        })
      );
      console.log("responseDataNewStudies", responseData);
      let tempStudies = study.concat(responseData.products);
      console.log("tempStudies", tempStudies);
      tempStudies.concat(responseData.products);
      setStudy(tempStudies);
      setLoadingMoreProducts(false);
      if (responseData.products.length === 10) {
        setShowLoad(true);
      } else {
        setShowLoad(false);
      }
      console.log("all studies", study);
    } catch (err) {
      console.log(err.message);
    }
    // };
    // fetchProduct();
  };
  const handleSearchStudies = (e) => {
    setStudy([]);
    setRecommendedStudy([]);
    setSearchText(e.target.value);
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Study</title>
      </Helmet>
      <HeaderCoverNew image={image} mainHeading="THE STUDY" />
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
              // onChange={handleSearchStudies}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <img
              className={classes.headerCoverSearchButton}
              alt="search"
              src="assets/img/relevant/products1/products/search.svg"
            />
          </div>
        </div>
        {token && userId ? (
          <div className="d-flex flex-column mt-5 mb-5">
            <h4 style={{ color: "#8E5051", fontWeight: 600 }} className="col">
              Studies Recommended To You
            </h4>
            {loadingRecommendedStudies && (
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
                              className={classes.theStudyImage}
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
                                  classes.theStudyHeading,
                                  classes.theStudyDummyHeading,
                                ].join(" ")}
                              >
                                <div
                                  className={classes.theStudyAnimatingSpan}
                                ></div>
                              </div> */}
                              <img alt="GIF" src={Gif2} />
                              <div className={`pt-2`}>
                                {/* <p
                                  style={{
                                    fontSize: "16px",
                                    color: "#888",
                                    backgroundColor: "rgb(136, 136, 136,0.4)",
                                    height: "24px",
                                    width: "70%",
                                  }}
                                ></p> */}
                                <img alt="GIF" src={Gif1} />

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
                                <img alt="GIF" src={Gif1} className="mt-2" />
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
            {!loadingRecommendedStudies && (
              <div className="col mt-3">
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
                  <div>
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
                                    className={classes.theStudyImage}
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
                                        classes.theStudyHeading,
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
                                        classes.theStudyPara,
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
                  </div>
                )}{" "}
              </div>
            )}
            {loadingMoreProducts ? (
              <LoadingSpinner />
            ) : (
              <div>
                {showRecommendedLoad && (
                  <div>
                    <button
                      className={classes.loadMoreButton}
                      onClick={handleLoadMoreRecommendedStudies}
                    >
                      Explore More
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : null}
        <div className="d-flex flex-column mt-5 mb-5">
          <h4 style={{ color: "#8E5051", fontWeight: 600 }} className="col">
            Studies for you
          </h4>
          <div>
            {loadingAllStudies && (
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
                              className={classes.theStudyImage}
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
                                  classes.theStudyHeading,
                                  classes.theStudyDummyHeading,
                                ].join(" ")}
                              >
                                <div
                                  className={classes.theStudyAnimatingSpan}
                                ></div>
                              </div> */}
                              <img alt="GIF" src={Gif2} />
                              <div className={`pt-2`}>
                                {/* <p
                                  style={{
                                    fontSize: "16px",
                                    color: "#888",
                                    backgroundColor: "rgb(136, 136, 136,0.4)",
                                    height: "24px",
                                    width: "70%",
                                  }}
                                ></p> */}
                                <img alt="GIF" src={Gif1} />

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
                                <img alt="GIF" src={Gif1} className="mt-2" />
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
            {!loadingAllStudies && (
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
                            className={classes.theStudyImage}
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
                                classes.theStudyHeading,
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
            )}
          </div>
          {loadingMoreProducts ? (
            <LoadingSpinner />
          ) : (
            <div className="col">
              {showLoad && (
                <div>
                  <button
                    className={classes.loadMoreButton}
                    onClick={handleLoadMoreStudies}
                  >
                    Explore More
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TheStudy;
