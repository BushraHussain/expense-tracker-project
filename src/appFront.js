import React, { useContext, useState } from "react";
import "./appFront.css"
import ExpenseContext from "./expenseContext";
import IncomeContext from "./incomeContext";
import BalanceContext from "./balanceContext";

function Appfront()
{

    let totalExp = useContext(ExpenseContext);
	let totalIncome = useContext (IncomeContext);
	let currentBalance = useContext(BalanceContext);


	let checkBalanceEvent = ()=> {
       
	
		totalIncome[1](totalIncome[0]+ parseInt(incomeObj.amount));
		currentBalance[1] ( totalIncome[0] - totalExp[0]) ;

    }
/*************************************************************************** */

	let [incomeObj, setIncomeObj] = useState({  // income object 
        'title' : " ",
        'amount' : " "
	})
	


    let updateFields = e =>
    {
        setIncomeObj({
            ... incomeObj,
            [e.target.name]: e.target.value
        });
    }

/******************************************************************************* */
    return (
    <div>
        
        <div class="container-contact100">
		    <div class="wrap-contact100">
            <form class="contact100-form validate-form">
				<span class="contact100-form-title">
					Expense Tracker
				</span>





                <h6> Total Income : {totalIncome}  </h6>
				<h6> Total Expense : {totalExp}</h6>
				<h6> Balance : {currentBalance}</h6>





                
				<div class="wrap-input100 validate-input" >
					<span class="label-input100">Title</span>
					<input class="input100" type="text" name="title" placeholder ="Title" value={incomeObj.title} onChange={updateFields} />


					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input" >
					<span class="label-input100">Amount</span>
					<input class="input100" type="number" step="1" name="amount" placeholder ="Enter amount here.." value={incomeObj.amount} onChange={updateFields} />
					<span class="focus-input100"></span>
				</div>




                <div class="checkboxdesign">

                    <label class="container">Expense
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                    </label>


                    <label class="container">Income
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                    </label>

                </div>

                <div class="container-contact100-form-btn">
					<div class="wrap-contact100-form-btn">
						<div class="contact100-form-bgbtn"></div>
						<button class="contact100-form-btn" onClick={()=>checkBalanceEvent()}>
							<span>
								Submit
								<i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
							</span>
						</button>



						
					</div>

				</div>
                </form>



               
            </div>

         </div>

    </div>
    );

}
export default Appfront;