import React, { useState } from 'react';
import './App.css';
import Child from './Child';
import CounterContext from './CounterContext';
import Child1 from './Child1';


const App = () => {

  let countState = useState(0);

  return (
    <CounterContext.Provider value={countState}>
      <div className="App">
        <Child />
        <Child1 />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
