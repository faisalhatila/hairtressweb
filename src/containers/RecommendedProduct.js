import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { head } from "lodash";
import HeaderCover from "../components/HeaderCover";
import CareerNeeds from "../components/ourservices/CareerNeeds";
import GroupSessions from "../components/ourservices/GroupSessions";
import IndividualServices from "../components/ourservices/IndividualServices";
import AboutTress from "../components/home/AboutTress";
import ServiceDesc from "../components/home/ServiceDesc";
import HowItWorks from "../components/home/HowItWorks";
import { useHttpClient } from "../shared/hooks/http-hook";
import SearchIcon from "./search.svg";
import LoadingSpinner from "../shared/UI/LoadingSpinner";

import classes from "./Products.module.css";
import classess from "../components/HeaderCover.module.css";
import image from "./homeHeaderCover.png";
const Products = (props) => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  // const product1 = [
  //   {
  //     id: 0,
  //     title: "Prod 1",
  //     image: "assets/img/relevant/products1/1.png",
  //   },
  //   {
  //     id: 1,
  //     title: "Prod 1",
  //     image: "assets/img/relevant/products1/2.png",
  //   },
  //   {
  //     id: 2,
  //     title: "Prod 1",
  //     image: "assets/img/relevant/products1/3.png",
  //   },
  //   {
  //     id: 3,
  //     title: "Prod 1",
  //     image: "assets/img/relevant/products1/4.png",
  //   },
  //   {
  //     id: 4,
  //     title: "Prod 1",
  //     image: "assets/img/relevant/products1/5.png",
  //   },
  //   {
  //     id: 5,
  //     title: "Prod 1",
  //     image: "assets/img/relevant/products1/6.png",
  //   },
  //   {
  //     id: 6,
  //     title: "Prod 1",
  //     image: "assets/img/relevant/products1/7.png",
  //   },
  //   {
  //     id: 7,
  //     title: "Prod 1",
  //     image: "assets/img/relevant/products1/8.png",
  //   },
  // ];
  // const products = [
  //   {
  //     id: 0,
  //     title: "Prod 1",
  //     image: "assets/img/relevant/products/1.png",
  //   },
  //   {
  //     id: 1,
  //     title: "Prod 1",
  //     image: "assets/img/relevant/products/2.png",
  //   },
  //   {
  //     id: 2,
  //     title: "Prod 1",
  //     image: "assets/img/relevant/products/3.png",
  //   },
  //   {
  //     id: 3,
  //     title: "Prod 1",
  //     image: "assets/img/relevant/products/4.png",
  //   },
  //   {
  //     id: 4,
  //     title: "Prod 1",
  //     image: "assets/img/relevant/products/5.png",
  //   },
  // ];
  const handleChangeSearchText = (e) => {
    console.log("searchText", e.target.value);
    setSearchText(e.target.value);
  };
  useEffect(() => {
    const fetchProduct = async () => {
      console.log("useeffect rinning");
      let searchquery = searchText;
      if (props.location.state) searchquery = props.location.state.search
      // console.log("props recommended", props.location.state.search ? props.location.state.search : 'nothing');
      let urltoEditandAdd = `/all-products`;
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}${urltoEditandAdd}`,
          "POST",
          {
            "Content-Type": "application/json",
          },
          JSON.stringify({
            // query: props.location.state.search ? props.location.state.search : null,
            query: searchquery,
          })
        );
        console.log("responseData", responseData);
        setProducts(responseData.products);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProduct();
  }, []);
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
                placeholder="What your are looking for?"
                value={searchText}
                onChange={handleChangeSearchText}
              />
              <button
                className={classess.headerSearchButton}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
                onClick={handleSubmit}
              >
                <Link to="/recommeded-product">
                  <img
                    className={classess.headerCoverSearchButton}
                    alt="search"
                    // src={search}
                    src={SearchIcon}
                  />
                </Link>
              </button>
            </div>
            <div>
              <label
                className={[
                  `noMarginBottom`,
                  classess.headerCoverRegisterButton,
                ].join(" ")}
              >
                Register
              </label>
            </div>
          </div>
        </div>
        {/* {props.children} */}
      </div>

      <div className="container">
        <h2 className="text-center" style={{ color: "#8E5051" }}>
          RECOMMENDED TO YOU
        </h2>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <LoadingSpinner />
          </div>
        ) : (
            <div>
              <div className="d-flex flex-column mt-5 mb-5">
                {/* <h4 style={{ color: "#8E5051" }}>Craft Recommended to you</h4> */}
                <h4 style={{ color: "#8E5051" }}>Crafts Recommended to you</h4>
                <div className="row">
                  {/* {product1.map((product, i) => { */}
                  {products ? products.filter(item => item.crafts).map((product, i) => {
                    return (
                      <div
                        className={[
                          `col-3`,
                          `d-flex`,
                          `mt-4`,
                          `justify-content-center`,
                          classes.productDiv,
                        ].join(" ")}
                      >
                        <div
                          className={[
                            `d-flex`,
                            `justify-content-center`,
                            `flex-column`,
                            `align-items-center`,
                            classes.recommendedProduct,
                          ].join(" ")}
                        >
                          <img
                            alt={product.title}
                            src="assets/img/relevant/products1/2.png"
                            style={{ maxWidth: "154px", maxHeight: "154px" }}
                          />
                          <div className="d-flex align-items-baseline">
                            <div className="mr-4">
                              <label style={{
                                fontSize: '17px',
                                fontWeight: 'bold',
                                color: '#000',
                              }}>
                                {product.product_name}
                              </label>
                            </div>
                            <div >
                              <label style={{
                                fontSize: '21px',
                                fontWeight: 'bold',
                                color: 'brown',
                              }}>
                                {`$ ${product.product_price}`}
                              </label>
                            </div>

                          </div>
                        </div>
                      </div>
                    );
                  }) : <div className="d-flex justify-content-between">
                      <h3>No products available</h3>
                    </div>}
                </div>
              </div>
              <div className="d-flex flex-column mt-5 mb-5">
                {/* <h4 style={{ color: "#8E5051" }}>Craft Recommended to you</h4> */}
                <h4 style={{ color: "#8E5051" }}>Pros Recommended to you</h4>
                <div className="row">
                  {/* {product1.map((product, i) => { */}
                  {products ? products.filter(item => !item.crafts).map((product, i) => {
                    return (
                      <div
                        className={[
                          `col-3`,
                          `d-flex`,
                          `mt-4`,
                          `justify-content-center`,
                          classes.productDiv,
                        ].join(" ")}
                      >
                        <div
                          className={[
                            `d-flex`,
                            `justify-content-center`,
                            `flex-column`,
                            `align-items-center`,
                            classes.recommendedProduct,
                          ].join(" ")}
                        >
                          <img
                            alt={product.title}
                            src="assets/img/relevant/products1/2.png"
                            style={{ maxWidth: "154px", maxHeight: "154px" }}
                          />
                          <div className="d-flex align-items-baseline">
                            <div className="mr-4">
                              <label style={{
                                fontSize: '17px',
                                fontWeight: 'bold',
                                color: '#000',
                              }}>
                                {product.product_name}
                              </label>
                            </div>
                            <div >
                              <label style={{
                                fontSize: '21px',
                                fontWeight: 'bold',
                                color: 'brown',
                              }}>
                                {`$ ${product.product_price}`}
                              </label>
                            </div>

                          </div>
                        </div>
                      </div>
                    );
                  }) : <div className="d-flex justify-content-between">
                      <h3>No products available</h3>
                    </div>}
                </div>
              </div>

            </div>
          )}
        {/* <div className="d-flex flex-column mt-5">
          <h4 style={{ color: "#8E5051" }}>Pros Recommended to you</h4>
          <div className="row">
            {product1.map((product, i) => {
              return (
                <div
                  className={[
                    `col-3`,
                    `d-flex`,
                    `mt-4`,
                    `justify-content-center`,
                    classes.productDiv,
                  ].join(" ")}
                >
                  <div
                    className={[
                      `d-flex`,
                      `justify-content-center`,
                      classes.recommendedProduct,
                    ].join(" ")}
                  >
                    <img
                      alt={product.title}
                      src={product.image}
                      style={{ maxWidth: "154px", maxHeight: "154px" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-flex flex-column mt-5">
          <h4 style={{ color: "#8E5051" }}>Products Recommended to you</h4>
          <div className="row">
            {product1.map((product, i) => {
              return (
                <div
                  className={[
                    `col-3`,
                    `d-flex`,
                    `mt-4`,
                    `justify-content-center`,
                    classes.productDiv,
                  ].join(" ")}
                >
                  <div
                    className={[
                      `d-flex`,
                      `justify-content-center`,
                      classes.recommendedProduct,
                    ].join(" ")}
                  >
                    <img
                      alt={product.title}
                      src={product.image}
                      style={{ maxWidth: "154px", maxHeight: "154px" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-flex flex-column mt-5 mb-5">
          <h4 style={{ color: "#8E5051" }}>Studies Recommended to you</h4>
          <div className="row">
            {product1.map((product, i) => {
              return (
                <div
                  className={[
                    `col-3`,
                    `d-flex`,
                    `mt-4`,
                    `justify-content-center`,
                    classes.productDiv,
                  ].join(" ")}
                >
                  <div
                    className={[
                      `d-flex`,
                      `justify-content-center`,
                      classes.recommendedProduct,
                    ].join(" ")}
                  >
                    <img
                      alt={product.title}
                      src={product.image}
                      style={{ maxWidth: "154px", maxHeight: "154px" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
      {/* <AboutTress />
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
          <label
            className={[
              `noMarginBottom`,
              `text-center`,
              classes.getStartButton,
            ].join(" ")}
          >
            GET START
          </label>
          <label
            className={[
              `noMarginBottom`,
              `text-center`,
              `pt-3`,
              classes.getStartTagLine,
            ].join(" ")}
          >
            We are here to help. Get in touch!
          </label>
        </div>
      </div> */}
    </div>
  );
};

export default Products;
