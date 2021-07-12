import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
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

const Register = () => {
    const classes = useStyles();
    let [products, setProducts] = useState([]);

    return (
        <div className={classes.root}>
            <Typography className={classes.heading} variant="h4" align="center">
                Create A New Account
            </Typography>
            <RegisterForm />
        </div>
    );
};

export default Register;
