const Sellers = require("../models/Sellers");

module.exports = {
    registerSeller: (req, res) => {
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

            let newSeller = Sellers({
                name,
                email,
                password,
                phone,
            });

            newSeller.save((err) => {
                if (err) {
                    res.status(500).json({
                        status: "failed",
                        msg: "Server Error",
                    });
                    console.log(err);
                } else {
                    res.status(200).json({
                        status: "success",
                        msg: "Seller Registered",
                    });
                }
            });
        } else {
            res.status(403).json({ status: "failed", msg: "Bad Request" });
        }
    },
    loginSeller: (req, res) => {
        res.json();
    },
    getProductsBySeller: (req, res) => {
        id = req.params.id;
        let products;
        Sellers.findById(id)
            .populate("products")
            .then((seller) => {
                products = seller.products;
                res.json(products);
            })
            .catch((err) => {
                res.status(404).json({ status: "failed", msg: "Not Found" });
            });
    },
};
