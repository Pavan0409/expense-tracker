import React, { useRef, useState } from "react";

const Expenses = () => {
  const dummyExpense = [
    {
      money: "100",
      description: "For health and school",
      category: "others",
    },
  ];
  const [expense, setExpense] = useState(dummyExpense);

  const inputExpenseMoneyRef = useRef();
  const inputExpenseDescriptionRef = useRef();
  const inputExpenseCategoryRef = useRef();

  const expenseSubmitHandler = (event) => {
    event.preventDefault();

    const enteredExpenseMoney = inputExpenseMoneyRef.current.value;
    const enteredExpenseDescription = inputExpenseDescriptionRef.current.value;
    const enteredExpenseCategory = inputExpenseCategoryRef.current.value;

    setExpense((prevState) => {
      return [
        {
          money: enteredExpenseMoney,
          description: enteredExpenseDescription,
          category: enteredExpenseCategory,
        },
        ...prevState,
      ];
    });
    inputExpenseMoneyRef.current.value = "";
    inputExpenseDescriptionRef.current.value = "";
    inputExpenseCategoryRef.current.value = "";
  };

  return (
    <div>
      <h2>Enter Expenses</h2>
      <form onSubmit={expenseSubmitHandler}>
        <label htmlFor="expenseMoney">Money</label>
        <input id="expenseMoney" type="text" ref={inputExpenseMoneyRef} />
        <label htmlFor="expenseDescription">Description</label>
        <input
          id="expenseDescription"
          type="text"
          ref={inputExpenseDescriptionRef}
        />
        <label htmlFor="expenseCategory">Category</label>
        <select
          name="Category"
          id="expenseCategory"
          ref={inputExpenseCategoryRef}
        >
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="home decor">Home Decor</option>
          <option value="others">Others</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Expenses;
