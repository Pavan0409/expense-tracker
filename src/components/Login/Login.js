import React, { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const navigate = useNavigate();

  const loginSubmitHandler = (event) => {
    event.preventDefault();

    const enteredloginEmail = loginEmailRef.current.value;
    const enteredloginPassword = loginPasswordRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEyT2fsRkG4dMvDlT-PAlCUi7vZzqHQ88",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredloginEmail,
          password: enteredloginPassword,
          returnSecureToken: true,
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          alert("Login Success");
          console.log("Login Success", res);
          return res.json();
        } else {
          return res.json().then((data) => {
            alert(data.error.message);
            throw new Error(data.error.message)
          });
        }
      })
      .then((data) => {
        console.log(data);
        navigate("/welcome");
        // localStorage.setItem("TokenID Expense", data.idToken);
        console.log("data", data);
      }).catch((error) =>{
        alert("Something went wrong")
        console.log("Something went wrong");
      })
  };
  return (
    <div className="loginBody">
      <form onSubmit={loginSubmitHandler} className="form">
        <h4>Login</h4>
        <div>
          <input
            type="email"
            id="loginEmail"
            placeholder="Email-Id"
            required
            autoComplete="on"
            ref={loginEmailRef}
          />
        </div>
        <div>
          <input
            type="password"
            id="loginPassword"
            placeholder="Password"
            required
            autoComplete="on"
            ref={loginPasswordRef}
          />
        </div>
        <div>
          <button type="submit" className="loginBtn">
            Submit
          </button>
        </div>
        <div className="P">
          <p>
            Create account Here! <Link to="/">SignUp</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
