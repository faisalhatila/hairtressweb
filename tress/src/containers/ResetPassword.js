import classes from "./Login.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useHttpClient } from "../shared/hooks/http-hook";
import { AuthContext } from "../shared/context/index";
import { useHistory } from "react-router-dom";
import Input from "../shared/UI/Input";
import LoadingSpinner from "../shared/UI/LoadingSpinner";
import { useParams } from "react-router-dom";
const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updateValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updateValidities) {
      updatedFormIsValid = updatedFormIsValid && updateValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updateValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};
const ResetPassword = () => {
  const token = useParams().token;
  const [errorAlert, setErrorAlert] = useState(false);
  const [linkExpired, setLinkExpired] = useState(false);
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [formStep, setFormStep] = useState(1);
  const auth = useContext(AuthContext);
  const history = useHistory();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });
  useEffect(() => {
    if (token) setFormStep(2);
  }, [token]);
  useEffect(() => {
    const dashboard = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/check-token/${token}`,
          "POST",
          {
            "Content-Type": "application/json",
          },
          JSON.stringify({
            token,
          })
        );
      } catch (err) {
        setErrorAlert(true);
        setLinkExpired(true);
      }
    };
    if (formStep === 2) dashboard();
  }, [formStep, sendRequest]);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging");
    if (formStep === 1) {
      if (email.length <= 0) {
        Swal.fire({
          title: "Error",
          text: "Please enter email",
          icon: "error",
          confirmButtonText: "Ok",
        });
      } else {
        try {
          const responseData = await sendRequest(
            `${process.env.REACT_APP_BACKEND_URL}/reset`,
            "POST",
            {
              "Content-Type": "application/json",
            },
            JSON.stringify({
              email: email,
            })
          );
          console.log("responseData", responseData);
          Swal.fire({
            title: "Sent",
            text: responseData.message,
            icon: "success",
            confirmButtonText: "Ok",
          });
          setSubmitted(true);
        } catch (err) {
          Swal.fire({
            title: "Error",
            text: err,
            icon: "error",
            confirmButtonText: "Ok",
          });
          // setErrorAlert(true);
        }
      }
    } else if (formStep === 2) {
      if (password.length <= 0) {
        Swal.fire({
          title: "Error",
          text: "Please enter password",
          icon: "error",
          confirmButtonText: "Ok",
        });
      } else {
        try {
          const responseData = await sendRequest(
            `${process.env.REACT_APP_BACKEND_URL}/reset-password/${token}`,
            "POST",
            {
              "Content-Type": "application/json",
            },
            JSON.stringify({
              password: password,
            })
          );
          console.log("responseData", responseData);
          Swal.fire({
            title: "Done",
            text: responseData.message,
            icon: "success",
            confirmButtonText: "Ok",
          });
          history.push("/");
          history.go("/");
        } catch (err) {
          Swal.fire({
            title: "Error",
            text: err,
            icon: "error",
            confirmButtonText: "Ok",
          });
          // setErrorAlert(true);
        }
      }
    }
  };
  const load = <LoadingSpinner />;
  return (
    <div
      className={[
        `d-flex`,
        `justify-content-center`,
        `align-items-center`,
        classes.loginFormMainContainer,
      ].join(" ")}
    >
      <div
        className={[
          `d-flex`,
          `flex-column`,
          `justify-content-between`,
          `col-12 col-md-3`,
          classes.loginFormContainer,
        ].join(" ")}
      >
        <div>
          <div className="d-flex flex-column align-items-center">
            <h1 className={[`noMarginBottom`, `text-center`].join(" ")}>
              Reset Password
            </h1>
            <div
              className="mb-3 mt-2"
              style={{
                width: "50px",
                height: "8px",
                backgroundColor: "#8E5051",
              }}
            ></div>
          </div>
          <div
            className={[
              `d-flex`,
              `justify-content-center`,
              classes.formSuggestionLabelDiv,
            ].join(" ")}
          >
            <label className={[`noMarginBottom`, `text-center`].join(" ")}>
              {"Remember Password ? "}
              <Link to="/login">
                <span
                  style={{
                    textDecoration: "underline",
                    color: "rgb(142, 80, 81)",
                    cursor: "pointer",
                  }}
                >
                  Log in here
                </span>
              </Link>
            </label>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            {formStep === 1 ? (
              <div className={[`d-flex`, `flex-column`].join(" ")}>
                <label className={[`flex-column`].join(" ")}>Email *</label>
                {/* <input className={classes.loginInputField} type="text" /> */}
                <Input
                  id="email"
                  type="text"
                  placeholder="Enter Email"
                  onInputChange={inputChangeHandler}
                  email
                  required
                  errorText="Please enter a valid email!"
                />
              </div>
            ) : null}
            {formStep === 2 ? (
              <div className={[`d-flex`, `flex-column`, `mt-4`].join(" ")}>
                <label className={[`flex-column`].join(" ")}>Password</label>
                {/* <input className={classes.loginInputField} type="password" /> */}
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  onInputChange={inputChangeHandler}
                  required
                  errorText="Please enter a valid password!"
                  minLength={6}
                  setPassword={setPassword}
                />
              </div>
            ) : null}
            <div className={[`d-flex`, `flex-column`, `mt-4`].join(" ")}>
              {!isLoading ? (
                <button className={classes.loginButton} type="submit">
                  {formStep === 1 ? "Get Link" : "Submit"}
                </button>
              ) : (
                <div className="d-flex justify-content-center">{load}</div>
              )}
            </div>
            {/* <div
              className={[
                `d-flex`,
                `justify-content-center`,
                classes.formSuggestionLabelDiv,
              ].join(" ")}
            >
              <label
                style={{ textDecoration: "underline" }}
                className={[`noMarginBottom`, `text-center`].join(" ")}
              >
                Forgot password?
              </label>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
