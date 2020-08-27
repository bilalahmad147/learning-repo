import React, { createContext, useReducer } from "react";
import TransReducer from "./TransReducer";

const initialTrans = [];

export const TransContext = createContext(initialTrans);

export const TransProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransReducer, initialTrans);

    function addTrans(transObj) {
        dispatch({
            type: 'add',
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
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
