import classes from "./AboutTress.module.css";
import React, { useState } from "react";

const AboutTress = (props) => {
  const [hoverItem, setHoverItem] = useState("");
  const aboutTressItems = [
    {
      id: 0,
      title: "The Products",
      para:
        "eu, excepteur nisl, sit congue, exercitation occaecat nullam bibendum ut risus hac laoreet lorem lorem, orci. nulla",
      image: "assets/img/relevant/abouttress/theProduct.svg",
      image1: "assets/img/relevant/abouttress/theProduct1.svg",
    },
    {
      id: 1,
      title: "The Crafting",
      para:
        "eu, excepteur nisl, sit congue, exercitation occaecat nullam bibendum ut risus hac laoreet lorem lorem, orci. nulla",
      image: "assets/img/relevant/abouttress/theCraft.svg",
      image1: "assets/img/relevant/abouttress/theCraft1.svg",
    },
    {
      id: 2,
      title: "The Pros",
      para:
        "eu, excepteur nisl, sit congue, exercitation occaecat nullam bibendum ut risus hac laoreet lorem lorem, orci. nulla",
      image: "assets/img/relevant/abouttress/thePros.svg",
      image1: "assets/img/relevant/abouttress/thePros1.svg",
    },
  ];
  const handleHoverImage = (item) => {
    setHoverItem(item);
  };
  return (
    <div className={[`container`, classes.aboutTressMainDiv].join(" ")}>
      <div className="row">
        {aboutTressItems.map((item, i) => {
          return (
            <div
              key={i}
              className={[
                `col-12`,
                `col-md-4`,
                `d-flex`,
                `flex-column`,
                `justify-content-center`,
                `align-items-center`,
                classes.aboutTressItemDiv,
              ].join(" ")}
              onMouseEnter={() => handleHoverImage(item.id)}
              onMouseLeave={() => setHoverItem("")}
            >
              <div>
                <div className={classes.itemImageDiv}>
                  <img
                    src={item.id === hoverItem ? item.image1 : item.image}
                    alt={item.title}
                    className={classes.itemImage}
                  />
                </div>
              </div>
              <h6
                className={[
                  `noMarginBottom`,
                  `mt-4`,
                  `mb-4`,
                  classes.itemHeading,
                ].join(" ")}
              >
                {item.title}
              </h6>
              <p className={[`text-center`, classes.itemPara].join(" ")}>
                {item.para}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutTress;
