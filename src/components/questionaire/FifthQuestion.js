import classes from "./FifthQuestion.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../shared/UI/LoadingSpinner";
import Swal from "sweetalert2";
import Bleached from "./Bleached.png";
import Dyed from "./Dyed.png";
import PermRelaxer from "./Perm-Relaxer.png";
const FifthQuestion = (props) => {
  const [selectStyle, setselectStyle] = useState();
  const hairStyles = [
    {
      id: 1,
      title: "Perm/Relaxer",
      image: PermRelaxer,
      answer: 1,
    },
    {
      id: 2,
      title: "Dyed",
      image: Dyed,
      answer: 2,
    },
    {
      id: 3,
      title: "Bleached",
      image: Bleached,
      answer: 3,
    },
  ];
  const handleSelectedStyle = (selectStyle) => {
    props.handleFifthAnswer(selectStyle.answer);
    setselectStyle(selectStyle.id);
  };
  const handleNextButton = () => {
    if (!selectStyle) {
      Swal.fire({
        title: "Error",
        text: "Please select processing",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      props.handleSubmit();
    }
  };
  const load = <LoadingSpinner />;
  return (
    <div className={classes.firstQuestionMainDiv}>
      <div className={[`pt-5`, `pb-4`, classes.questionContainer].join(" ")}>
        <h2
          className={[`text-center`, `noMarginBottom`, classes.question].join(
            " "
          )}
        >
          5. WHAT IS YOUR HISTORY OF PROCESSING?
        </h2>
        <div className="container">
          <hr style={{ maxWidth: "70%", marginTop: 0 }} />
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ transform: "translateY(-45px)" }}
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
                        style={{ maxWidth: "100%" }}
                        alt={style.title}
                        src={style.image}
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <label
                        className={[`pt-3`, classes.optionTitle].join(" ")}
                      >
                        {style.title}
                      </label>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5 mb-5">
        {/* <Link to="/recommeded-product"> */}
        {!props.loading ? (
          <label
            onClick={handleNextButton}
            className={[`text-center`, classes.nextButton].join(" ")}
          >
            Submit
          </label>
        ) : (
          <div className="d-flex justify-content-center">{load}</div>
        )}

        {/* </Link> */}
      </div>
    </div>
  );
};

export default FifthQuestion;
