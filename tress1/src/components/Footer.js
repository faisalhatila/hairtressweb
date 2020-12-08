import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Footer.module.css";
import { useHttpClient } from "../shared/hooks/http-hook";

const Footer = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [email, setEmail] = useState("");
  const footerNav = [
    {
      id: 0,
      title: "Home",
      link: "/",
    },
    {
      id: 1,
      title: "The Craft",
      link: "/",
    },
    {
      id: 2,
      title: "The Pros",
      link: "/",
    },
    {
      id: 3,
      title: "The Products",
      link: "/",
    },
    {
      id: 4,
      title: "The Study",
      link: "/",
    },
    {
      id: 5,
      title: "About Us",
      link: "/",
    },
  ];
  const social = [
    {
      id: 0,
      label: "Facebook",
      image: "assets/img/relevant/footer/facebook.svg",
    },
    {
      id: 2,
      label: "Facebook",
      image: "assets/img/relevant/footer/twitter.svg",
    },
    {
      id: 1,
      label: "Facebook",
      image: "assets/img/relevant/footer/instagram.svg",
    },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    let urltoEditandAdd = `/email`;
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}${urltoEditandAdd}`,
        "POST",
        {
          "Content-Type": "application/json",
        },
        JSON.stringify({
          email: email,
        })
      );
      console.log("responseData", responseData);
      // setProducts(responseData.products);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className={classes.footerMainDiv}>
      <div className="container pt-4 pb-4">
        <div className="d-flex flex-column flex-md-row">
          <div className="col-12 col-md-5 d-flex flex-column">
            <h6 className={classes.footerLogoText}>TRESS</h6>
            <p>
              eu, excepteur nisl, sit congue, exercitation occaecat nullam
              bibendum ut risus hac laoreet lorem lorem, orci. nulla
            </p>
            <label style={{ color: "#000", fontSize: "17px", fontWeight: 900 }}>
              www.tress.com
            </label>
            <div className="d-flex">
              {/* {social.map((icon, i) => {
                return (
                  <div
                    className={[
                      `mr-3`,
                      `d-flex`,
                      `justify-content-center`,
                      `align-items-center`,
                      classes.iconDiv,
                    ].join(" ")}
                  >
                    <div>
                      <img alt={icon.label} src={icon.image} />
                    </div>
                  </div>
                );
              })} */}
              <div
                className={[
                  `mr-3`,
                  `d-flex`,
                  `justify-content-center`,
                  `align-items-center`,
                  classes.iconDiv,
                ].join(" ")}
              >
                <div>
                  <i
                    class={[`fab`, `fa-facebook-f`, classes.socialIcon].join(
                      " "
                    )}
                  ></i>
                </div>
              </div>
              <div
                className={[
                  `mr-3`,
                  `d-flex`,
                  `justify-content-center`,
                  `align-items-center`,
                  classes.iconDiv,
                ].join(" ")}
              >
                <div>
                  <i
                    class={[`fab`, `fa-instagram`, classes.socialIcon].join(
                      " "
                    )}
                  ></i>
                </div>
              </div>
              <div
                className={[
                  `mr-3`,
                  `d-flex`,
                  `justify-content-center`,
                  `align-items-center`,
                  classes.iconDiv,
                ].join(" ")}
              >
                <div>
                  <i
                    class={[`fab`, `fa-twitter`, classes.socialIcon].join(" ")}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2">
            <h6 className={classes.footerNavColHeading}>Links</h6>
            <div className="d-flex flex-column">
              {footerNav.map((nav, i) => {
                return (
                  <Link className={classes.nanLink} to={nav.link}>
                    {nav.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex flex-column">
            <h6 className={classes.footerSubscribeFormHeading}>Subscribed</h6>
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <input
                placeholder="Enter your email here"
                type="text"
                className={classes.footerSubscribeInput}
                style={{ color: "#000", textTransform: "lowercase" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="d-flex justify-content-end mt-3">
                {/* <label
                  className={[
                    `text-center`,
                    classes.footerSubscribeSubmitButton,
                  ].join(" ")}
                >
                  Submit
                </label> */}
                <button
                  className={[
                    `text-center`,
                    classes.footerSubscribeSubmitButton,
                  ].join(" ")}
                  style={{ border: "none" }}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
