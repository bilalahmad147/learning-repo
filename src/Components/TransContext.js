import React, { createContext, useReducer } from "react";
import TransReducer from "./TransReducer";

const initialTrans = [
    { amount: 500, desc: "cash" },
    { amount: -500, desc: "camera" },
    { amount: -100, desc: "book" },
]

export const TransContext = createContext(initialTrans);

export const TransProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransReducer, initialTrans);

    function addTrans(transObj) {
        dispatch({
            type: 'add',
            payload: {
                amount: transObj.desc,
                desc: transObj.amount
            }
        })
    }
    return (
        <TransContext.Provider value={{
            transaction: state,
            addTrans: addTrans
        }}>
            {children}
        </TransContext.Provider>
    )
}
