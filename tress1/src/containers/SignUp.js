import React, { useState, useContext, useCallback, useReducer } from "react";
import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";
import { useHttpClient } from "../shared/hooks/http-hook";
import { AuthContext } from "../shared/context/index";
import { useHistory } from "react-router-dom";
import Input from "../shared/UI/Input";
import LoadingSpinner from "../shared/UI/LoadingSpinner";
import Swal from "sweetalert2";
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

const SignUp = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    inputValidities: {
      firstName: false,
      lastName: false,
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
    console.log("fname", formState.inputValues.firstName);
    console.log("lname", formState.inputValues.lastName);
    console.log("email", formState.inputValues.email);
    console.log("password", formState.inputValues.password);
    if (
      firstName.length <= 0 ||
      lastName.length <= 0 ||
      email.length <= 0 ||
      password.length <= 0
    ) {
      Swal.fire({
        title: "Error",
        text: "Please fill the form",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      console.log("clicked");
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/signup`,
          "POST",
          {
            "Content-Type": "application/json",
          },
          JSON.stringify({
            fname: firstName,
            lname: lastName,
            email: email,
            password: password,
          })
        );
        auth.login(responseData.userId, responseData.token);
        // history.go("/");
        history.push("/login");
        console.log(responseData);
        // console.log("res", responseData);
      } catch (err) {
        Swal.fire({
          title: "Error",
          text: err.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
        console.log("error", err.message);
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
              SIGN UP
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
              <Link to="/login">
                <span
                  style={{
                    textDecoration: "underline",
                    color: "rgb(142, 80, 81)",
                  }}
                >
                  Already have an account?
                </span>
              </Link>
            </label>
          </div>
        </div>
        <div className="mt-5 mt-md-0">
          <form onSubmit={handleSubmit}>
            <div
              className={[
                `d-flex`,
                `flex-column`,
                `flex-md-row`,
                classes.nameFieldRow,
              ].join(" ")}
            >
              <div className={[`d-flex`, `flex-column`, `mr-md-2`].join(" ")}>
                <label className={[`flex-column`].join(" ")}>First Name*</label>
                {/* <input className={classes.loginInputField} type="text" /> */}
                <Input
                  id="firstName"
                  type="text"
                  // placeholder="Enter First Name"
                  onInputChange={inputChangeHandler}
                  required
                  errorText="Please enter a first name"
                  setField={setFirstName}
                />
              </div>
              <div className={[`d-flex`, `flex-column`].join(" ")}>
                <label className={[`flex-column`].join(" ")}>Last Name *</label>
                {/* <input className={classes.loginInputField} type="text" /> */}
                <Input
                  id="lastName"
                  type="text"
                  // placeholder="Enter Last Name"
                  onInputChange={inputChangeHandler}
                  required
                  errorText="Please enter a last name"
                  setField={setLastName}
                />
              </div>
            </div>
            <div className={[`d-flex`, `flex-column`].join(" ")}>
              <label className={[`flex-column`, `mt-4`].join(" ")}>
                Email *
              </label>
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
                  SIGN UP
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

export default SignUp;
