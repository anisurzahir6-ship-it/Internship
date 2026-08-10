const express = require("express");
const { registration, userLogin, changePassword, getAllUsers } = require("../controller/user.controller");
const { authCheck } = require("../middleware/auth");
const { userProfile } = require("../controller/cart.controller");

const userRouter = express.Router();


userRouter.post("/registration", registration);
userRouter.post("/login", userLogin);
userRouter.post("/change-password", authCheck, changePassword);
userRouter.get("/users",authCheck, getAllUsers);
userRouter.get("/user", authCheck, userProfile);

module.exports = {
    userRouter
}
