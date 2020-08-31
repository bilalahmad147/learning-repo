import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    style: {
        height: 500,
        width: 400,
        margin: '0 auto',
    },
    entry : {
        width: '95%',
        margin : 10,

    }
}));

const LoginPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Paper elevation={2} className={classes.style}>
                <h1>Login Page</h1>
                <TextField className={classes.entry} id="standard-basic" label="Enter Email" />
                <TextField className={classes.entry} id="standard-basic" label="Enter Password" /> <br /><br />
                <Button className={classes.entry} variant="contained" color="primary">
                    LOGIN
                </Button>
            </Paper>
        </div>
    );
}

export default LoginPage;