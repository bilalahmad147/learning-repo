import React from 'react';
import LoginPage from './LoginPage';

const Child = () => {

    // useEffect(() => {
    //     loadData();
    // },[])

    // const loadData = async () => {
    //     const respose = await fetch('https://covid19.mathdro.id/api');
    //     const data = await respose.json();
    //     console.log(data.confirmed);
    // }

    return (
        <div>
            <LoginPage />
        </div>
    )
}

export default Child;