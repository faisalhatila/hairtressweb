import classes from "./FirstQuestion.module.css";
import React, { useState } from "react";
import Swal from "sweetalert2";
const FirstQuestion = (props) => {
  const [selectStyle, setselectStyle] = useState();
  const hairStyles = [
    {
      id: 10,
      title: "Straight",
      image: "assets/img/relevant/quiz1/1A-1B.png",
      answer: 1,
    },
    {
      id: 11,
      title: "Straight with Body",
      image: "assets/img/relevant/quiz1/1C.png",
      answer: 2,
    },
    {
      id: 1,
      title: "Wavy Swavy",
      image: "assets/img/relevant/quiz1/2A.png",
      answer: 3,
    },
    {
      id: 2,
      title: "Wavy Curvy",
      image: "assets/img/relevant/quiz1/2B.png",
      answer: 4,
    },
    {
      id: 3,
      title: "Wavy Whirly",
      image: "assets/img/relevant/quiz1/2C.png",
      answer: 5,
    },
    {
      id: 4,
      title: "Curly Twirly",
      image: "assets/img/relevant/quiz1/3A.png",
      answer: 6,
    },
    {
      id: 5,
      title: "Curly Spirally",
      image: "assets/img/relevant/quiz1/3B.png",
      answer: 7,
    },
    {
      id: 6,
      title: "Curly Kinky",
      image: "assets/img/relevant/quiz1/3C.png",
      answer: 8,
    },
    {
      id: 7,
      title: "Kinky Coily",
      image: "assets/img/relevant/quiz1/4A.png",
      answer: 9,
    },
    {
      id: 8,
      title: "Kinky Crimpy",
      image: "assets/img/relevant/quiz1/4B.png",
      answer: 10,
    },
    {
      id: 9,
      title: "Kinky Ziggly",
      image: "assets/img/relevant/quiz1/4C.png",
      answer: 11,
    },
  ];
  const handleSelectedStyle = (selectStyle) => {
    props.handleFirstAnswer(selectStyle.answer);
    setselectStyle(selectStyle.id);
  };
  const handleNextButton = () => {
    if (!selectStyle) {
      Swal.fire({
        title: "Error",
        text: "Please select texture",
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
          1. WHAT IS YOUR TEXTURE?
        </h2>
        <div className="container">
          <hr style={{ maxWidth: "70%", marginTop: 0 }} />
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "635px", transform: "translateY(-14px)" }}
        >
          <div className="row pt-5 pb-5">
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
                    // `mt-4`,
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
                      <img alt={style.title} src={style.image} />
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

export default FirstQuestion;
