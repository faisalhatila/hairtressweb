// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// class LoginForm extends Component {
//   state = {};
//   render() {
//     return (
//       <div
//         style={{
//           backgroundImage:
//             "linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(assets/img/loginCover.jpg)",
//         }}
//         className="login-container"
//       >
//         <div className="container">
//           <div className="loginScreenRow1">
//             <div className="loginPageFormDiv col-12 col-lg-4 col-md-6 offset-lg-4 offset-md-3 mt-3">
//               <h2 className="text-center noMargin">
//                 <strong>Log In</strong>
//               </h2>
//               <p className="text-center noMargin">
//                 New to the site? <span style={{ color: "orange" }}>Signup</span>
//               </p>
//               <form className="mt-2">
//                 <input
//                   type="text"
//                   placeholder="Email"
//                   className="loginFormInput mt-3"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Password"
//                   className="loginFormInput mt-3"
//                 />
//                 <div className="mt-4">
//                   <label className="noMargin loginFormForgetPasswordLabel">
//                     Forget password?
//                   </label>
//                 </div>
//                 <div className="mt-3">
//                   <button
//                     type="submit"
//                     // onClick={handleLoginSubmit}
//                     class="loginFormSubmitButton"
//                   >
//                     Log in
//                   </button>
//                 </div>
//               </form>
//               <div id="orTitleDiv2" className="mt-3">
//                 <label className="orTitle2">or log in with</label>
//               </div>
//               <div className="d-flex justify-content-center">
//                 <i class="fab fa-facebook-f mr-2 facebookIcon"></i>
//                 <i class="fab fa-google googleIcon"></i>
//               </div>
//               <div className="mt-3">
//                 <p className="noMargin joinCommunity text-center">
//                   Join the site's community.
//                   <span className="underLineText pl-2">Read more</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default LoginForm;

import React from "react";

const LoginForm = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(assets/img/loginCover.jpg)",
      }}
      className="login-container"
    >
      <div className="container">
        <div className="loginScreenRow1">
          <div className="loginPageFormDiv col-12 col-lg-4 col-md-6 offset-lg-4 offset-md-3 mt-3">
            <h2 className="text-center noMargin">
              <strong>Log In</strong>
            </h2>
            <p className="text-center noMargin">
              New to the site? <span style={{ color: "orange" }}>Signup</span>
            </p>
            <form className="mt-2">
              <input
                type="text"
                placeholder="Email"
                className="loginFormInput mt-3"
              />
              <input
                type="text"
                placeholder="Password"
                className="loginFormInput mt-3"
              />
              <div className="mt-4">
                <label className="noMargin loginFormForgetPasswordLabel">
                  Forget password?
                </label>
              </div>
              <div className="mt-3">
                <button
                  type="submit"
                  // onClick={handleLoginSubmit}
                  class="loginFormSubmitButton"
                >
                  Log in
                </button>
              </div>
            </form>
            <div id="orTitleDiv2" className="mt-3">
              <label className="orTitle2">or log in with</label>
            </div>
            <div className="d-flex justify-content-center">
              <i class="fab fa-facebook-f mr-2 facebookIcon"></i>
              <i class="fab fa-google googleIcon"></i>
            </div>
            <div className="mt-3">
              <p className="noMargin joinCommunity text-center">
                Join the site's community.
                <span className="underLineText pl-2">Read more</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
