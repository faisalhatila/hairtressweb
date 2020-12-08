import classes from "./ThirdQuestion.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import LowDensity from "./LowDensity.png";
import MediumDensity from "./MediumDensity.png";
import HighDensity from "./HighDensity.png";
const ThirdQuestion = (props) => {
  const [selectStyle, setselectStyle] = useState();
  const hairStyles = [
    {
      id: 1,
      title: "Small",
      image: LowDensity,
      answer: 1,
    },
    {
      id: 2,
      title: "Medium",
      image: MediumDensity,
      answer: 2,
    },
    {
      id: 3,
      title: "Large",
      image: HighDensity,
      answer: 3,
    },
  ];
  const handleSelectedStyle = (selectStyle) => {
    props.handleThirdAnswer(selectStyle.answer);
    setselectStyle(selectStyle.id);
  };
  const handleNextButton = () => {
    if (!selectStyle) {
      Swal.fire({
        title: "Error",
        text: "Please select density level",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      props.next();
    }
  };
  return (
    <div className={classes.secondQuestionMainDiv}>
      <div className={[`pt-5`, `pb-4`, classes.questionContainer].join(" ")}>
        <h2
          className={[`text-center`, `noMarginBottom`, classes.question].join(
            " "
          )}
        >
          3. WHAT IS YOUR HAIR DENSITY LEVEL?
        </h2>
        <div className="container">
          <hr style={{ maxWidth: "70%", marginTop: 0 }} />
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "635px", transform: "translateY(-45px)" }}
        >
          <div className="row justify-content-center">
            {hairStyles.map((style, i) => {
              return (
                <div
                  className={[
                    `col-12`,
                    `col-md-4`,
                    `d-flex`,
                    `justify-content-center`,
                    `flex-column`,
                    `align-items-center`,
                    `mt-4`,
                    classes.hairStyleDiv,
                  ].join(" ")}
                  key={i}
                  onClick={() => handleSelectedStyle(style)}
                >
                  <div className={classes.styleWrapperDiv}>
                    <div className="d-flex justify-content-center">
                      {style.id === selectStyle && (
                        <div
                          className={[
                            `d-flex`,
                            `justify-content-center`,
                            `align-items-center`,
                            classes.selectOverlay,
                          ].join(" ")}
                        >
                          <i class="fas fa-check"></i>
                        </div>
                      )}
                      <img
                        alt={style.title}
                        src={style.image}
                        className={classes.hairImage}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <label
          onClick={handleNextButton}
          className={[`text-center`, classes.nextButton].join(" ")}
        >
          NEXT
        </label>
      </div>
    </div>
  );
};

export default ThirdQuestion;
