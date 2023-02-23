import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import "./App.css";

const EXPENSES = [
  {
    id: "e1",
    title: "Desk Lamp",
    amount: 104.56,
    date: new Date(2023, 2, 16),
  },
  { id: "e2", title: "New TV", amount: 999.99, date: new Date(2022, 3, 11) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 124.38,
    date: new Date(2021, 4, 21),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 540,
    date: new Date(2020, 5, 16),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>     
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
