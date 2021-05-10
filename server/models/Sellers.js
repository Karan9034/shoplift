const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const SellersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "products",
        },
    ],
});

SellersSchema.pre("save", function (next) {
    var seller = this;
    if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(seller.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                seller.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

SellersSchema.methods.comparePassword = function (password, done) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        if (err) {
            return done(err);
        }
        done(null, isMatch);
    });
};

const Sellers = mongoose.model("sellers", SellersSchema);
module.exports = Sellers;
