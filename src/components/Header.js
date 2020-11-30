import React from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
  return (
    <div
      className="headerDiv"
      style={{ position: "fixed", minWidth: "100vw", zIndex: 10 }}
    >
      <Navbar />
    </div>
  );
};

export default Header;
