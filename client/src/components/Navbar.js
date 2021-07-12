import React from "react";
import { Link } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleSharp from "@material-ui/icons/AccountCircleSharp";

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
		color: "#fff",
		textDecoration: "none",
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: "5vw",
		width: "40vw",
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
		width: "40vw",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
	},
}));

const Navbar = () => {
	const classes = useStyles();
	return (
		<div className={classes.grow}>
			<AppBar position="fixed">
				<Toolbar
					style={{
						paddingLeft: "10vw",
						paddingRight: "10vw",
						backgroundColor: "#000",
					}}
				>
					<Typography variant="h6" noWrap>
						<Link to="/" className={classes.title}>
							Shoplift
						</Link>
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ "aria-label": "search" }}
						/>
					</div>
					<div className={classes.grow} />
					<IconButton
						edge="end"
						color="inherit"
						style={{
							marginRight: "5px",
						}}
					>
						<ShoppingCartOutlined />
						<Typography
							style={{
								marginLeft: "8px",
							}}
							variant="body1"
							noWrap
						>
							Cart
						</Typography>
					</IconButton>
					<IconButton
						edge="end"
						aria-label="account of current user"
						// aria-controls={menuId}
						aria-haspopup="true"
						// onClick={handleProfileMenuOpen}
						color="inherit"
						style={{
							marginRight: "5px",
						}}
					>
						<AccountCircleSharp />
						<Typography
							style={{
								marginLeft: "8px",
							}}
							variant="body1"
							noWrap
						>
							Profile
						</Typography>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</div>
	);
};

export default Navbar;
