import React, { useState, useContext } from "react";
import ExpenseContext from "./expenseContext.js";

function Expense ()
{

    let [expenseObj, setExpenseObj] = useState({  // expense object 
        'title' : " ",
        'amount' : " "
    })

    let totalExpense = useContext(ExpenseContext); // coming from "Expense context"

/******************************************Function Events**********************************************************/

    let updateFields = e => {
        setExpenseObj({... expenseObj, [e.target.name]: e.target.value});
      }


    let onSubmitExpenseEvent = () => {
        totalExpense[1](totalExpense[0]+ parseInt(expenseObj.amount));
    }

/********************return**********************/

return(
    <div>
        <hr />
        <h1> Expense Title : {expenseObj.title}</h1>
        <h1> Expense Amount : {expenseObj.amount}</h1>
        <h1>Total Expense : {totalExpense[0]}</h1>


        <label>
           Description 
           <input type="text" placeholder ="description" value={expenseObj.title} name="title" onChange={updateFields}></input>
        </label>

        <br />

        <label>
           Expense Amount 
           <input type="number" step="1" placeholder ="amount" value={expenseObj.amount} name="amount" onChange={updateFields}></input>
        </label>

        <button onClick={()=>onSubmitExpenseEvent()}> Add Expense </button>
   
  

    </div>
);

}

export default Expense;