const router = require('express').Router()
const authrouter = require("./controllers/auth.controller");
const userrouter =require("./controllers/user.controller");


router.use("/auth",authrouter);
router.use("/user",userrouter);

module.exports = router