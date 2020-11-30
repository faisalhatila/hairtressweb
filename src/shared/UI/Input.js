import classes from "./Input.module.css";
import React, { useReducer, useEffect } from "react";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};
const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    touched: false,
  });

  const { onInputChange, id, setField } = props;

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(id, inputState.value, inputState.isValid);
    }
  }, [inputState, onInputChange, id]);

  const textChangeHandler = (event) => {
    const text = event.target.value;
    if (setField) setField(text);
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }
    dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
    console.log(text);
  };
  const lostFocusHandler = () => {
    dispatch({ type: INPUT_BLUR });
  };

  return (
    <div>
      <input
        type={props.type}
        className={classes.loginInputField}
        placeholder={props.placeholder}
        onBlur={lostFocusHandler}
        onChange={textChangeHandler}
        disabled={props.disabled}
        value={props.fieldValue}
      />
      {!inputState.isValid && inputState.touched && (
        <p style={{ color: "red" }} className="noMarginBottom">
          {" "}
          {props.errorText}
        </p>
      )}
    </div>
  );
};

export default Input;
