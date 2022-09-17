import React from "react";
import { CSVLink } from "react-csv";
import { useDispatch, useSelector } from "react-redux";
import { themesActions } from "../store/themeReducer";

const Premium = () => {
  const data = useSelector((state) => state.expense.expense);

  const csvData = data.map((d) => {
    return {
      money: d.money,
      description: d.description,
      category: d.category,
    };
  });
  console.log(csvData);

  const dispatch = useDispatch();

  const changeThemeHandler = () => {
    console.log("click");
    dispatch(themesActions.theme());
  };

  const csvReport = {
    filename: "Report.csv",
    data: csvData,
  };
  console.log(csvReport, "csvReport");
  return (
    <div>
      <div>
        <button onClick={changeThemeHandler}>Change Theme</button>
      </div>
      <div>
        <CSVLink {...csvReport}>Download Expense</CSVLink>
      </div>
    </div>
  );
};

export default Premium;
