import React, { useState } from "react";
import { Link } from "react-router-dom";
import { head } from "lodash";
import HeaderCover from "../components/HeaderCover";
import AboutTress from "../components/home/AboutTress";
import ServiceDesc from "../components/home/ServiceDesc";
import HowItWorks from "../components/home/HowItWorks";
import classes from "./Questionaire.module.css";
import image from "./question.png";
import FirstQuestion from "../components/questionaire/FirstQuestion";
import SecQuestion from "../components/questionaire/SecQuestion";
import ThirdQuestion from "../components/questionaire/ThirdQuestion";
import HeaderCoverNew from "../components/HeaderCoverNew";
import FourthQuestion from "../components/questionaire/FourthQuestion";
import FifthQuestion from "../components/questionaire/FifthQuestion";
import { useAuth } from "../shared/hooks/auth-hooks";
import { useHttpClient } from "../shared/hooks/http-hook";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Questionaire = () => {
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);
  const { userId, token } = useAuth();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [quesStep, setQuesStep] = useState(1);
  const handleGoToNextQues = () => {
    setQuesStep(quesStep + 1);
  };
  const [firstAnswer, setFirstAnswer] = useState();
  const [secAnswer, setSecAnswer] = useState();
  const [thirdAnswer, setThirdAnswer] = useState();
  const [fourthAnswer, setFourthAnswer] = useState();
  const [fifthAnswer, setFifthAnswer] = useState();
  const [answers, setAnswers] = useState([]);
  const handleFirstAnswer = (quiz) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log("quiz1", quiz);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    setFirstAnswer(quiz);
  };
  const handleSecAnswer = (quiz) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log("quiz2", quiz);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    setSecAnswer(quiz);
  };
  const handleThirdAnswer = (quiz) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log("quiz3", quiz);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    setThirdAnswer(quiz);
  };
  const handleFourthAnswer = (quiz) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log("quiz4", quiz);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    setFourthAnswer(quiz);
  };
  const handleFifthAnswer = (quiz) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log("quiz5", quiz);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    setFifthAnswer(quiz);
  };
  error && console.log("errorssss", error);
  const handleSubmit = async (e) => {
    console.log("Clicked");
    // e.preventDefault();
    let urltoEditandAdd = "/quiz-submit";
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}${urltoEditandAdd}`,
        "POST",
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        JSON.stringify({
          userId,
          answers: {
            question_1: firstAnswer,
            question_2: secAnswer,
            question_3: thirdAnswer,
            question_4: fourthAnswer,
            question_5: fifthAnswer,
          },
        })
      );
      console.log("responseData", responseData);
      Swal.fire({
        title: "Sent",
        text: "Quiz submitted",
        icon: "success",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          history.go("/");
          history.push("/");
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Quiz</title>
      </Helmet>
      <HeaderCoverNew
        image={image}
        mainHeading="Protect your hair"
        subHeading="TELL US ABOUT YOUR HAIR"
        text="WE PROVIDE YOU SOLUTION"
      />
      <div className="container">
        <h1
          style={{ color: "#8E5051" }}
          className={[`text-center`, classes.mainHeading].join(" ")}
        >
          TRESS : HAIR QUIZ
        </h1>
        {quesStep === 1 && (
          // <FourthQuestion
          //   handleFourthAnswer={handleFourthAnswer}
          //   next={handleGoToNextQues}
          // />
          // <FifthQuestion
          //   loading={isLoading}
          //   handleSubmit={handleSubmit}
          //   handleFifthAnswer={handleFifthAnswer}
          //   next={handleGoToNextQues}
          // />
          <FirstQuestion
            handleFirstAnswer={handleFirstAnswer}
            next={handleGoToNextQues}
          />
          // <ThirdQuestion
          //   handleThirdAnswer={handleThirdAnswer}
          //   next={handleGoToNextQues}
          // />
          // <SecQuestion
          //   handleSecAnswer={handleSecAnswer}
          //   next={handleGoToNextQues}
          // />
        )}
        {quesStep === 2 && (
          <SecQuestion
            handleSecAnswer={handleSecAnswer}
            next={handleGoToNextQues}
          />
        )}
        {quesStep === 3 && (
          <ThirdQuestion
            handleThirdAnswer={handleThirdAnswer}
            next={handleGoToNextQues}
          />
        )}
        {quesStep === 4 && (
          <FourthQuestion
            handleFourthAnswer={handleFourthAnswer}
            next={handleGoToNextQues}
          />
        )}
        {quesStep === 5 && (
          <FifthQuestion
            loading={isLoading}
            handleSubmit={handleSubmit}
            handleFifthAnswer={handleFifthAnswer}
            next={handleGoToNextQues}
          />
        )}
        {/* <FourthQuestion /> */}
        {/* <FifthQuestion /> */}
      </div>
    </div>
  );
};

export default Questionaire;
