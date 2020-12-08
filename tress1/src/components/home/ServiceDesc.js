import React from "react";
import classes from "./ServiceDesc.module.css";

const ServiceDesc = (props) => {
  const serviceDesc = [
    {
      id: 0,
      title: "The Products",
      para:
        "eu, excepteur nisl, sit congue, exercitation occaecat nullam bibendum ut risus hac laoreet lorem lorem, orci. nulla",
      image: "assets/img/relevant/serviceDesc/theProducts.png",
    },
    {
      id: 1,
      title: "The Craft",
      para:
        "eu, excepteur nisl, sit congue, exercitation occaecat nullam bibendum ut risus hac laoreet lorem lorem, orci. nulla",
      image: "assets/img/relevant/serviceDesc/theCraft.png",
    },
    {
      id: 2,
      title: "The Pros",
      para:
        "eu, excepteur nisl, sit congue, exercitation occaecat nullam bibendum ut risus hac laoreet lorem lorem, orci. nulla",
      image: "assets/img/relevant/serviceDesc/thePros.png",
    },
    {
      id: 3,
      title: "The Study",
      para:
        "eu, excepteur nisl, sit congue, exercitation occaecat nullam bibendum ut risus hac laoreet lorem lorem, orci. nulla",
      image: "assets/img/relevant/serviceDesc/the-study.jpg",
    },
  ];
  return (
    <div className={[`container`, classes.serviceDescMainDiv].join(" ")}>
      <div className="row">
        {serviceDesc.map((service, i) => {
          return (
            <div
              key={i}
              className={[
                `col-12`,
                `col-md-6`,
                `d-flex`,
                `flex-column`,
                `justify-content-center`,
                `align-items-center`,
                `mt-4`,
                classes.serviceDescDiv,
              ].join(" ")}
            >
              <div
                className={[`col`, classes.serviceDivOverlay].join(" ")}
              ></div>
              <div className={classes.imageBox}>
                <img
                  alt={service.title}
                  src={service.image}
                  className={classes.serviceImage}
                />
              </div>
              <div className={[`col`, classes.serviceContentDiv].join(" ")}>
                <h2>{service.title}</h2>
                <p>{service.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceDesc;
