import React from "react";

import "./LoadingSpinner.css";

const LoadingSpinner = (props) => {
  const size = props.size ? props.size : "46px";
  const border = props.border ? props.border : "5px";
  return (
    <div
      style={{ "--size": size, "--border": border }}
      className={`${props.asOverlay && "loading-spinner__overlay"}`}
    >
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;
