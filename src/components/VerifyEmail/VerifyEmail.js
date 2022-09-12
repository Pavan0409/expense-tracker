import React, { useRef } from "react";

const VerifyEmail = () => {
  const inputOTPRef = useRef();
  const verifySubmitHandler = (event) => {
    event.preventDefault();
    const enteredOTP = inputOTPRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCEyT2fsRkG4dMvDlT-PAlCUi7vZzqHQ88",
      {
        method: "POSt",
        body: JSON.stringify({
          oobCode: enteredOTP,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        alert("Successfully verified");
        return res.json();
      } else {
        return res.json().then((data) => {
          alert(data.error.message);
        });
      }
    });
  };
  return (
    <div>
      <form onSubmit={verifySubmitHandler}>
        <label>Please enter OTP to verify Email</label>
        <input type="text" id="verify" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VerifyEmail;
