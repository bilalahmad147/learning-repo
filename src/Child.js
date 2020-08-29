import React, { useReducer } from 'react';
import counterReducer from './CounterReducer';


const Child = () => {

    let [state, dispatch] = useReducer(counterReducer,0);
    return (
        <div>
            <h1>this is counter using CounterReducer</h1>
            <h1>Counter : {state} </h1>
            <button onClick={() => dispatch('ADD')}>Increament</button>
            <button onClick={() => dispatch('SUB')}>Decreament</button>
            <button onClick={() => dispatch()}>Reset</button>
        </div>
    )
}

export default Child;