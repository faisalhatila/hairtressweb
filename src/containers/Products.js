import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Products.module.css";
// import image from "./question.png";
import image from "./headerCovers/Product.png";
import HeaderCoverNew from "../components/HeaderCoverNew";
import { useAuth } from "../shared/hooks/auth-hooks";
import { useHttpClient } from "../shared/hooks/http-hook";
import LoadingSpinner from "../shared/UI/LoadingSpinner";
import { Helmet } from "react-helmet";
import Gif2 from "./new/Gif/Gif4.gif";
import Gif1 from "./new/Gif/Gif1.gif";

const Products = (props) => {
  const { userId, token } = useAuth();
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [quesStep, setQuesStep] = useState(1);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadingMoreProducts, setLoadingMoreProducts] = useState(false);
  const [
    loadingMoreRecommendedProducts,
    setLoadingMoreRecommendedProducts,
  ] = useState(false);
  const [showLoad, setShowLoad] = useState(false);
  const [showRecommendedLoad, setShowRecommendedLoad] = useState(false);
  const [loadingRecommendedProducts, setLoadingRecommendedProducts] = useState(
    false
  );
  const [loadingAllProducts, setLoadingAllProducts] = useState(false);
  const myData = JSON.parse(localStorage.getItem("userDatas"));

  useEffect(() => {
    const fetchProduct = async () => {
      console.log("useeffect rinning");
      let searchquery = searchText;
      setLoadingAllProducts(true);
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
            type: "pr",
            query: searchquery,
          })
        );
        console.log("responseDataProducts", responseData);
        setProducts(responseData.products);
        if (responseData.products.length === 10) setShowLoad(true);
        setLoadingAllProducts(false);
      } catch (err) {
        console.log(err.message);
        setLoadingAllProducts(true);
      }
    };
    fetchProduct();
  }, []);
  useEffect(() => {
    const fetchProduct = async () => {
      console.log("useeffect rinning");
      let searchquery = searchText;
      if (props.location.state) searchquery = props.location.state.search;
      setLoadingRecommendedProducts(true);
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
            type: "pr",
            query: searchquery,
          })
        );
        console.log("responseDataRecommendedProducts", responseData);
        if (responseData.products.length === 10) setShowRecommendedLoad(true);
        setRecommendedProducts(responseData.products);
        setLoadingRecommendedProducts(false);
      } catch (err) {
        console.log(err.message);
        setLoadingRecommendedProducts(false);
      }
    };
    if (userId && myData.quiz) fetchProduct();
  }, [userId, myData && myData.quiz]);
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        // setLoadingRecommendedProducts(true);
        setLoadingAllProducts(true);
        console.log("Logging");
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/all-products`,
          "POST",
          {
            "Content-Type": "application/json",
          },
          JSON.stringify({
            query: searchText,
            type: "pr",
          })
        );
        console.log("responseDataasd", responseData);
        // setLoadingRecommendedProducts(false);
        setLoadingAllProducts(false);
        // setRecommendedProducts(responseData.products);
        setProducts(responseData.products);
      } catch (err) {
        // setLoadingRecommendedProducts(false);
        setLoadingAllProducts(false);
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
        setLoadingRecommendedProducts(true);
        // setLoadingAllProducts(true);
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
            type: "pr",
          })
        );
        console.log("responseDataasd", responseData);
        setLoadingRecommendedProducts(false);
        // setLoadingAllProducts(false);
        // setRecommendedProducts(responseData.products);
        setProducts(responseData.products);
      } catch (err) {
        setLoadingRecommendedProducts(false);
        // setLoadingAllProducts(false);
      }
    }, 500);
    if (userId && myData.quiz)
      return () => {
        clearTimeout(timer);
      };
  }, [searchText, sendRequest, myData && myData.quiz]);
  const handleLoadMoreProducts = async () => {
    // const fetchProduct = async () => {
    setLoadingMoreProducts(true);

    let searchquery = searchText;
    if (props.location.state) searchquery = props.location.state.search;
    let urltoEditandAdd = `/all-products?skip=${products.length}`;

    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}${urltoEditandAdd}`,
        "POST",
        {
          "Content-Type": "application/json",
        },
        JSON.stringify({
          type: "pr",
          query: searchquery,
        })
      );
      console.log("responseDataNewStudies", responseData);
      let tempProducts = products.concat(responseData.products);
      console.log("tempProducts", tempProducts);
      tempProducts.concat(responseData.products);
      setProducts(tempProducts);
      setLoadingMoreProducts(false);
      if (responseData.products.length === 10) {
        setShowLoad(true);
      } else {
        setShowLoad(false);
      }
      console.log("all products", products);
    } catch (err) {
      console.log(err.message);
    }
    // };
    // fetchProduct();
  };
  const handleLoadMoreRecommendedProducts = async () => {
    // const fetchProduct = async () => {
    setLoadingMoreRecommendedProducts(true);

    let searchquery = searchText;
    if (props.location.state) searchquery = props.location.state.search;
    let urltoEditandAdd = `/recommended-products?skip=${recommendedProducts.length}`;

    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}${urltoEditandAdd}`,
        "POST",
        {
          "Content-Type": "application/json",
        },
        JSON.stringify({
          userId: userId,
          type: "pr",
          query: searchquery,
        })
      );
      console.log("responseDataNewStudies", responseData);
      let tempProducts = recommendedProducts.concat(responseData.products);
      console.log("tempProducts", tempProducts);
      tempProducts.concat(responseData.products);
      setRecommendedProducts(tempProducts);
      setLoadingMoreRecommendedProducts(false);
      if (responseData.products.length === 10) {
        setShowRecommendedLoad(true);
      } else {
        setShowRecommendedLoad(false);
      }
      console.log("all products", products);
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
        <title>Products</title>
      </Helmet>
      <HeaderCoverNew image={image} mainHeading="THE PRODUCTS" />
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
                Products Recommended To You
              </h4>
              {loadingRecommendedProducts && (
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
                                className={classes.theProductImage}
                                style={{
                                  // backgroundImage: `url(${study.picture})`,
                                  backgroundColor: "rgb(136,136,136,0.4)",
                                  width: "100%",
                                  height: "100%",
                                  backgroundPosition: "center",
                                  backgroundSize: "contain",
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
                                    classes.theProductHeading,
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

              {!loadingRecommendedProducts && (
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
                    <div className="row col-12 mt-5">
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
                          <h3>No products recommended to your hair profile</h3>
                        </div>
                      )}
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
                            onClick={handleLoadMoreRecommendedProducts}
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
          ) : null}
        </div>
        {loadingAllProducts && (
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
                          className={classes.theProductImage}
                          style={{
                            // backgroundImage: `url(${study.picture})`,
                            backgroundColor: "rgb(136,136,136,0.4)",
                            width: "100%",
                            height: "100%",
                            backgroundPosition: "center",
                            backgroundSize: "contain",
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
                              classes.theProductHeading,
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
        {!loadingAllProducts && (
          <div className="d-flex flex-column mt-5 mb-5">
            <h4 style={{ color: "#8E5051", fontWeight: 600 }}>
              Products for you
            </h4>
            <div className="row col-12 mb-5 mt-5">
              {products.map((product, j) => {
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
              {loadingMoreProducts ? (
                <LoadingSpinner />
              ) : (
                <div>
                  {showLoad && (
                    <div>
                      <button
                        className={classes.loadMoreButton}
                        onClick={handleLoadMoreProducts}
                      >
                        Explore More
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
