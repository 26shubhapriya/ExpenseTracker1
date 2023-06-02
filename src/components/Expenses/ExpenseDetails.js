import './ExpenseItem.css';
import React, { useState } from "react";

const ExpenseDetails = (props) => {

  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  }
  const changeAmount = () => {
    setAmount('100')
   
  }

  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <h3>{props.locationOfExpenditure}</h3>
      <div className="expense-item__price">${amount}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={changeAmount}>Change to 100$</button>
    </div>
   
  );
}

export default ExpenseDetails;
