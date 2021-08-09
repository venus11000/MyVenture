const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }
});

module.exports = mongoose.model("SubCategory", subCategorySchema);