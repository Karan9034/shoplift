const Sellers = require("../models/Sellers");
const Products = require("../models/Products");

module.exports = {
    getAllProducts: (req, res) => {
        Products.find({})
            .populate("seller")
            .then((products) => {
                res.json(products);
            });
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
