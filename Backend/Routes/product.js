const express = require('express');
const { getAllProducts } = require('../Controllers/product');
const router = express.Router();


router.get('/products', getAllProducts);

module.exports = router;
