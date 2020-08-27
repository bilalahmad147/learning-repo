import React, { useState } from 'react';
import '../App.css'

const Transaction = () => {

    const handleAddition = (e) => {
        e.preventDefault();
    }

    let [desc, setDesc] = useState('');
    let [amount, setAmount] = useState(0);

    return (
        <div>
            <h2>Add New Transaction</h2>
            <hr />
            <form className="transaction-form" onSubmit={handleAddition}>
                <label>Text <br />
                    <input onChange={(ev)=>setDesc(ev.target.value)} required='required' placeholder="Enter Text ..." type="text" />
                </label>
                <br />
                <label>Amount <br />
                    <input onChange={(ev)=>setAmount(ev.target.value)} required='required' placeholder="Enter amount ..." type="number" />
                </label>
                <br />
                <input type='submit' value='Add Transaction' />
            </form>
        </div>
    )
}

export default Transaction;