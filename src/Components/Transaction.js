import React, { useState, useContext } from 'react';
import '../App.css'
import { TransContext } from './TransContext';

const Transaction = () => {

    let { transaction, addTrans } = useContext(TransContext);
    const handleAddition = (e) => {
        e.preventDefault();
        addTrans({
            amount: newAmount,
            desc: newDesc
        })
    }

    let [newDesc, setDesc] = useState('');
    let [newAmount, setAmount] = useState(0);

    return (
        <div>
            <h2>Add New Transaction</h2>
            <hr />
            <form className="transaction-form" onSubmit={handleAddition}>
                <label>Text <br />
                    <input onChange={(ev) => setDesc(ev.target.value)} required='required' placeholder="Enter Text ..." type="text" />
                </label>
                <br />
                <label>Amount <br />
                    <input onChange={(ev) => setAmount(ev.target.value)} required='required' placeholder="Enter amount ..." type="number" />
                </label>
                <br />
                <input type='submit' value='Add Transaction' />
            </form>
        </div>
    )
}

export default Transaction;