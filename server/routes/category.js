const express = require("express");
const router = express.Router();

const { getCategories, createCategory, removeCategory, modifyCategory } = require("../controllers/category");
const { getSubCategoriesByCategoryId } = require("../controllers/subCategory");

router.get("/list", getCategories);
router.post("/create", createCategory);
router.delete("/:id/remove", removeCategory);
router.put("/:id/edit", modifyCategory);
router.get("/:categoryId/sub-categories", getSubCategoriesByCategoryId);

module.exports = router;