import React, { useEffect } from 'react';

const Child = () => {

    useEffect(() => {
        loadData();
    },[])

    const loadData = async () => {
        const respose = await fetch('https://covid19.mathdro.id/api');
        const data = await respose.json();
        console.log(data.confirmed);
    }

    return (
        <div>
            <h1>hello everyone</h1>
        </div>
    )
}

export default Child;