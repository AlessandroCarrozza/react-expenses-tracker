import "./ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm({ onSaveExpenseData, onCancel }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [showForm, setShowForm] = useState(false);

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  // function showFormHandler() {
  //   setShowForm((prev) => !prev);
  // }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);
    // setShowForm((prev) => !prev);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              onChange={amountChangeHandler}
              min="0.01"
              step="0.01"
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              onChange={dateChangeHandler}
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
            />
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </>
  );
}
