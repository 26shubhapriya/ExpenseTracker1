import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props =>{

    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">found no expenses.</h2>
    }
  
     if (props.items.length === 1) {
      return(
        <div>
          <ExpenseItem
            key={props.items[0].id}
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
          />
          <p className="expenses-list__fallback">Only single Expense here. Please add more...</p>
        </div>
      );
    }

    return <ul className="expenses-list">
        {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
}

export default ExpensesList;