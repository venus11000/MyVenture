const SubCategory = require("../models/subCategory");

exports.createSubCategory = (req, res) => {
    SubCategory.create(req.body)
        .then(subCategory => res.json(subCategory))
        .catch(error => res.status(400).json({ "message": "Unable to Create", error }));
}

exports.getSubCategories = (req, res) => {
    SubCategory.find({})
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.status(400).json({ "message": "Unable to fetch", error });
        })
}

exports.getSubCategoriesById = (req, res) => {
    SubCategory.findById(req.params.id)
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.status(400).json({ "message": "Unable to fetch", error });
        })
}

exports.removeSubCategory = (req, res) => {
    let subCategoryId = req.params.id;
    SubCategory.remove({ _id: subCategoryId })
        .then(category => res.json(category))
        .catch(error => res.status(400).json({ "message": "Unable to Remove", error }));
}

exports.modifySubCategory = (req, res) => {
    let subCategoryId = req.params.id;
    SubCategory.updateOne({ _id: subCategoryId }, req.body, { upsert: true })
        .then(category => res.json(category))
        .catch(error => res.status(400).json({ "message": "Unable to Modify", error }));
}

exports.getSubCategoriesByCategoryId = (req, res) => {
    let categoryId = req.params.categoryId;
    SubCategory.find({ categoryId: categoryId })
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.status(400).json({ "message": "Unable to fetch", error });
        })
}
