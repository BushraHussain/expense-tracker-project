import React, { useContext, useState } from "react";
import "./appFront.css"
import ExpenseContext from "./expenseContext";
import IncomeContext from "./incomeContext";
import BalanceContext from "./balanceContext";


function Front()
{


    let [incomeObj, setIncomeObj] = useState({  // new income object 
        'title' : " ",
        'amount' : " "
    })

    let totalIncome = useContext(IncomeContext); // Total income -> coming from "income context" 

/******************************************Function Events for income ********************************************************** */

    let updateFields = e =>{ 
        setIncomeObj({incomeObj,[e.target.name]: e.target.value});
    }

    let onSubmitIncomeEvent = () =>{
             if(incomeObj.amount===" ")
             {
                alert (`Please Enter Amount`);
             }

        else if (incomeObj.amount<0)
            {

                alert (`Please Enter Positive value `);
            }
        
        else if (isNaN(incomeObj.amount))
                {
                    alert (`Please Enter values `);
                }

        else  {
                       totalIncome[1](totalIncome[0]+ parseInt(incomeObj.amount));
                        return false;
                    }


         }



/****************************************Expense***************************** */



let [expenseObj, setExpenseObj] = useState({  // expense object 
    'title' : " ",
    'amount' : " "
})

let totalExpense = useContext(ExpenseContext); // coming from "Expense context"

/******************************************Function Events for Expense**********************************************************/

let updateFieldExpense = e =>{
    setExpenseObj({expenseObj,[e.target.name]: e.target.value});
}


let onSubmitExpenseEvent = () => {


    if(incomeObj.amount===" ")
    {
        alert (`Please Enter Amount`);
    }


    else if (isNaN(incomeObj.amount))
    {
        alert (`Please Enter values `);
    }



    else if (incomeObj.amount<0)
    {

    alert (`Please Enter Positive value `);
    }
    else 
    {

    totalExpense[1](totalExpense[0]+ parseInt(expenseObj.amount));
    }
}

/**********************Balance ****************************************** */

let Balance = useContext(BalanceContext); 


Balance[1] ( totalIncome[0] - totalExpense[0]) ;

/**********************return ****************************************** */

return(

    <div>
        
    <div class="container-contact100">
        <div class="wrap-contact100">

        <form class="contact100-form validate-form">
            <span class="contact100-form-title">
                Expense Tracker
            </span>
            
            <h3 class="h3b"> Your Balance : {Balance}</h3>


            <div class="inc-exp-container">
                <div>
                <h2>Income</h2>
                <h3 id="money-plus" class="money plus h3Values">{totalIncome}</h3>
                </div>
                <div>
                <h2>Expense</h2>
                <h3 id="money-minus" class="money minus h3Values">{totalExpense}</h3>
                </div>
       </div>

           

            <h3 class="h3">Want to Add Income ??</h3>
                
				<div class="wrap-input100 " >
					<span class="label-input100">Title</span>
					<input class="input100" type="text" name="title" placeholder ="Title" value={incomeObj.title} onChange={updateFields}  />
                    

					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 " >
					<span class="label-input100">Amount</span>
					<input class="input100" type="number" step="1"   name="amount" placeholder ="Enter amount here.." value={incomeObj.amount} onChange={updateFields} />
					<span class="focus-input100"></span>
				</div>


                <button class="button button2" type="button" onClick={()=>{onSubmitIncomeEvent(); return false;}}> Add Income</button>

           
            <h3 class="h3">Want to Add Expense ??</h3>

                <div class="wrap-input100 " >
					<span class="label-input100">Title</span>
					<input class="input100" type="text" name="title" placeholder ="Title" value={expenseObj.title} onChange={updateFieldExpense} />
                    

					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 " >
					<span class="label-input100">Amount</span>
					<input class="input100" type="number" step="1" min="0" name="amount" placeholder ="Enter amount here.." value={expenseObj.amount} onChange={updateFieldExpense} />
					<span class="focus-input100"></span>
				</div>

            
            <button class="button button1" type="button" onClick={()=>onSubmitExpenseEvent()}> Add Expense</button>
         

            </form>



           
        </div>

     </div>

</div>
);

}
 export default Front;