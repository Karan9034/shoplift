const router = require("express").Router();
const passport = require("passport");
const { getAllProducts, addNewProduct } = require("../controllers/Products");
const {
    registerSeller,
    getProductsBySeller,
    loginSeller,
} = require("../controllers/Sellers");

// Product Routes
router.get("/products", getAllProducts);
router.post("/products", addNewProduct);

// Seller Authentication Routes
router.post(
    "/seller/login",
    passport.authenticate("jwt", { session: false }),
    loginSeller
);
router.post("/seller/register", registerSeller);
router.get("/:id/products", getProductsBySeller);

module.exports = router;
