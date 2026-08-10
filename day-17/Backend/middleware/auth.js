const jwt = require("jsonwebtoken");
const { userModel } = require("../model/user.model");
require('dotenv').config();

const authCheck = async (req, res, next) => {

    // ✅ Check token exists
    if (!req.headers.authorization) {
        return res.status(401).send({ message: "No token provided" });
    }

    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized access",
                error: err.message
            });
        }

        try {
            const user = await userModel.findById(decoded.userId);

            if (user) {
                req.userId = decoded.userId;   // ✅ correct
                next();
            } else {
                res.status(401).send({ message: "Unauthorized access" });
            }

        } catch (error) {
            res.status(500).send({
                message: "Internal server error",
                error: error.message
            });
        }
    });
};

module.exports = {
    authCheck
};