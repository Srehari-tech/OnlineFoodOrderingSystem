const express = require('express');
const config = require('../config/DB_Config');
const router = express.Router();

const con = config.con;

//GET ALL PRODUCTS
router.get('/', (req, res) => {
  con.query('SELECT * FROM PRODUCTS', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

//GET A SINGLE PRODUCT
router.get('/:id', (req, res) => {
  let id = req.params.id;
  con.query(`SELECT * FROM PRODUCTS WHERE product_id=${id}`, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

//ADD A NEW PRODUCT


module.exports = router;
