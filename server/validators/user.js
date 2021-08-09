const jwt = require("jsonwebtoken");

exports.userSignupValidator = (req, res, next) => {
    req.check("name", "Name is required!").notEmpty();
    req.check("email", "Email must be between 3 to 32 chanracters")
        .matches(/.+\@.+\..+/)
        .withMessage("Invalid Email Id.")
        .isLength({
            min: 4,
            max: 32
        });
    req.check("password", "Password is required!");
    req.check("password")
        .isLength({ min: 6 })
        .withMessage("Password must contain atleast 6 characters")
        .matches(/\d/)
        .withMessage("Password must contain a Number");
    const errors = req.validationErrors();
    if (errors) {
        let error = errors.map(error => { return { [error.param]: error.msg } })[0];
        return res.status(400).json({ error });
    }
    next();
}

exports.userSigninValidator = (req, res, next) => {
    req.check("username", "Username is required!");
    req.check("password", "Password is required!");
    req.check("password")
        .isLength({ min: 6 })
        .withMessage("Password must contain atleast 6 characters")
        .matches(/\d/)
        .withMessage("Password must contain a Number");
    const errors = req.validationErrors();
    if (errors) {
        let error = errors.map(error => { return { [error.param]: error.msg } })[0];
        return res.status(400).json({ error });
    }
    next();
}



const verifyToken = (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["authorization"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

module.exports = { verifyToken };