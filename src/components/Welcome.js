import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Expenses from "./Expenses/Expenses";
import { authActions } from "./store/authReducer"

const Welcome = () => {
  const islogin = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.login());
  }, []);

  return (
    <>
      <Expenses />
    </>
  );
};

export default Welcome;
