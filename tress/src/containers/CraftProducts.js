import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./CraftProducts.module.css";
import image from "./question.png";
import HeaderCoverNew from "../components/HeaderCoverNew";
// import search from "./search.svg";

const CraftProducts = () => {
  const [quesStep, setQuesStep] = useState(1);
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

  return (
    <div>
      <HeaderCoverNew image={image} mainHeading="THE CRAFTS" />
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
            />
            <img
              className={classes.headerCoverSearchButton}
              alt="search"
              src="assets/img/relevant/products1/products/search.svg"
            />
          </div>
        </div>
        {/* <h1
          style={{ color: "#8E5051" }}
          className={[`text-center`, classes.mainHeading].join(" ")}
        >
          TESS : HAIR QUIZ
        </h1> */}
        <div className="row">
          <div className="col-12 col-md-3">
            <div
              className={[
                `d-flex`,
                `flex-column`,
                ,
                `justify-content-between`,
                `mb-5`,
                classes.filterDiv,
              ].join(" ")}
            >
              <h3
                className={[
                  `text-center`,
                  `noMarginBottom`,
                  `pt-4`,
                  classes.finterHeading,
                ].join(" ")}
              >
                FILTER
              </h3>
              <div className={classes.filterItemsMainDiv}>
                {filterItems.map((item, i) => {
                  return (
                    <div className={classes.filterItemMainDiv}>
                      <div
                        className={[
                          `d-flex`,
                          `justify-content-between`,
                          `align-items-center`,
                          classes.filterItemDiv,
                        ].join(" ")}
                        key={i}
                      >
                        <label
                          className={[
                            `noMarginBottom`,
                            classes.filterLabel,
                          ].join(" ")}
                        >
                          {item.label}
                        </label>
                        <input type="checkbox" />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                className={[
                  `d-flex`,
                  `justify-content-center`,
                  `pb-4`,
                  classes.appluButtonDiv,
                ].join(" ")}
              >
                <label className={classes.applyButton}>Apply</label>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9 mb-5">
            <div className="row">
              {products.map((product, j) => {
                return (
                  <div
                    key={j}
                    className={[
                      `col-12`,
                      `col-md-4`,
                      `mb-4`,
                      `d-flex`,
                      `flex-column`,
                    ].join(" ")}
                  >
                    <div className={classes.productMainDiv}>
                      <div className={classes.favouriteIconDiv}>
                        <i
                          class={[
                            `fas`,
                            `fa-heart`,
                            classes.heartIcon,
                            product.isAddedToWish
                              ? classes.redHeart
                              : classes.grayIcon,
                          ].join(" ")}
                          onClick={() => handleAddToWish(product.id)}
                        ></i>
                      </div>
                      <div className={classes.productImageDiv}>
                        <img
                          alt="Product"
                          src="assets/img/relevant/products1/products/product.png"
                        />
                      </div>
                      <hr />
                      <div className="d-flex justify-content-center">
                        <label
                          className={[
                            `noMarginBottom`,
                            `text-center`,
                            classes.productLabel,
                          ].join(" ")}
                        >
                          {product.title}
                        </label>
                      </div>
                      <div
                        className={[
                          `d-flex`,
                          `justify-content-center`,
                          classes.productDescDiv,
                        ].join(" ")}
                      >
                        <p
                          className={[
                            `noMarginBottom`,
                            `text-center`,
                            classes.productDesc,
                          ].join(" ")}
                        >
                          {product.desc}
                        </p>
                      </div>
                      <div
                        className={[
                          `d-flex`,
                          `justify-content-between`,
                          `align-items-center`,
                          classes.productDivFooter,
                        ].join(" ")}
                      >
                        <span></span>
                        <label
                          className={[
                            `noMargin-bottom`,
                            classes.priceLabel,
                          ].join(" ")}
                        >
                          {product.price}
                        </label>
                        <i
                          class={[
                            `fas`,
                            `fa-cart-plus`,
                            classes.cartIcon,
                            product.isAddedTocart
                              ? classes.blackCart
                              : classes.grayCart,
                          ].join(" ")}
                          onClick={() => handleAddToCart(product.id)}
                        ></i>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftProducts;
