const mongoose = require("mongoose");
// const crypto = require("crypto");
// const uuidv1 = require("uuid/dist/v1");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    },
    mobile: {
        type: String,
        trim: true,
        required: true,
        maxlength: 10,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    about: {
        type: String,
        trim: true
    },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
