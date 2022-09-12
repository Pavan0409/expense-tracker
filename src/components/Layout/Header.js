import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("idToken");
    navigate("/login");
    props.setLogin(true);
  };

  return (
    <div className="header">
      {!props.login ? (
        <>
          <Link to="/">SignUp</Link>
          <Link to="/login">Login</Link>
        </>
      ) : (
        <>
          <button onClick={logOutHandler}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Header;
