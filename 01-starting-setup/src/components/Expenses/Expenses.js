import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = new useState("2020");
  function filterChangeHandler(selectedYear) {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  }

  const filteredExpense = props.items.filter(function (expense) {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpense}></ExpensesChart>
        <ExpensesList items={filteredExpense}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
