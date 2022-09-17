import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authReducer";

const Header = () => {
  const navigate = useNavigate();
  const islogin = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    localStorage.removeItem("idToken");
    dispatch(authActions.logout());
    navigate("/login");
  };

  return (
    <div className="header">
      {islogin && <span>Welcome to Expense tracker</span>}
      {!islogin && (
        <Link to="/login">Login</Link>
      )}
      {islogin && (
        <button onClick={logOutHandler}>Logout</button>
      )}
    </div>
  );
};

export default Header;
