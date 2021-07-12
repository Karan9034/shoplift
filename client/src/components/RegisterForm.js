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

const RegisterForm = () => {
    const classes = useStyles();
    let [products, setProducts] = useState([]);
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [password, setPassword] = useState("");
    let [repPassword, setRepPassword] = useState("");
    let [passErr, setPassErr] = useState(false);

    const handleSubmit = () => {
        // console.log(email, password);
        if (password === repPassword) {
            let url = "/api/user/register";
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                    name,
                    phone,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => console.log(err));
        } else {
            setPassErr(true);
        }
    };

    return (
        <form>
            <FormControl fullWidth>
                <TextField
                    className={classes.input}
                    id="name"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
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
                    id="phone"
                    label="Phone"
                    variant="outlined"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </FormControl>
            <FormControl fullWidth>
                <TextField
                    className={classes.input}
                    id="password"
                    label="Password"
                    error={passErr}
                    helperText={passErr && "The password should match"}
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormControl>
            <FormControl fullWidth>
                <TextField
                    className={classes.input}
                    id="repeat_password"
                    label="Repeat Password"
                    error={passErr}
                    helperText={passErr && "The password should match"}
                    variant="outlined"
                    value={repPassword}
                    onChange={(e) => setRepPassword(e.target.value)}
                />
            </FormControl>
            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >
                Register
            </Button>
        </form>
    );
};

export default RegisterForm;
