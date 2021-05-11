const mongoose = require("mongoose");

const OrdersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sellers",
        required: true,
    },
});

const Orders = mongoose.model("orders", OrdersSchema);
module.exports = Orders;
