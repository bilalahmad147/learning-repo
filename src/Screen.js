import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Screen = () => {
    const classes = useStyles();
    const [globalData, setGlobalData] = useState({});


    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const respose = await fetch("https://api.thevirustracker.com/free-api?global=stats");
        const data = await respose.json();
        delete data.results[0].source;
        const origionalData = data.results[0];
        console.log(origionalData)
        setGlobalData(origionalData);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {globalData.map((key, ind) => {
                    return (
                        <Grid item xs={12} sm={4} key={ind}>
                            <Paper
                                className={classes.paper}
                                elevation={3}>
                                <h3 className={classes.title}>
                                    {key.replace(/_/g, ' ')}
                                </h3>
                                <h3>{globalData[key]}</h3>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </div >
    );
}

export default Screen;