import React, { useState } from "react";
import "../../assets/css/authenticator/auth.css";
import Logo from "../../assets/images/logo.jpg";

export default function AuthUser() {
  const [showSignInForm, setShowSignInForm] = useState(true);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const toggleForms = (event) => {
    event.preventDefault();
    setShowSignInForm(!showSignInForm);
    setShowSignUpForm(!showSignUpForm);
  };

  return (
    <div className="auth-app">
      <img src={Logo} alt="Logo" id="khw-logo" />
      <figcaption for="khw-logo" className="text-info">
        KHW
      </figcaption>
      <div>
        <p>Log In</p>
      </div>
      <div id="sign-in-form" style={{ display: showSignInForm ? "block" : "none" }}>
        <form action="">
          <label htmlFor="userName">Name</label>
          <input type="text" name="name" id="userNname" className="form-control" />
          <label htmlFor="userEmail">Email</label>
          <input type="email" name="" id="userEmail" className="form-control" />
          <button className="btn btn-dark">Log In</button>
          <div className="options">
            <p className="">
              Dont Have an Account Yet?{" "}
              <a href="#" onClick={toggleForms}>
                Sign Up
              </a>
            </p>
            <p>
              <a href="#" role="button">
                Reset password
              </a>
            </p>
          </div>
        </form>
      </div>

      <div id="sign-up-form" style={{ display: showSignUpForm ? "block" : "none" }}>
        <div>
          <p>Sign Up</p>
        </div>
        <form action="">
          <label htmlFor="userName">Name</label>
          <input type="text" name="" id="userName" className="form-control" />
          <label htmlFor="userEmail">Email</label>
          <input type="email" name="" id="userEmail" className="form-control" />
          <label htmlFor="userPassword">Password</label>
          <input type="text" name="password" id="userPassword" className="form-control" />
          <label htmlFor="userPassword">Confirm Password</label>
          <input type="text" name="password" id="userPassword" className="form-control" />
          <button className="btn btn-dark">Log In</button>
          <div className="options">
            <p className="">
              Already Have an Account?{" "}
              <a href="#" onClick={toggleForms}>
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

