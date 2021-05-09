const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const getToken = require("../utils/getToken");

router.get("/products", (req, res) => {
    res.json();
});

router.post(
    "/login",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        var token = getToken(req.headers);
        re.json();
    }
);

router.post("/register", (req, res) => {
    res.json();
});

module.exports = router;
