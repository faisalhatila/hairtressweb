import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import classes from "./Profile.module.css";
import { useAuth } from "../shared/hooks/auth-hooks";
import image from "./profileCoverImage.png";
import HeaderCoverNew from "../components/HeaderCoverNew";
import HeaderCoverProfile from "../components/HeaderCoverProfile";
import { useHttpClient } from "../shared/hooks/http-hook";
import { AuthContext } from "../shared/context/index";
import { useHistory } from "react-router-dom";
import Input from "../shared/UI/Input";
import LoadingSpinner from "../shared/UI/LoadingSpinner";
import Camera from "./Camera.png";
import AWS from "aws-sdk";
import S3FileUpload from "react-s3";
import { Helmet } from "react-helmet";
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

// import search from "./search.svg";

const Profile = () => {
  const auth = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userProfileImage, setUserProfileImage] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { userId, token } = useAuth();
  const history = useHistory();
  const myData = JSON.parse(localStorage.getItem("userDatas"));
  const [imageUpload, setimageUpload] = useState(
    "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png"
  );
  const [newImage, setNewImage] = useState(false);
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      // phone: "",
    },
    inputValidities: {
      email: false,
      firstName: false,
      lastName: false,
      address: false,
      // phone: false,
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
  error && console.log(error);
  // console.log("userId", userId);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("fname", formState.inputValues.firstName);
    console.log("lname", formState.inputValues.lastName);
    console.log("address", formState.inputValues.address);
    // console.log("phone", formState.inputValues.phone);
    if (
      formState.inputValues.firstName.length <= 0 ||
      formState.inputValues.lastName.length <= 0 ||
      formState.inputValues.address.length <= 0
      // formState.inputValues.phone.length <= 0
    ) {
      Swal.fire({
        title: "Error",
        text: "Please fill the form",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      console.log("clicked");
      let formData = new FormData();
      formData.append("userId", userId);
      formData.append("fname", firstName);
      formData.append("lname", lastName);
      formData.append("address", address);
      formData.append("picture", userProfileImage);
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/change-information`,
          "POST",
          {
            // "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
          formData
          // JSON.stringify({
          //   userId,
          //   fname: formState.inputValues.firstName,
          //   lname: formState.inputValues.lastName,
          //   address: formState.inputValues.address,
          //   // phone_number: formState.inputValues.phone,
          //   // picture:formState.inputValues.firstName,

          //   // email: formState.inputValues.email,
          //   // password: formState.inputValues.password,
          // })
        );
        console.log("responseData", responseData);
        // history.go("/");
        // history.push("/");
        Swal.fire({
          title: "Sent",
          text: "Profile Updated",
          icon: "success",
          confirmButtonText: "Ok",
        });
        console.log("userResponseData", responseData);
        localStorage.setItem(
          "userDatas",
          JSON.stringify({
            userFirstName: responseData.fname,
            userLastName: responseData.lname,
            userEmail: responseData.email,
            userPhone: responseData.phone_number,
            address: responseData.address,
            // userId: responseData.userId,
            // token: responseData.token,
          })
        );
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
  const handleUploadImage = async (e) => {
    let file = e.target.files[0];
    setUserProfileImage(file);
    setimageUpload(URL.createObjectURL(file));
    return;
    // // file = { ...file, name: file.name.replace(" ", "858585") };
    // // console.log("file", file.name.replace(" ", "858585"));
    // console.log("file", file);
    // // return;
    // const d = new Date();
    // const n = d.getTime();
    // let tempFileObj = {
    //   lastModified: file.lastModified,
    //   lastModifiedDate: file.lastModifiedDate,
    //   name: `${userId}${n}${file.name.replace(" ", "-")}`,
    //   size: file.size,
    //   type: file.type,
    //   webkitRelativePath: file.webkitRelativePath,
    // };
    // setimageUpload(URL.createObjectURL(file));
    // setNewImage(true);
    // console.log("tempFile", file);
    // const base64 = await convertToBase64(file);
    // const ID = "AKIAJP3OXKCZZTES7T4Q";
    // const SECRET = "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";
    // const BUCKET_NAME_IMAGES = "images-hairtress";
    // const BUCKET_REGION = "us-west-1";

    // const config = {
    //   bucketName: BUCKET_NAME_IMAGES,
    //   dirName: "images",
    //   region: BUCKET_REGION,
    //   accessKeyId: ID,
    //   secretAccessKey: SECRET,
    // };
    // S3FileUpload.uploadFile(base64, config)
    //   .then((data) => console.log("dataLocation", data.location))
    //   .catch((err) => console.log("error", err));
  };
  // const handleUploadImage = async (e) => {
  //   let file = e.target.files[0];
  //   setimageUpload(URL.createObjectURL(file));
  //   setNewImage(true);
  //   console.log(URL.createObjectURL(file));
  //   const base64 = await convertToBase64(file);
  //   // console.log("base64", base64);
  //   const ID = "AKIAJP3OXKCZZTES7T4Q";
  //   const SECRET = "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";
  //   const BUCKET_NAME_IMAGES = "images-hairtress";
  //   const BUCKET_REGION = "us-west-1";

  //   const config = {
  //     bucketName: BUCKET_NAME_IMAGES,
  //     dirName: "images",
  //     region: BUCKET_REGION,
  //     accessKeyId: ID,
  //     secretAccessKey: SECRET,
  //   };
  //   S3FileUpload.uploadFile(file, config)
  //     .then((data) => console.log("dataLocation", data.location))
  //     .catch((err) => console.log("error", err));
  // };
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  useEffect(() => {
    console.log("gettingData", userId, token);
    const getData = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/get-user`,
          "POST",
          {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          JSON.stringify({
            userId,
          })
        );
        console.log("userResponseData", responseData);
        setFirstName(responseData.user.fname);
        setLastName(responseData.user.lname);
        setAddress(responseData.user.address);
        setPhoneNumber(responseData.user.phone_number);
        setimageUpload(responseData.user.picture);
      } catch (err) {
        console.log("err", err);
        console.log("error", err.message);
      }
    };
    getData();
  }, [userId, token, sendRequest]);

  const load = <LoadingSpinner />;
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile</title>
      </Helmet>
      <HeaderCoverProfile image={image} />
      <div className="container">
        <div
          className={[
            `row`,
            `align-items-center`,
            `flex-column`,
            `flex-md-row`,
            classes.profileInfoRow,
          ].join(" ")}
        >
          <div className={[`col-12`, `col-md-3`].join(" ")}>
            <div className={classes.profileImageDiv}>
              <label
                htmlFor="imageUpload"
                title="Click to upload new image"
                style={{
                  cursor: "pointer",
                  // border: "solid 2px rgb(114, 37, 38, 0.9)",
                  // borderRadius: "50%",
                  display: "flex",
                }}
              >
                <div style={{ width: "100%" }}>
                  <div
                    style={{
                      backgroundImage: `url(${imageUpload})`,
                      width: "205px",
                      // minWidth: "255px",
                      height: "205px",
                      borderRadius: "50%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </div>
                <div className={classes.profileImageUploadButtonDiv}>
                  <div className={classes.profileImageUploadButton}>
                    <img src={Camera} alt="Upload" />
                    <label htmlFor="imageUpload" className="ml-2">
                      Upload
                    </label>
                  </div>
                </div>
              </label>
              <input
                type="file"
                style={{ display: "none" }}
                id="imageUpload"
                onChange={handleUploadImage}
              />
            </div>
          </div>
          <div className={[`col-12`, `col-md-6`, `col-md-3`].join(" ")}>
            <div className={classes.profileInfoDiv}>
              <h2 className="noMarginBottom">{`${firstName} ${lastName}`}</h2>
            </div>
          </div>
        </div>
        <div className={classes.profileUpdateFormDiv}>
          <div className="d-flex justify-content-center">
            <h2 className={[`noMarginBottom`, classes.formHeading].join(" ")}>
              User Detail
            </h2>
          </div>
          <form className="col-12 col-md-8 offset-md-2" onSubmit={handleSubmit}>
            <div className="d-flex flex-column mb-4">
              <label className={classes.formInputLabel}>First Name</label>
              {/* <input type="text" className={classes.formInputField} /> */}
              <Input
                id="firstName"
                type="text"
                placeholder="Enter First Name"
                onInputChange={inputChangeHandler}
                required
                errorText="Please enter a first name"
                fieldValue={firstName}
                setField={setFirstName}
              />
            </div>

            <div className="d-flex flex-column mb-4">
              <label className={classes.formInputLabel}>Last Name</label>
              {/* <input type="text" className={classes.formInputField} /> */}
              <Input
                id="lastName"
                type="text"
                placeholder="Enter Last Name"
                onInputChange={inputChangeHandler}
                required
                errorText="Please enter a last name"
                fieldValue={lastName}
                setField={setLastName}
              />
            </div>
            {/* <div className="d-flex flex-column mb-4">
              <label className={classes.formInputLabel}>Email</label>
              <input type="text" className={classes.formInputField} />
              <Input
                id="email"
                type="text"
                placeholder="Enter Email"
                onInputChange={inputChangeHandler}
                email
                required
                disabled
                errorText="Please enter a valid email!"
              />
            </div> */}
            {/* <div className="d-flex flex-column mb-4">
              <label className={classes.formInputLabel}>Phone</label>
              <Input
                id="phone"
                type="number"
                placeholder="Enter Phone No"
                onInputChange={inputChangeHandler}
                required
                errorText="Please enter a phone no"
                fieldValue={phoneNumber}
                setField={setPhoneNumber}
              />
            </div> */}
            <div className="d-flex flex-column mb-4">
              <label className={classes.formInputLabel}>Zip Code</label>
              {/* <input type="text" className={classes.formInputField} /> */}
              <Input
                id="address"
                type="text"
                placeholder="Enter Address"
                onInputChange={inputChangeHandler}
                required
                errorText="Please enter a address"
                fieldValue={address}
                setField={setAddress}
              />
            </div>
            <div className="d-flex justify-content-center">
              {!isLoading ? (
                <button type="submit" className={classes.submitButton}>
                  UPDATE
                </button>
              ) : (
                <div className="d-flex justify-content-center">{load}</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
