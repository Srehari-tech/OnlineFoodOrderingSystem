const express = require('express');
const config = require('../Config/DB_Config');
const router = express.Router();

const con = config.con;

//GET ALL PRODUCTS
router.get('/', (req, res) => {
  let qr = 'SELECT * FROM PRODUCTS';
  con.query(qr, (err, result) => {
    if (err || result.length == 0) {
      return res.status(400).json({
        message: 'No products found',
      });
    }
    res.json(result);
  });
});

//GET A SINGLE PRODUCT
router.get('/:id', (req, res) => {
  let id = req.params.id;
  let qr = `SELECT * FROM PRODUCTS WHERE product_id=${id}`;
  con.query(qr, (err, result) => {
    if (err || result.length == 0) {
      return res.status(400).json({
        message: 'No products found',
      });
    }
    res.json(result);
  });
});

//ADD A NEW PRODUCT
router.post('/', (req, res) => {
  const { product_name, price, description, stock } = req.body;
  let qr = `INSERT INTO PRODUCTS (product_name,price,description,stock) VALUES ('${product_name}',${price},'${description}',${stock})`;
  con.query(qr, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(424).json({
        message: 'Failed to add the product',
      });
    }
    res.json({
      success: 'Successfully added new product',
    });
  });
});

//UPDATE A PRODUCT
router.put('/:id', (req, res) => {
  let id = req.params.id;
  const { product_name, price, description, stock } = req.body;
  const qr = `UPDATE PRODUCTS SET product_name='${product_name}',price=${price},description='${description}',stock=${stock} WHERE product_id=${id}`;
  con.query(qr, (err, result) => {
    if (err) {
      return res.json({
        message: 'Failed to update',
      });
    }
    res.json({
      success: 'Successfully updated the product',
    });
  });
});

// DELETE A PRODUCT
router.delete('/:id', (req, res) => {
  let id = req.params.id;
  let qr = `DELETE FROM PRODUCTS WHERE product_id=${id}`;
  con.query(qr, (err, result) => {
    if (err) {
      return res.json({
        message: 'Failed to delete the product',
      });
    }
    res.json({
      success: 'Product deleted successfully',
    });
  });
});
module.exports = router;
