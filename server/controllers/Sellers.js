const Sellers = require("../models/Sellers");
const Products = require("../models/Products");

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
    getSellerOrders: (req, res) => {
        res.json();
    },
    addNewProduct: (req, res) => {
        if (
            req.body.name &&
            req.body.price &&
            req.body.stock &&
            req.body.seller
        ) {
            let name = req.body.name;
            let price = req.body.price;
            let stock = req.body.stock;
            let seller = req.body.seller;

            let newProduct = Products({
                name,
                price,
                stock,
                seller,
            });

            newProduct
                .save()
                .then((product) => {
                    let products;
                    Sellers.findById(seller, (err, sell) => {
                        products = sell.products;
                    }).then(() => {
                        Sellers.findByIdAndUpdate(
                            seller,
                            { products: [...products, product] },
                            () => {
                                res.json({
                                    status: "success",
                                    msg: "Product Added",
                                });
                            }
                        );
                    });
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).json({
                        status: "failed",
                        msg: "Server Error",
                    });
                });
        } else {
            res.status(403).json({ status: "failed", msg: "Bad Request" });
        }
    },
};
