import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";

const Navbar = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Shoplift
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
