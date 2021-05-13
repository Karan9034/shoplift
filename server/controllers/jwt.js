const jwt = require("jsonwebtoken");

module.exports = {
    generateToken: async (user) => {
        let token = await jwt.sign(user, process.env.SECRET);
        return token;
    },
};
