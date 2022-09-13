import React from "react";
import { Link } from "react-router-dom";
import Expenses from "./Expenses/Expenses";

const Welcome = () => {
  return (
    <>
    <div>
      <h2>Welcomme to Expense Tracker</h2>
    </div>
    <p>Your profile is Incomplete<Link to="/completeprofile">Complete Now</Link></p>
    <Expenses />
    </>
  );
};

export default Welcome;
