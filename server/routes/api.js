const router = require("express").Router();
const {
    registerSeller,
    getProductsBySeller,
    loginSeller,
    getSellerOrders,
    addNewProduct,
} = require("../controllers/Sellers");
const {
    registerUser,
    loginUser,
    getUserOrders,
    createOrder,
    getAllProducts,
} = require("../controllers/Users");

// ROUTES: SELLER PORTAL
router.post("/seller/register", registerSeller);
router.get("/seller/:id/products", getProductsBySeller);
// TODO: Incomplete loginSeller Function
router.post(
    "/seller/login",
    loginSeller
);
// TODO: Add Auth for only seller
router.post("/products/create", addNewProduct);
router.get("/seller/orders", getSellerOrders);

// ROUTES: USER PORTAL
router.post("/user/register", registerUser);
router.get("/products/all", getAllProducts);
// TODO: Incomplete loginUser Function
router.post("/user/login", loginUser);
// TODO: Add Auth for only User
router.get("/user/orders", getUserOrders);
router.post("/orders/new", createOrder);

module.exports = router;
