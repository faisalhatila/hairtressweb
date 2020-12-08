import classes from "./Login.module.css";
import React, { useCallback, useContext, useReducer, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useHttpClient } from "../shared/hooks/http-hook";
import { AuthContext } from "../shared/context/index";
import { useHistory } from "react-router-dom";
import Input from "../shared/UI/Input";
import LoadingSpinner from "../shared/UI/LoadingSpinner";
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
const LoginContainer = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    console.log("email", email);
    email.toLowerCase();
    //   console.log(
    //     "formState.inputValues.email.length",
    //     formState.inputValues.email.length
    //   );
    //   console.log(
    //     "formState.inputValues.password.length",
    //     formState.inputValues.password.length
    //   );
    //   if (email.length <= 0 || password.length <= 0) {
    //     Swal.fire({
    //       title: "Error",
    //       text: "Please fill the form",
    //       icon: "error",
    //       confirmButtonText: "Ok",
    //       confirmButtonColor: "#722526",
    //     });
    //   } else {
    //     console.log("clicked");
    //     try {
    //       const responseData = await sendRequest(
    //         `${process.env.REACT_APP_BACKEND_URL}/login`,
    //         "POST",
    //         {
    //           "Content-Type": "application/json",
    //         },
    //         JSON.stringify({
    //           email: email,
    //           password: password,
    //         })
    //       );
    //       auth.login(responseData.userId, responseData.token);
    //       history.go("/");
    //       // history.push("/");
    //       console.log("userResponseData", responseData);
    //       localStorage.setItem(
    //         "userDatas",
    //         JSON.stringify({
    //           userFirstName: responseData.fname,
    //           userLastName: responseData.lname,
    //           userEmail: responseData.email,
    //           // userId: responseData.userId,
    //           // token: responseData.token,
    //         })
    //       );
    //       // console.log("res", responseData);
    //     } catch (err) {
    //       Swal.fire({
    //         title: "Error",
    //         text: err.message,
    //         icon: "error",
    //         confirmButtonText: "Ok",
    //         confirmButtonColor: "#722526",
    //       });
    //       console.log("error", err.message);
    //     }
    //   }
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
              LOG IN
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
              Not a member yet?
              <Link to="/sign-up">
                <span
                  style={{
                    textDecoration: "underline",
                    color: "rgb(142, 80, 81)",
                  }}
                >
                  Sign Up here
                </span>
              </Link>
            </label>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className={[`d-flex`, `flex-column`].join(" ")}>
              <label className={[`flex-column`].join(" ")}>Email *</label>
              {/* <input className={classes.loginInputField} type="text" /> */}
              <Input
                id="email"
                type="text"
                // placeholder="Enter Email"
                onInputChange={inputChangeHandler}
                email
                required
                errorText="Please enter a valid email!"
                setField={setEmail}
              />
            </div>
            <div className={[`d-flex`, `flex-column`, `mt-4`].join(" ")}>
              <label className={[`flex-column`].join(" ")}>Password</label>
              {/* <input className={classes.loginInputField} type="password" /> */}
              <Input
                id="password"
                type="password"
                // placeholder="Enter Password"
                onInputChange={inputChangeHandler}
                required
                errorText="Please enter a valid password!"
                minLength={6}
                setField={setPassword}
              />
            </div>
            <div className={[`d-flex`, `flex-column`, `mt-4`].join(" ")}>
              {!isLoading ? (
                <button className={classes.loginButton} type="submit">
                  LOGIN
                </button>
              ) : (
                <div className="d-flex justify-content-center">{load}</div>
              )}
            </div>
            <div
              className={[
                `d-flex`,
                `justify-content-center`,
                classes.formSuggestionLabelDiv,
              ].join(" ")}
            >
              <Link to="/reset-password">
                <label
                  style={{
                    textDecoration: "underline",
                    color: "rgb(142, 80, 81)",
                    cursor: "pointer",
                  }}
                  className={[`noMarginBottom`, `text-center`].join(" ")}
                >
                  Forgot password?
                </label>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
