import React, { useContext } from 'react';
import CounterContext from './CounterContext';


const Child1 = () => {

    let counterValue = useContext(CounterContext);
    console.log(counterValue)
    return (
        <div>
            <h1>this is counter using counter context</h1>
            <h1>Counter : {counterValue[0]} </h1>
            <br />
            <button onClick={() => { counterValue[1](++counterValue[0]) }}>Increament</button>
        </div>
    )
}

export default Child1;