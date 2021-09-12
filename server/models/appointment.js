const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "Product"
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        enum: ["open", "progressing", "solved", "closed"],
        default: "open"
    }
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);