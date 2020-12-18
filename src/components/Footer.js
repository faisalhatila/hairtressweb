import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Footer.module.css";
import TikTok from "./TikTok.png";

const Footer = (props) => {
  const footerNav = [
    {
      id: 0,
      title: "Home",
      link: "/",
    },
    // {
    //   id: 1,
    //   title: "The Craft",
    //   link: "/",
    // },
    // {
    //   id: 2,
    //   title: "The Pros",
    //   link: "/",
    // },
    {
      id: 3,
      title: "The Products",
      link: "/recommeded-product",
    },
    {
      id: 4,
      title: "The Study",
      link: "/the-study",
    },
    // {
    //   id: 5,
    //   title: "About Us",
    //   link: "/",
    // },
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
  return (
    <div className={classes.footerMainDiv}>
      <div className="container pt-4 pb-4">
        <div className="d-flex flex-column flex-md-row">
          <div className="col-12 col-md-5 d-flex flex-column">
            <h6 className={classes.footerLogoText}>TRESS</h6>
            {/* <p>
              eu, excepteur nisl, sit congue, exercitation occaecat nullam
              bibendum ut risus hac laoreet lorem lorem, orci. nulla
            </p> */}
            <label style={{ color: "#000", fontSize: "17px", fontWeight: 900 }}>
              www.tresshaircompany.com
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
              <a href="https://m.facebook.com/tresshairco/" target="_blank">
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
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/tresshairco/?hl=en"
              >
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
              </a>
              <a
                target="_blank"
                href="https://www.tiktok.com/@tresshairco?_d=secCgsIARCbDRgBIAIoARI%2BCjxu4Vx7v%2Bs1CCvPl4IHdcMd5wYdcRQvkVHInueZc9EEJfcJRt3tl4whCP4u8u8BIKJjkQaUPpomorbK4qgaAA%3D%3D&language=en&sec_uid=MS4wLjABAAAA-yoQWBr3xqdeRnMhvAlMQFfZAajh4ADpyKoN1FkJG7HbTEgrAYKsgnrLaq0GDpgO&sec_user_id=MS4wLjABAAAA-yoQWBr3xqdeRnMhvAlMQFfZAajh4ADpyKoN1FkJG7HbTEgrAYKsgnrLaq0GDpgO&share_author_id=6895030289823695877&share_link_id=EDD6B1AF-AF6B-425A-B226-7CEC5DEB57C8&tt_from=sms&u_code=dfec0mbl341b79&user_id=6895030289823695877&utm_campaign=client_share&utm_medium=ios&utm_source=sms&source=h5_m
                "
              >
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
                      class={[`fab`, `fa-tiktok`, classes.socialIcon].join(" ")}
                    ></i>
                  </div>
                </div>
              </a>
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
          {/* <div className="col-12 col-md-4 d-flex flex-column">
            <h6 className={classes.footerSubscribeFormHeading}>Subscribed</h6>
            <input
              placeholder="Enter your email here"
              type="text"
              className={classes.footerSubscribeInput}
            />
            <div className="d-flex justify-content-end mt-3">
              <label
                className={[
                  `text-center`,
                  classes.footerSubscribeSubmitButton,
                ].join(" ")}
              >
                Submit
              </label>
            </div>
          </div> */}
          <div className="col-12 col-md-4 d-flex flex-column">
            <h6 className={classes.footerSubscribeFormHeading}>
              <label
                className={[
                  `text-center`,
                  classes.footerSubscribeSubmitButton,
                ].join(" ")}
              >
                <a
                  // style={{ color: "#f1af43" }}
                  className={classes.sendEmailButton}
                  href="mailto:tress@tresshaircompany.com"
                >
                  Contact Us
                </a>
              </label>
            </h6>
            <div className="mt-3">
              <p>Have any questions or feedback? Let us know!</p>
            </div>
            {/* <input
              placeholder="Enter your email here"
              type="text"
              className={classes.footerSubscribeInput}
            /> */}
            {/* <div className="d-flex mt-3">
              <label
                className={[
                  `text-center`,
                  classes.footerSubscribeSubmitButton,
                ].join(" ")}
              >
                <a
                  // style={{ color: "#f1af43" }}
                  className={classes.sendEmailButton}
                  href="mailto:tress@tresshaircompany.com"
                >
                  Contact Us
                </a>
              </label>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
