import React, { useState, useContext } from 'react';
import ExpenseContext from './expenseContext';
import IncomeContext from './incomeContext';
import BalanceContext from './balanceContext';

function Balance()
{

   // let [currentBalance, setCurrentBalance] = useState (0);

    let Balance = useContext(BalanceContext); 


    let totalExp = useContext(ExpenseContext);
    let totalIncome = useContext(IncomeContext);


    let checkBalanceEvent = ()=> {
       
        Balance[1] ( totalIncome[0] - totalExp[0]) ;

    }
   

return(
        <div>
            <hr />
            
            <h3> total expense : {totalExp}</h3>
            <h3> total income : {totalIncome}</h3>
            <button onClick ={()=>{checkBalanceEvent()}}> check balance </button>
           
        </div>
);

}
export default Balance;