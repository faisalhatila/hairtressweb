import classes from "./FourthQuestion.module.css";
import React, { useState } from "react";
import Swal from "sweetalert2";
import HairProcessing from "./HairProcessing.jpg";
import HairProcessing2 from "./HairProcessing2.jpg";
import HairProcessing3 from "./HairProcessing3.jpg";
import LowPorosity from "./LowPorosity.png";
import MediumPorosity from "./MediumPorosity.png";
import HighPorosity from "./HighPorosity.png";

const FourthQuestion = (props) => {
  const [selectStyle, setselectStyle] = useState();
  const hairStyles = [
    {
      id: 1,
      title: "Low porosity",
      image: LowPorosity,
      answer: 1,
    },
    {
      id: 2,
      title: "Medium porosity",
      image: MediumPorosity,
      answer: 2,
    },
    {
      id: 3,
      title: "High porosity",
      image: HighPorosity,
      answer: 3,
    },
  ];
  const handleSelectedStyle = (selectStyle) => {
    props.handleFourthAnswer(selectStyle.answer);
    setselectStyle(selectStyle.id);
  };
  const handleNextButton = () => {
    if (!selectStyle) {
      Swal.fire({
        title: "Error",
        text: "Please select porosity",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      props.next();
    }
  };
  return (
    <div className={classes.firstQuestionMainDiv}>
      <div className={[`pt-5`, `pb-4`, classes.questionContainer].join(" ")}>
        <h2
          className={[`text-center`, `noMarginBottom`, classes.question].join(
            " "
          )}
        >
          4. WHAT IS YOUR HAIR POROSITY?
        </h2>
        <div className="container">
          <hr style={{ maxWidth: "70%", marginTop: 0 }} />
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ transform: "translateY(-14px)" }}
        >
          <div className="row justify-content-center" style={{ flex: 1 }}>
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
                  title="lorem lorem"
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
                        style={{ maxWidth: "210px", maxHeight: "280px" }}
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

export default FourthQuestion;
