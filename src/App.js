import React from 'react';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import History from './Components/History';
import Transaction from './Components/Transaction';
import Expense from './Components/Expense';
import { TransProvider } from './Components/TransContext';


const App = () => {
  
  return (
    <TransProvider>
      <div className="App">
        <Header />
        <Balance />
        <Expense />
        <History />
        <Transaction />
      </div>
    </TransProvider>
  );
}

export default App;
