import React, { useState, useContext} from "react";
import IncomeContext from "./incomeContext";

function Income ()
{
       


    let [incomeObj, setIncomeObj] = useState({  // income object 
        'title' : " ",
        'amount' : " "
    })

    
    let totalIncome = useContext(IncomeContext); // Total income -> coming from "income context" 

/******************************************Function Events********************************************************** */

    let updateFields = e =>
    {
        setIncomeObj({... incomeObj,[e.target.name]: e.target.value});
    }


    let onSubmitIncomeEvent = () => {
        totalIncome[1](totalIncome[0]+ parseInt(incomeObj.amount));
    }
 

/********************return**********************/

return (
    <div>
        


         <h1> Income Title : {incomeObj.title}</h1>
         <h1> Income Amount : {incomeObj.amount}</h1>
         <h1>Total income : {totalIncome[0]}</h1>


         <label>
           Description 
           <input type="text" placeholder ="description" value={incomeObj.title} name="title" onChange={updateFields}></input>
        </label>

        <br />

        <label>
           Income Amount 
           <input type="number" step="1" placeholder ="amount" value={incomeObj.amount} name="amount" onChange={updateFields}></input>
        </label>
  
        
        
        <button onClick={()=> onSubmitIncomeEvent()}> *Add Income Transaction* </button>
       
          
    </div>
);


}

export default Income;