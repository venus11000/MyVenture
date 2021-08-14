const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    bedrooms: {
        type: String,
        required: false
    },
    bathrooms: {
        type: String,
        required: false
    },
    areaOccupied: {
        type: String,
        required: true
    },
    attachments: {
        type: Array,
        default: [],
        required: false
    },
    catId: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    subCatId: {
        type: mongoose.Types.ObjectId,
        ref: "SubCategory"
    }
});

productSchema.index({
    title: 'text',
    description: 'text',
}, {
    weights: {
        name: 5,
        description: 1,
    }
})

module.exports = mongoose.model("Product", productSchema);