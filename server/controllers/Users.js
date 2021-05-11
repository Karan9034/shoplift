const Users = require("../models/Users");
const Products = require("../models/Products");
module.exports = {
    registerUser: (req, res) => {
        if (
            req.body.name &&
            req.body.email &&
            req.body.password &&
            req.body.phone
        ) {
            let name = req.body.name;
            let email = req.body.email;
            let password = req.body.password;
            let phone = req.body.phone;

            let newUser = Users({
                name,
                email,
                password,
                phone,
            });

            newUser.save((err) => {
                if (err) {
                    res.status(500).json({
                        status: "failed",
                        msg: "Server Error",
                    });
                    console.log(err);
                } else {
                    res.status(200).json({
                        status: "success",
                        msg: "User Registered",
                    });
                }
            });
        } else {
            res.status(403).json({ status: "failed", msg: "Bad Request" });
        }
    },
    loginUser: (req, res) => {
        res.json();
    },
    getUserOrders: (req, res) => {
        res.json();
    },
    createOrder: (req, res) => {
        res.json();
    },
    getAllProducts: (req, res) => {
        Products.find({})
            .populate("seller")
            .then((products) => {
                res.json(products);
            });
    },
};
