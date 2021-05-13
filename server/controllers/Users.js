const Users = require("../models/Users");
const Products = require("../models/Products");
const bcrypt = require("bcryptjs");

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

            bcrypt.genSalt(10, (err, salt) => {
                if (err) console.log(err);
                else {
                    bcrypt.hash(password, salt, (err, hash) => {
                        if (err) console.log(err);
                        else {
                            let newUser = new Users({
                                name,
                                email,
                                password: hash,
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
                        }
                    });
                }
            });
        } else {
            res.status(400).json({ status: "failed", msg: "Bad Request" });
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
