const Category = require("../models/category");

exports.createCategory = (req, res) => {
    Category.create(req.body)
        .then(category => res.json(category))
        .catch(error => res.status(400).json({ "message": "Unable to Create", error }));
}

exports.getCategories = (req, res) => {
    Category.find({})
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.status(400).json({ "message": "Unable to fetch", error });
        })
}

exports.getCategoryById = (req, res) => {
    Category.findById(req.params.id)
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.status(400).json({ "message": "Unable to fetch", error });
        })
}

exports.removeCategory = (req, res) => {
    let categoryId = req.params.id;
    Category.remove({ _id: categoryId })
        .then(category => res.json(category))
        .catch(error => res.status(400).json({ "message": "Unable to Remove", error }));
}

exports.modifyCategory = (req, res) => {
    let categoryId = req.params.id;
    Category.updateOne({ _id: categoryId }, req.body, { upsert: true })
        .then(category => res.json(category))
        .catch(error => res.status(400).json({ "message": "Unable to Modify", error }));
}

exports.getCategoriesAndSubCategories = (req, res) => {
    Category.find({})
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.status(400).json({ "message": "Unable to fetch", error });
        })
}
