const express = require("express");
const router = express.Router();

const { signup, signin, signout, authenticate } = require("../controllers/user");
const { userSignupValidator, userSigninValidator } = require("../validators/user");

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", signout);
router.get("/auth", authenticate);

module.exports = router;