import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from '../UI/Card';
import React from "react";

const ExpenseItem = (props) => {

  const clickHandler = () => {
    console.log('Clicked!!!!');
  }
  const deleteExpenses = () => {
    console.log('Deleted');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount} locationOfExpenditure={props.locationOfExpenditure} title={props.title} /> 
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteExpenses}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
