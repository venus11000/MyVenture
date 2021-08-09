const express = require("express");
const router = express.Router();

const { createProduct, getProducts, modifyProduct, removeProduct, getProductsBy } = require("../controllers/product");

router.get("/list", getProducts);
router.post("/create", createProduct);
router.delete("/:id/remove", removeProduct);
router.put("/:id/edit", modifyProduct);
// router.get("/:categoryId/sub-categories", getSubCategoriesByCategoryId);

module.exports = router;