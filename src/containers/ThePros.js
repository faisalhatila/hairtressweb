import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ThePros.module.css";
// import image from "./question.png";
import image from "./headerCovers/Pros.png";
import HeaderCoverNew from "../components/HeaderCoverNew";
import { useAuth } from "../shared/hooks/auth-hooks";
import { useHttpClient } from "../shared/hooks/http-hook";
import LoadingSpinner from "../shared/UI/LoadingSpinner";
import { Helmet } from "react-helmet";
import Gif2 from "./new/Gif/Gif4.gif";
import Gif1 from "./new/Gif/Gif1.gif";

const ThePros = (props) => {
  const { userId, token } = useAuth();
  const [searchText, setSearchText] = useState("");
  const [pros, setPros] = useState([]);
  const [recommendedpros, setRecommendedPros] = useState([]);
  const [quesStep, setQuesStep] = useState(1);
  const [loadingRecommendedPros, setLoadingRecommendedPros] = useState(false);
  const [loadingAllPros, setLoadingAllPros] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadingMorePros, setLoadingMorePros] = useState(false);
  const [showLoad, setShowLoad] = useState(false);
  const handleGoToNextQues = () => {
    setQuesStep(quesStep + 1);
  };
  const filterItems = [
    {
      id: 0,
      label: "Products",
      isChecked: false,
    },
    {
      id: 1,
      label: "Styling Tools",
      isChecked: false,
    },
    {
      id: 2,
      label: "Accessories",
      isChecked: false,
    },
    {
      id: 3,
      label: "Hair Extension",
      isChecked: false,
    },
  ];
  const [products, setProducts] = useState([
    {
      id: 0,
      title: "Toppik",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
      price: "$ 50.0",
      isAddedToWish: false,
      isAddedTocart: false,
    },
    {
      id: 1,
      title: "Toppik",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
      price: "$ 50.0",
      isAddedToWish: false,
      isAddedTocart: false,
    },
    {
      id: 2,
      title: "Toppik",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
      price: "$ 50.0",
      isAddedToWish: false,
      isAddedTocart: false,
    },
    {
      id: 3,
      title: "Toppik",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
      price: "$ 50.0",
      isAddedToWish: false,
      isAddedTocart: false,
    },
    {
      id: 4,
      title: "Toppik",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
      price: "$ 50.0",
      isAddedToWish: false,
      isAddedTocart: false,
    },
    {
      id: 5,
      title: "Toppik",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
      price: "$ 50.0",
      isAddedToWish: false,
      isAddedTocart: false,
    },
    {
      id: 6,
      title: "Toppik",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
      price: "$ 50.0",
      isAddedToWish: false,
      isAddedTocart: false,
    },
    {
      id: 7,
      title: "Toppik",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
      price: "$ 50.0",
      isAddedToWish: false,
      isAddedTocart: false,
    },
    {
      id: 8,
      title: "Toppik",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
      price: "$ 50.0",
      isAddedToWish: false,
      isAddedTocart: false,
    },
  ]);
  const handleAddToWish = (b) => {
    setProducts((prevState) => {
      console.log("#######################################");
      console.log(prevState[b]);
      console.log("#######################################");

      let tempObject = prevState[b];
      tempObject.isAddedToWish = !tempObject.isAddedToWish;
      prevState[b] = tempObject;
      return [...prevState];
      //   return prevState;
    });
  };
  const handleAddToCart = (b) => {
    setProducts((prevState) => {
      console.log("#######################################");
      console.log(prevState[b]);
      console.log("#######################################");

      let tempObject = prevState[b];
      tempObject.isAddedTocart = !tempObject.isAddedTocart;
      prevState[b] = tempObject;
      return [...prevState];
      //   return prevState;
    });
  };
  const myData = JSON.parse(localStorage.getItem("userDatas"));
  useEffect(() => {
    const fetchProduct = async () => {
      console.log("useeffect rinning");
      setLoadingAllPros(true);
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
            type: "p",
            query: searchquery,
          })
        );
        console.log("responseDatapros", responseData);
        if (responseData.products.length === 10) setShowLoad(true);
        setPros(responseData.products);
        setLoadingAllPros(false);
      } catch (err) {
        console.log(err.message);
        setLoadingAllPros(false);
      }
    };
    fetchProduct();
  }, []);
  useEffect(() => {
    const fetchProduct = async () => {
      console.log("useeffect rinning");
      setLoadingRecommendedPros(true);
      let searchquery = searchText;
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
            type: "p",
            query: searchquery,
          })
        );
        console.log("responseDataRecommendedpros", responseData);
        setLoadingRecommendedPros(false);
        setRecommendedPros(responseData.products);
      } catch (err) {
        setLoadingRecommendedPros(false);
        console.log(err.message);
      }
    };
    if (userId && myData.quiz) fetchProduct();
  }, [userId]);
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        // setLoadingRecommendedPros(true);
        setLoadingAllPros(true);
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
            type: "p",
          })
        );
        console.log("responseDataasd", responseData);
        // setLoadingRecommendedPros(false);
        setLoadingAllPros(false);
        // setRecommendedPros(responseData.products);
        setPros(responseData.products);
      } catch (err) {
        // setLoadingRecommendedPros(false);
        setLoadingAllPros(true);
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
        // setLoadingRecommendedPros(false);
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
            type: "p",
          })
        );
        console.log("responseDataasd", responseData);
        setLoadingRecommendedPros(false);
        setRecommendedPros(responseData.products);
      } catch (err) {
        setLoadingRecommendedPros(false);
      }
    }, 500);
    if (userId && myData.quiz)
      return () => {
        clearTimeout(timer);
      };
  }, [searchText, sendRequest]);
  const handleLoadMorePros = async () => {
    // const fetchProduct = async () => {
    setLoadingMorePros(true);

    let searchquery = searchText;
    if (props.location.state) searchquery = props.location.state.search;
    let urltoEditandAdd = `/all-products?skip=${pros.length}`;

    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}${urltoEditandAdd}`,
        "POST",
        {
          "Content-Type": "application/json",
        },
        JSON.stringify({
          type: "p",
          query: searchquery,
        })
      );
      console.log("responseDataNewStudies", responseData);
      let tempPros = pros.concat(responseData.products);
      console.log("tempPros", tempPros);
      tempPros.concat(responseData.products);
      setPros(tempPros);
      setLoadingMorePros(false);
      if (responseData.products.length === 10) {
        setShowLoad(true);
      } else {
        setShowLoad(false);
      }
      console.log("all pros", pros);
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
        <title>Pros</title>
      </Helmet>
      <HeaderCoverNew image={image} mainHeading="THE pros" />
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
                Pros Recommended To You
              </h4>
              {loadingRecommendedPros && (
                <div>
                  <div className="row col-12 mb-5 mt-5">
                    {[...Array(3)].map((study, i) => {
                      return (
                        <span
                          className="col-12 col-md-6 mb-3"
                          target="_blank"
                          // href={pros.link1}
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
                                  // backgroundImage: `url(${pros.picture})`,
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
              {!loadingRecommendedPros && (
                <div className="mt-3">
                  {!myData.quiz && (
                    <h5>
                      You don't have a hair profile, kindly submit a
                      <Link
                        to="/questionaire"
                        style={{ color: "rgb(114, 37, 38)", fontWeight: 600 }}
                      >
                        &nbsp;QUIZ
                      </Link>
                      , to your your recommended pros
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
                                    boxShadow:
                                      "0px 0px 5px 2px rgb(173,173,173)",
                                    borderRadius: "5px",
                                    height: "150px",
                                  }}
                                >
                                  <div
                                    className={classes.theprosImage}
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
                                        classes.theProsHeading,
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
                          <h3>No pros recommended to your hair profile</h3>
                        </div>
                      )}
                    </div>
                  )}{" "}
                </div>
              )}
            </div>
          ) : null}
        </div>
        <div className="d-flex flex-column mt-5 mb-5">
          <h4 style={{ color: "#8E5051", fontWeight: 600 }}>Pros for you</h4>
          <div>
            {loadingAllPros && (
              <div>
                <div className="row col-12 mb-5 mt-5">
                  {[...Array(3)].map((study, i) => {
                    return (
                      <span
                        className="col-12 col-md-6 mb-3"
                        target="_blank"
                        // href={pros.link1}
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
                                // backgroundImage: `url(${pros.picture})`,
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
            {!loadingAllPros && (
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
                            // className={classes.theprosImage}
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
                                classes.theProsHeading,
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
                {loadingMorePros ? (
                  <LoadingSpinner />
                ) : (
                  <div>
                    {showLoad && (
                      <div>
                        <button
                          className={classes.loadMoreButton}
                          onClick={handleLoadMorePros}
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
    </div>
  );
};

export default ThePros;
