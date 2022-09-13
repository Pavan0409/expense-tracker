import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const PasscodeReset = () => {
  const inputResetEmailRef = useRef();
  const navigate = useNavigate();
  const resetHandler = (event) => {
    event.preventDefault();

    const enteredResetEmail = inputResetEmailRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCEyT2fsRkG4dMvDlT-PAlCUi7vZzqHQ88",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: enteredResetEmail,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          alert("Reset Link Sent");
          return res.json();
        } else {
          return res.json((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        console.log(data);
        navigate("/login");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <h2>Enter the email with which you registered</h2>
      <input type="email" placeholder="Email" required ref={inputResetEmailRef} />
      <button type="submit" onClick={resetHandler}>
        Send Link
      </button>
    </div>
  );
};

export default PasscodeReset;
