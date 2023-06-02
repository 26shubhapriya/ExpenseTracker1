import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from '../UI/Card';
import React from "react";

const ExpenseItem = (props) => {


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount} locationOfExpenditure={props.locationOfExpenditure} title={props.title} /> 
    </Card>
  );
}

export default ExpenseItem;
