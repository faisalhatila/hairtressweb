import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./TheStudy.module.css";
import image from "./question.png";
import HeaderCoverNew from "../components/HeaderCoverNew";
// import search from "./search.svg";

const TheStudy = () => {
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
              style={{ color: "#000" }}
              placeholder="What your are looking for?"
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
          <div className="col-12 mb-5">
            {[...Array(4)].map((i, j) => {
              return (
                <div className="row mb-4" key={j}>
                  <div className="col-12 col-md-3 d-flex justify-content-center">
                    <div className={classes.theStudyImage}></div>
                  </div>
                  <div className="col-12 col-md-7">
                    <div className="d-flex flex-column">
                      <h2
                        className={[
                          `noMarginBottom`,
                          classes.theProsHeading,
                        ].join(" ")}
                      >
                        The Study
                      </h2>
                      <p
                        className={[`noMarginBottom`, classes.theProsPara].join(
                          " "
                        )}
                      >
                        eu, excepteur nisl, sit congue, exercitation occaecat
                        nullam bibendum ut risus hac laoreet lorem lorem, orci.
                        nulla
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheStudy;
