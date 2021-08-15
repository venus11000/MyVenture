const User = require("../models/user");
const jwt = require("jsonwebtoken");            //  to generate signed user
const expressJwt = require("express-jwt");      //  for authorization check
// const { errorHandler } = require('../helpers/dbErrorHandler');
// const { validateMobileNumber } = require("../helpers/common");

exports.signup = (req, res) => {
    let user = new User(req.body);

    user.save()
        .then(user => {
            res.send({
                "message": "successfully signup!",
                user
            })
        })
        .catch(error => {
            res.status(400).json({ "message": "Unable to register", error });
        });
}


const getToken = (user) => {
    let token = jwt.sign({
        user_id: user._id, email: user.email
    }, "SECRET", {
        expiresIn: "2h"
    });

    return token;
}

exports.signin = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    //  generate token
                    let token = getToken(user);
                    return res.send({
                        // user,
                        token
                    })
                }
            } else {
                return res.status(400).json({ "message": "something went wrong" });
            }
        })
        .catch(error => {
            return res.status(400).json({ "message": "Email id is not registed!", error });
        });
}

exports.signout = (req, res) => {
    res.clearCookie("authToken");
    return res.json({ message: "Successfully Logout" });
}

exports.authenticate = (req, res) => {
    if (req.headers && req.headers.authorization) {
        const token = req.headers.authorization;
        jwt.verify(token, "SECRET", (err, decoded) => {
            if (err || !decoded) {
                return res.status(401).json({ "message": "Invalid Token!" });
            }
            User.findById(decoded.user_id, (err, user) => {
                if (err || !user) {
                    return res.status(401).json({ "message": "Invalid Token!" });
                }
                let { _id, name, email, role } = user;
                return res.json({ token, user: { _id, name, email, role } });
            })
        })
    }
}

exports.userById = (req, res) => {
    User.findById(req.param._id, (err, user) => {
        if (err || !user) {
            return res.status(401).json({ "message": "Invalid User!" });
        }
        let { _id, name, email, role } = user;
        return res.json({ token, user: { _id, name, email, role } });
    });
}