import React from "react";
import { Link } from "react-router-dom";
import classes from "./ServiceDesc.module.css";
import TheStudy from "./TheStudy.png";
import ThePros from "./ThePros.png";

const ServiceDesc = (props) => {
  const serviceDesc = [
    {
      id: 0,
      title: "The Products",
      para:
        "Looking for products to add to your regimen? Check out shampoos, conditioners, leave-ins and more",
      image: "assets/img/relevant/serviceDesc/theProducts.png",
      link: "/recommeded-product",
    },
    {
      id: 1,
      title: "The Craft",
      para:
        "Whether you’re looking for a new style for a big event, vacation or simply to protect your edges, we got you covered. Check out these tutorials.",
      image: "assets/img/relevant/serviceDesc/theCraft.png",
      link: "/",
    },
    {
      id: 2,
      title: "The Pros",
      para:
        "Struggling to find a salon that works for you? Find local salons here.",
      image: ThePros,
      link: "/",
    },
    {
      id: 3,
      title: "The Study",
      para:
        "Trying to understand why you’re experiencing this hair problem? Learn about the causes, treatments and preventative measures here.",
      image: TheStudy,
      link: "/the-study",
    },
  ];
  return (
    <div className={[`container`, classes.serviceDescMainDiv].join(" ")}>
      <div className="row">
        {serviceDesc.map((service, i) => {
          return (
            <div
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
              <Link style={{ minWidth: "100%" }} key={i} to={service.link}>
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
                <div
                  className={[`col`, classes.serviceContentDiv].join(" ")}
                  style={{
                    top: 0,
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    minWidth: "90%",
                    minHeight: "100%",
                    justifyContent: "center",
                  }}
                >
                  <h2>{service.title}</h2>
                  <p>{service.para}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceDesc;
