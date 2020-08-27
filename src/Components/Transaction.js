import React from 'react';

const Transaction = () => {
    return(
        <div>
            <h2>Add New Transaction</h2>
            <hr />
            <form>
                <p>Text</p>
                <input placeholder="Enter Text ..." type="text" />
                <p>Amount</p>
                <p>(negative - expense, positive - income)</p>
                <input type="number" placeholder="Enter amount ..." /> <br /> <br />
                <button>Add Transaction</button>
            </form>
        </div>
    )
}

export default Transaction;