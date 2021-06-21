import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        margin: "2vw 5vw",
        width: "90vw",
    },
    heading: {
        marginBottom: "4vw",
    },
}));

const Login = () => {
    const classes = useStyles();
    let [products, setProducts] = useState([]);

    return (
        <div className={classes.root}>
            <Typography className={classes.heading} variant="h4" align="center">
                Log Into Your Account
            </Typography>
            <LoginForm />
        </div>
    );
};

export default Login;
