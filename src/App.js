import React from 'react';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import History from './Components/History';
import Transaction from './Components/Transaction';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Balance />
      <History />
      <Transaction />
    </div>
  );
}

export default App;
