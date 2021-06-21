import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    input: {
        marginTop: "1vw",
        marginBottom: "1vw",
    },
    button: {
        marginTop: "2vw",
    },
}));

const LoginForm = () => {
    const classes = useStyles();
    let [products, setProducts] = useState([]);
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const handleSubmit = () => {
        // console.log(email, password);
        let url = "/api/user/login";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <form>
            <FormControl fullWidth>
                <TextField
                    className={classes.input}
                    id="email"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl fullWidth>
                <TextField
                    className={classes.input}
                    id="password"
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormControl>
            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </form>
    );
};

export default LoginForm;
