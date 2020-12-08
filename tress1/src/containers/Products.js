import React, { useState } from "react";
import { Link } from "react-router-dom";
import { head } from "lodash";
import HeaderCover from "../components/HeaderCover";
import CareerNeeds from "../components/ourservices/CareerNeeds";
import GroupSessions from "../components/ourservices/GroupSessions";
import IndividualServices from "../components/ourservices/IndividualServices";
import AboutTress from "../components/home/AboutTress";
import ServiceDesc from "../components/home/ServiceDesc";
import HowItWorks from "../components/home/HowItWorks";
import classes from "./RecommendedProduct.module.css";
import image from "./homeHeaderCover.png";
const RecommendedProduct = (props) => {
  const product1 = [
    {
      id: 0,
      title: "Prod 1",
      image: "assets/img/relevant/products1/1.png",
    },
    {
      id: 1,
      title: "Prod 1",
      image: "assets/img/relevant/products1/2.png",
    },
    {
      id: 2,
      title: "Prod 1",
      image: "assets/img/relevant/products1/3.png",
    },
    {
      id: 3,
      title: "Prod 1",
      image: "assets/img/relevant/products1/4.png",
    },
    {
      id: 4,
      title: "Prod 1",
      image: "assets/img/relevant/products1/5.png",
    },
    {
      id: 5,
      title: "Prod 1",
      image: "assets/img/relevant/products1/6.png",
    },
    {
      id: 6,
      title: "Prod 1",
      image: "assets/img/relevant/products1/7.png",
    },
    {
      id: 7,
      title: "Prod 1",
      image: "assets/img/relevant/products1/8.png",
    },
  ];
  const products = [
    {
      id: 0,
      title: "Prod 1",
      image: "assets/img/relevant/products/1.png",
    },
    {
      id: 1,
      title: "Prod 1",
      image: "assets/img/relevant/products/2.png",
    },
    {
      id: 2,
      title: "Prod 1",
      image: "assets/img/relevant/products/3.png",
    },
    {
      id: 3,
      title: "Prod 1",
      image: "assets/img/relevant/products/4.png",
    },
    {
      id: 4,
      title: "Prod 1",
      image: "assets/img/relevant/products/5.png",
    },
  ];
  console.log("props",props.match)
  // const handleSubmit = async (e) => {
  //   console.log("Clicked");
  //   e.preventDefault();
  //   let urltoEditandAdd = `/all-products`;
  //   try {
  //     const responseData = await sendRequest(
  //       `${process.env.REACT_APP_BACKEND_URL}${urltoEditandAdd}`,
  //       "POST",
  //       {
  //         "Content-Type": "application/json",
  //       },
  //       JSON.stringify({
  //         query: searchText,
  //       })
  //     );
  //     console.log("responseData", responseData);
  //     setProducts(responseData.products)
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  useEffect(() => {
    console.log("useeffect rinning")
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
      setProducts(responseData.products)
    } catch (err) {
      console.log(err.message);
    }

  }, [])

  return (
    <div>
      <HeaderCover image={image} />
      <div className="container">
        <h2 className="text-center" style={{ color: "#8E5051" }}>
          RECOMMENDED TO YOU
        </h2>
        <div className="d-flex flex-column mt-5">
          <h4 style={{ color: "#8E5051" }}>Craft Recommended to you</h4>
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
        </div>
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

export default RecommendedProduct;
