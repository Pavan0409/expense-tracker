import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
    <div>
      <h2>Welcomme to Expense Tracker</h2>
    </div>
    <p>Your profile is Incomplete<Link to="/completeprofile">Complete Now</Link></p>
    </>
  );
};

export default Welcome;
