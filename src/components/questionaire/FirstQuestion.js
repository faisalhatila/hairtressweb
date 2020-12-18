import classes from "./FirstQuestion.module.css";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Img1 from "./1A1B.png";
import Img2 from "./1C.png";
import Img3 from "./2A.png";
import Img4 from "./2B.png";
import Img5 from "./2C.png";
import Img6 from "./3A.png";
import Img7 from "./3B.png";
import Img8 from "./3C.png";
import Img9 from "./4A.png";
import Img10 from "./4B.png";
import Img11 from "./4C.png";
const FirstQuestion = (props) => {
  const [selectStyle, setselectStyle] = useState();
  const hairStyles = [
    {
      id: 10,
      title: "Straight",
      image: Img1,
      answer: 1,
      label: "1A/1B",
    },
    {
      id: 11,
      title: "Straight with Body",
      image: Img2,
      answer: 2,
      label: "1C",
    },
    {
      id: 1,
      title: "Wavy Swavy",
      image: Img3,
      answer: 3,
      label: "2A",
    },
    {
      id: 2,
      title: "Wavy Curvy",
      image: Img4,
      answer: 4,
      label: "2B",
    },
    {
      id: 3,
      title: "Wavy Whirly",
      image: Img5,
      answer: 5,
      label: "2C",
    },
    {
      id: 4,
      title: "Curly Twirly",
      image: Img6,
      answer: 6,
      label: "3A",
    },
    {
      id: 5,
      title: "Curly Spirally",
      image: Img7,
      answer: 7,
      label: "3B",
    },
    {
      id: 6,
      title: "Curly Kinky",
      image: Img8,
      answer: 8,
      label: "3C",
    },
    {
      id: 7,
      title: "Kinky Coily",
      image: Img9,
      answer: 9,
      label: "4A",
    },
    {
      id: 8,
      title: "Kinky Crimpy",
      image: Img10,
      answer: 10,
      label: "4B",
    },
    {
      id: 9,
      title: "Kinky Ziggly",
      image: Img11,
      answer: 11,
      label: "4C",
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
          style={{ transform: "translateY(-14px)" }}
        >
          <div className="row pt-5" style={{ flex: 1 }}>
            {hairStyles.splice(0, 2).map((style, i) => {
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
                      <img
                        alt={style.title}
                        src={style.image}
                        className={classes.image}
                      />
                    </div>
                    {/* <div className="d-flex justify-content-center">
                      <label
                        className={[`pt-3`, classes.optionTitle].join(" ")}
                      >
                        {style.title}
                      </label>
                    </div> */}
                    <div className="d-flex justify-content-center">
                      <label
                        className={[`pt-3`, classes.optionTitle].join(" ")}
                      >
                        {style.label}
                      </label>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* {hairStyles.map((style, i) => {
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
                      <img alt={style.title} src={style.image} className={classes.image} />
                    </div>
                    // <div className="d-flex justify-content-center">
                    //   <label
                    //     className={[`pt-3`, classes.optionTitle].join(" ")}
                    //   >
                    //     {style.title}
                    //   </label>
                    // </div>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ transform: "translateY(-14px)" }}
        >
          <div className="row pb-5" style={{ flex: 1 }}>
            {hairStyles.splice(0, 11).map((style, i) => {
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
                      <img
                        alt={style.title}
                        src={style.image}
                        className={classes.image}
                      />
                    </div>
                    {/* <div className="d-flex justify-content-center">
                      <label
                        className={[`pt-3`, classes.optionTitle].join(" ")}
                      >
                        {style.title}
                      </label>
                    </div> */}
                    <div className="d-flex justify-content-center">
                      <label
                        className={[`pt-3`, classes.optionTitle].join(" ")}
                      >
                        {style.label}
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
