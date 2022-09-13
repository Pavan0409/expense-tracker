import React, { useRef, useState } from "react";
import ExpenseList from "./ExpenseList";
import { useEffect } from "react";

const Expenses = () => {
  const dummyExpense = [
    {
      id: "a1",
      money: "100",
      description: "For health and school",
      category: "others",
    },
  ];
  const [refresh, setRefresh] = useState(false);
  const [expense, setExpense] = useState(dummyExpense);

  const inputExpenseMoneyRef = useRef();
  const inputExpenseDescriptionRef = useRef();
  const inputExpenseCategoryRef = useRef();

  //////Get request
  useEffect(() => {
    fetch(
      "https://expense-tracker-7f0ee-default-rtdb.firebaseio.com/Expenses.json",
      {
        method: "GET",
        // body: JSON.stringify(expenseDate),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .then((data) => {
        console.log(data);

        const storeData = [];
        for (let key in data) {
          console.log(key);
          let d = {
            id: key,
            money: data[key].money,
            description: data[key].description,
            category: data[key].category,
          };
          storeData.unshift(d);

          console.log(d);
        }
        setExpense([...storeData]);
        console.log(storeData);
      });
  }, [refresh]);

  const expenseSubmitHandler = (event) => {
    event.preventDefault();

    const enteredExpenseMoney = inputExpenseMoneyRef.current.value;
    const enteredExpenseDescription = inputExpenseDescriptionRef.current.value;
    const enteredExpenseCategory = inputExpenseCategoryRef.current.value;

    const newExpense = {
      id: Math.random().toString(),
      money: enteredExpenseMoney,
      description: enteredExpenseDescription,
      category: enteredExpenseCategory,
    };

    ////Post request
    fetch(
      "https://expense-tracker-7f0ee-default-rtdb.firebaseio.com/Expenses.json",
      {
        method: "POST",
        body: JSON.stringify(newExpense),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        alert("data sent to the backend");
        console.log(res);
        return res.json();
      } else {
        return res.json((data) => {
          throw new Error(data.error.message);
        });
      }
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
      <ExpenseList items={expense} />
    </div>
  );
};

export default Expenses;
