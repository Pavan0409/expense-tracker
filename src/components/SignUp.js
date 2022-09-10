import React, { useRef } from "react";
import "./SignUp.css";

const SignUp = () => {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const inputConfirmPasswordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = inputEmailRef.current.value;
    const enteredPassword = inputPasswordRef.current.value;

    if (enteredPassword !== inputConfirmPasswordRef.current.value) {
      alert("Password should be same");
      return;
    }
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEyT2fsRkG4dMvDlT-PAlCUi7vZzqHQ88",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        header: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        alert("Successfully Registered");
        console.log("Succcessfully Registered");
      } else {
        return res.json().then((data) => {
          alert("datta.error.message");
        });
      }
    });
  };

  return (
    <div className="signUpBody">
      <form onSubmit={submitHandler} className="form">
      <h1>SignUp</h1>
        <div>
          <input
            type="email"
            placeholder="Email"
            required
            ref={inputEmailRef}
            autoComplete='on'
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            required
            ref={inputPasswordRef}
            autoComplete='on'
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            required
            ref={inputConfirmPasswordRef}
            autoComplete='on'
          />
        </div>
        <div>
          <button className="signUpBtn">SignUp</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
