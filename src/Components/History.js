import React, { useContext } from 'react';
import {TransContext} from './TransContext';

const History = () => {

    let {transaction} = useContext(TransContext);

    return (
        <div>
            <h2>Your History</h2>
            <hr />
            <ul className="history">
                {transaction.map((trans, ind) => {
                    return (
                        <li key={ind}>
                            <span>{trans.desc}</span>
                            <span>{trans.amount}$</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default History;