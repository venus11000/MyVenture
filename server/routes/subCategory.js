const express = require("express");
const router = express.Router();

const { getSubCategories, createSubCategory, removeSubCategory, modifySubCategory } = require("../controllers/subCategory");

router.get("/list", getSubCategories);
router.post("/create", createSubCategory);
router.delete("/:id/remove", removeSubCategory);
router.put("/:id/edit", modifySubCategory);

module.exports = router;