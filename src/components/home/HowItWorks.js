import React, { useState } from "react";
import classes from "./HowItWorks.module.css";

const HowItWorks = (props) => {
  const [hoverItem, setHoverItem] = useState("");
  const howWorks = [
    {
      id: 0,
      count: 1,
      image: "assets/img/relevant/howItWorks/login.svg",
      image1: "assets/img/relevant/howItWorks/login1.svg",
      title: "Login",
      para: "Create your Tress account.",
    },
    {
      id: 2,
      count: 2,
      image: "assets/img/relevant/howItWorks/quiz.svg",
      image1: "assets/img/relevant/howItWorks/quiz1.svg",
      title: "Match",
      para: "Take our 5-step quiz to learn your hair profile",
    },
    {
      id: 3,
      count: 3,
      image: "assets/img/relevant/howItWorks/match.svg",
      image1: "assets/img/relevant/howItWorks/match1.svg",
      title: "Quiz",
      para:
        "Check out the hair care resources recommended for your hair profile!",
    },
  ];
  const handleHoverImage = (item) => {
    setHoverItem(item);
  };
  return (
    <div
      className={[
        `container`,
        `mt-5`,
        `mb-5`,
        `pt-5`,
        `pb-5`,
        classes.howItWordksMainDiv,
      ].join(" ")}
    >
      <h2 className={[`text-center`, `mb-5`, classes.mainHeading].join(" ")}>
        How does it work?
      </h2>
      <div className="row">
        {howWorks.map((item, i) => {
          return (
            <div
              key={i}
              className={[
                `col-12`,
                `mb-4`,
                `col-md-4`,
                `d-flex`,
                `flex-column`,
                `justify-content-center`,
                `align-items-center`,
                classes.howWorksDiv,
              ].join(" ")}
            >
              <h6 className={[`noMarginBottom`, classes.countLabel].join(" ")}>
                Step {item.count}
              </h6>
              <div
                className={classes.itemImageDiv}
                onMouseEnter={() => handleHoverImage(item.id)}
                onMouseLeave={() => setHoverItem("")}
              >
                <img
                  className="pt-4"
                  alt={item.title}
                  src={item.id === hoverItem ? item.image1 : item.image}
                />
              </div>
              <h6
                className={[
                  `noMarginBottom`,
                  `pt-4`,
                  `pb-4`,
                  classes.howItWorksTitle,
                ].join(" ")}
              >
                {item.title}
              </h6>
              <p
                className={[
                  `noMarginBottom`,
                  `text-center`,
                  classes.howItWorksPara,
                ].join(" ")}
              >
                {item.para}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
