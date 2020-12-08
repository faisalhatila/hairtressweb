import React, { Component, useState } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./custom.css";
import { Link } from "react-router-dom";
import { useAuth } from "../shared/hooks/auth-hooks";
import { useHttpClient } from "../shared/hooks/http-hook";
import { useHistory } from "react-router-dom";
import userIcon from "./user.svg";
const Navbar = () => {
  const history = useHistory();
  const myData = JSON.parse(localStorage.getItem("userDatas"));
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { userId, token } = useAuth();

  const [mobNav, setMobNav] = useState(false);
  const handleSearchIconClick = () => {
    document.getElementById("mobileNavHeader1").classList.add("d-none");
    document.getElementById("mobileNavHeader2").classList.add("d-none");
    document.getElementById("searchBarContainer").classList.remove("d-none");
  };
  const handleCloseIconClick = () => {
    document.getElementById("mobileNavHeader1").classList.remove("d-none");
    document.getElementById("mobileNavHeader2").classList.remove("d-none");
    document.getElementById("searchBarContainer").classList.add("d-none");
  };
  const handleClick = () => {
    if (!mobNav) {
      setMobNav(true);
      // this.setState({
      //   mobileNav: true,
      // });
      document.body.classList.add("mobile-nav-active");
      document.getElementById("mobile-body-overlay").classList.remove("d-none");
      document.getElementById("mobile-body-overlay").classList.add("d-block");
      document.getElementById("toggleButton").classList.remove("fa-bars");
      document.getElementById("toggleButton").classList.add("fa-times");
    } else {
      setMobNav(false);
      document.body.classList.remove("mobile-nav-active");
      document.getElementById("mobile-body-overlay").classList.add("d-none");
      document
        .getElementById("mobile-body-overlay")
        .classList.remove("d-block");
      document.getElementById("toggleButton").classList.add("fa-bars");
      document.getElementById("toggleButton").classList.remove("fa-times");
    }
  };
  const handleLogout = () => {
    Swal.fire({
      title: "Do you want to logout?",
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: `Logout`,
      confirmButtonColor: "#722526",
      denyButtonText: `Cancel`,
      denyButtonColor: "#f1af43",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        localStorage.removeItem("userData");
        localStorage.removeItem("userDatas");
        // Swal.fire("Logged out !", "", "success");
        Swal.fire({
          title: "Logged out !",
          showDenyButton: false,
          // showCancelButton: true,
          confirmButtonText: `Ok`,
          confirmButtonColor: "#722526",
          // denyButtonText: `Cancel`,
          // denyButtonColor: "#f1af43",
        });
        history.go("/");
        history.push("/");
      } else if (result.isDenied) {
        // Swal.fire("Logging out cancelled", "", "info");
        Swal.fire({
          title: "Logging out cancelled",
          // showDenyButton: true,
          // showCancelButton: true,
          // confirmButtonText: `Logout`,
          confirmButtonColor: "#722526",
          // denyButtonText: `Cancel`,
        });
      }
    });
  };
  return (
    <div className="navbarThirdRowContainer">
      <div
        id="navBarThirdRow"
        className="align-items-center navbarThirdRow row justify-content-between"
      >
        <div
          id="mobileNavHeader1"
          className="navbarThirdRowCol1 col-11 col-lg-2 pl-lg-0 pt-3 pb-3"
        >
          <div className="d-flex">
            <img
              src="assets/img/relevant/navbar/toggle.svg"
              className="d-none d-md-block mr-5"
            />
            <Link to="/">
              <h3 className="noMargin logoText noMarginBottom">TRESS</h3>
            </Link>
          </div>
          {/* <img alt="Logo" src="assets/img/logo/logo.png" /> */}
        </div>
        <div id="mobileNavHeader2" className="col-6 d-lg-none p-0">
          <div className="row justify-content-end pr-2 align-items-center">
            <button
              type="button"
              onClick={handleClick}
              id="mobile-nav-toggle"
              style={{ border: "none", background: "transparent" }}
            >
              <i
                id="toggleButton"
                className="fa fa-bars"
                aria-hidden="true"
                style={{
                  color: "#fff",
                  fontSize: "25px",
                  transform: "translateY(2px)",
                }}
              />
            </button>
          </div>
        </div>

        <div className="navbarThirdRowCol2">
          <div
            id="mobile-body-overlay"
            className="d-none"
            style={{
              width: "100%",
              height: "100%",
              zIndex: "997",
              top: 0,
              left: 0,
              position: "fixed",
              background: "rgba(0, 0, 0, 0.7)",
            }}
          />
          {/* <div className="d-flex flex-column pt-3"> */}
          <div className="pt-2 pb-0 pb-md-4">
            <nav
              id="nav-menu-container"
              style={{ transform: "translateX(-50px)" }}
            >
              {/* <nav id="nav-menu-container" > */}
              <ul class="nav-menu">
                <li class="navbarItems">
                  <Link to="/" className="tressNavItems">
                    HOME
                  </Link>
                </li>
                <li class="navbarItems">
                  <Link to="/" className="tressNavItems">
                    ABOUT US
                  </Link>
                </li>
                <li className="navbarItems">
                  <Link to="/the-study" className="tressNavItems">
                    CRAFT
                  </Link>
                </li>
                <li className="navbarItems">
                  <Link to="/recommeded-product" className="tressNavItems">
                    THE PRODUCTS
                  </Link>
                </li>
                <li className="navbarItems">
                  {/* <Link to="/" className="tressNavItems">
                    THE CRAFTS
                  </Link> */}
                </li>
                <li className="navbarItems">
                  <Link to="/" className="tressNavItems">
                    THE PROS
                  </Link>
                </li>

                <li className="navbarItems">
                  <Link to="/the-study" className="tressNavItems">
                    THE STUDY
                  </Link>
                </li>

                <li className="navbarItems">
                  <Link to="/questionaire" className="tressNavItems">
                    QUIZ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* </div>{" "} */}
          <nav id="mobile-nav">
            <ul className="" style={{ touchAction: "pan-y" }}>
              <li>
                <Link to="/">HOME</Link>
              </li>
              {/* <li>
                                <Link to="/">THE CRAFTS</Link>
                            </li>
                            <li>
                                <Link to="/">THE PROS</Link>
                            </li> */}
              <li>
                <Link to="/recommeded-product">THE PRODUCTS</Link>
              </li>
              <li>
                <Link to="/the-study">THE STUDY</Link>
              </li>
              <li>
                <Link to="/questionaire">QUIZ</Link>
              </li>
              {/* <li>
                <Link to="/cart">
                  My Cart
                  <i class="fas fa-shopping-bag pl-2 redFont" />
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
        <div className="d-none d-md-flex justify-content-end mr-2">
          <img className="mr-3" alt="user" src={userIcon} />
          {/* <label
            style={{ fontWeight: 900, color: "#fff" }}
            className="noMarginBottom"
          >
            {token && myData ? myData.userFirstName : "Login"} |
          </label> */}
          {token && myData ? (
            <Link to="/profile">
              <label
                style={{ color: "#fff", cursor: "pointer" }}
                className="noMarginBottom"
              >
                {myData ? myData.userFirstName + " | " : null}
              </label>
            </Link>
          ) : (
            <Link to="/login">
              <label
                style={{ color: "#fff", cursor: "pointer" }}
                className="noMarginBottom"
              >
                Login |
              </label>
            </Link>
          )}
          {!token ? (
            <Link to="/sign-up">
              <label
                style={{ color: "#F1AF43", cursor: "pointer" }}
                className="noMarginBottom"
              >
                &nbsp;SIGNUP
              </label>
            </Link>
          ) : (
            <label
              style={{ color: "#F1AF43", cursor: "pointer" }}
              className="noMarginBottom"
              onClick={handleLogout}
            >
              &nbsp;Logout
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
