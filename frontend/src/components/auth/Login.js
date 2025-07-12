import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { FaGoogle } from "react-icons/fa";
import "./GoogleButton.css";
function Login() {
  const handleSubmit = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-container">
      <div className="login-content">
        <h1  className="head">QuestionFlow</h1>
        <p className="para">A Place to Share knowledge and better understand the world</p>
        <h3 className="love">HandCrafted with <span style={{color:"red"}}>❣</span>  by</h3>
        <h5 className="name">US</h5>
        <img
          src="data:image/png;base64,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"
          alt="logo"
        />
        <button onClick={handleSubmit} className="google-button">
        <FaGoogle className="google-icon" />
           Continue With Google
        </button>
        <p className="beta">Welcome to our beta version! </p>
        <p className="beta2">We're still fine-tuning, but we hope you enjoy the sneak peek. </p>
      </div>
    </div>
  );
}

export default Login;
