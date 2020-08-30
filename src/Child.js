import React, { useEffect } from 'react';

const Child = () => {

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
        const data = await response.json();
        console.log(data.results);
    }

    return (
        <div>
            <h1>hello everyone</h1>
        </div>
    )
}

export default Child;