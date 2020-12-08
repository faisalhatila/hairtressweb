import classes from "./SecQuestion.module.css";
import React, { useState } from "react";
import Swal from "sweetalert2";

const SecQuestion = (props) => {
  const [selectStyle, setselectStyle] = useState();
  const hairStyles = [
    {
      id: 1,
      title: "Small",
      image: "assets/img/relevant/quiz2/Small.png",
      answer: 1,
    },
    {
      id: 2,
      title: "Medium",
      image: "assets/img/relevant/quiz2/Medium.png",
      answer: 2,
    },
    {
      id: 3,
      title: "Large",
      image: "assets/img/relevant/quiz2/Long.png",
      answer: 3,
    },
  ];
  const handleSelectedStyle = (selectStyle) => {
    props.handleSecAnswer(selectStyle.answer);
    setselectStyle(selectStyle.id);
  };
  const handleNextButton = () => {
    if (!selectStyle) {
      Swal.fire({
        title: "Error",
        text: "Please select hair length",
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
          2. WHAT IS YOUR HAIR LENGTH?
        </h2>
        <div className="container">
          <hr style={{ maxWidth: "70%", marginTop: 0 }} />
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "635px", transform: "translateY(-14px)" }}
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

export default SecQuestion;
