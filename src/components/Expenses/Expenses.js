import React, { useEffect, useState } from "react";
import classes from './Expenses.module.css';

const Expenses = () => {
  const [refresh, setRefresh] = useState(false);
  const [expense, setExpense] = useState([]);
  const [category, setCategory] = useState("");
  const [money, setMoney] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState("");
  const [editForm, setEditForm] = useState(false);

  const moneyHandler = (event) => {
    setMoney(event.target.value);
  };

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  //////Get request
  useEffect(() => {
    fetch(
      "https://expense-tracker-f3426-default-rtdb.asia-southeast1.firebasedatabase.app/Expenses.json",
      {
        method: "GET",
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

    const expenseData = {
      money,
      description,
      category,
    };

    if (editId) {
      fetch(
        `https://expense-tracker-f3426-default-rtdb.asia-southeast1.firebasedatabase.app/Expenses/${editId}.json`,
        {
          method: "PUT",
          body: JSON.stringify(expenseData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          setRefresh(true);
        }
      });
    } else {
      //Post Data
      fetch(
        "https://expense-tracker-f3426-default-rtdb.asia-southeast1.firebasedatabase.app/Expenses.json",
        {
          method: "POST",
          body: JSON.stringify(expenseData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            alert("data sent to the backend");
            setRefresh(true);
            return res.json();
          } else {
            return res.json((data) => {
              throw new Error(data.error.message);
            });
          }
        })

        .catch((err) => {
          alert(err.message);
        });
    }
  };
  ///Delete
  const deleteListHandler = (id) => {
    const deleted = expense.filter((item) => {
      return item.id !== id;
    });
    setExpense(deleted);
    console.log(deleted);

    fetch(
      `https://expense-tracker-f3426-default-rtdb.asia-southeast1.firebasedatabase.app/Expenses/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        alert("Expense successfully deleted");
        return res.json();
      } else {
        return res.json((data) => {
          throw new Error(data.error.message);
        });
      }
    });
  };

  ////Edit
  const editHandler = (editId) => {
    console.log(editId);
    setEditId(editId);
    setEditForm(true);
    const editData = expense.filter((item) => {
      return item.id === editId;
    });
    console.log(editData);
    editData.map((item) => {
      setMoney(item.money);
      setCategory(item.category);
      setDescription(item.description);
      return;
    });
  };

  return (
    <div>
      <form onSubmit={expenseSubmitHandler}>
        <h2>Add Expenses</h2>
        <label htmlFor="expenseMoney">Money</label>
        <input
          id="expenseMoney"
          type="number"
          value={money}
          onChange={(event) => moneyHandler(event)}
        />
        <label htmlFor="expenseDescription">Description</label>
        <input
          id="expenseDescription"
          type="text"
          value={description}
          onChange={(event) => descriptionHandler(event)}
        />
        <label htmlFor="expenseCategory">Category</label>
        <select
          name="Category"
          id="expenseCategory"
          value={category}
          onChange={(event) => categoryHandler(event)}
        >
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="home decor">Home Decor</option>
          <option value="others">Others</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {expense.map((item) => {
        return (
          <ul key={item.id} className={classes.ul}>
            <li>Money: {item.money}</li>
            <li>Description: {item.description}</li>
            <li>Category: {item.category}</li>
            <div className={classes.btnn}>
              <button onClick={() => editHandler(item.id)}>Edit</button>
              <button onClick={() => deleteListHandler(item.id)}>Delete</button>
            </div>
          </ul>
        );
      })}
    </div>
  );
};

export default Expenses;
