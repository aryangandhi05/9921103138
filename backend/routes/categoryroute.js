const express = require("express");
const router = express.Router();
const categoryController = require("./categorycontroller");

router.get("/", categoryController.getCategories);
router.get("/:id", categoryController.getCategoryById);

module.exports = router;
