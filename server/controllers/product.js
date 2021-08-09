const Product = require("../models/product");
const multer = require("multer");
const { storage } = require("../helpers/file");

exports.createProduct = (req, res) => {
    let upload = multer({ storage: storage("products") }).array('attachments');

    upload(req, res, (err) => {
        // console.log("Test", req.files);
        // console.log("Request ---", req.body);
        // console.log("Request file ---", req.file);//Here you get file.
        /*Now do where ever you want to do*/
        if (err)
            return res.status(400).json({
                message: "Error while uploading image!",
                err
            });

        let attachmentsName = req.files.map(file => file.filename);

        let data = { ...req.body, attachments: attachmentsName };

        const product = new Product(data);
        product.save()
            .then(response => res.send(response))
            .catch(error => res.status(400).json({ "message": "Unable to create Product", error }));
    });
}

exports.getProducts = (req, res) => {
    let query = {};

    if (req.query.categoryId) query.catId = req.query.categoryId;

    if (req.query.subCategoryId) query.subCatId = req.query.subCategoryId;

    Product.find(query)
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.status(400).json({ "message": "Unable to fetch", error });
        })
}

exports.removeProduct = (req, res) => {
    let productId = req.params.id;
    Product.remove({ _id: productId })
        .then(category => res.json(category))
        .catch(error => res.status(400).json({ "message": "Unable to Remove", error }));
}

exports.modifyProduct = (req, res) => {
    let productId = req.params.id;
    Product.updateOne({ _id: productId }, req.body, { upsert: true })
        .then(category => res.json(category))
        .catch(error => res.status(400).json({ "message": "Unable to Modify", error }));
}

exports.getProductsBy = (req, res) => { // pending
    Product.find({})
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.status(400).json({ "message": "Unable to fetch", error });
        })
}
