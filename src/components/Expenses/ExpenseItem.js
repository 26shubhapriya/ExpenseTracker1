import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import React, {useState} from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  

  const clickHandler = () => {
    setTitle('Updated');
    
  }
  const changeAmount = () => {
    setAmount('100')
   
  }

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      <button onClick={changeAmount}>Change to 100$</button>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
