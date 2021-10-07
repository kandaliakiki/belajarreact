import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  let expensescontent = <p>No Expenses found</p>;
  //   if (props.items.length > 0) {
  //     expensescontent = props.items.map(
  //       //EDITED ABOVE now use the new usestate to map the item
  //       function (expense) {
  //         return (
  //           <ExpenseItem
  //             key={expense.id}
  //             title={expense.title}
  //             amount={expense.amount}
  //             date={expense.date}
  //           ></ExpenseItem>
  //         );
  //       }
  //     );
  //   }

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map(
        //EDITED ABOVE now use the new usestate to map the item
        function (expense) {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            ></ExpenseItem>
          );
        }
      )}
    </ul>
  );
}

export default ExpensesList;
