const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define routes for product-related operations
router.get('/categories/:categoryName/products', productController.getProducts);
router.get('/categories/:categoryName/products/:productId', productController.getProductById);

module.exports = router;
