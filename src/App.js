import React, { useState } from 'react';


import IncomeContext from './incomeContext';

import ExpenseContext from './expenseContext';

import BalanceContext from './balanceContext';
import Front from './front';





function App() {



  let globalIncome = useState(0) ; // global income = total income 
  let globalExpense = useState(0);  // global expense = total expense
  let globalBalance = useState(0); // global balance 

  return (

    <IncomeContext.Provider value={globalIncome}>
    <ExpenseContext.Provider value ={globalExpense}>
    <BalanceContext.Provider value = {globalBalance}>
      

    <div >
    <Front />
      
    </div>
   
    </BalanceContext.Provider>
    </ExpenseContext.Provider>
    </IncomeContext.Provider>
   


  );
}

export default App;
