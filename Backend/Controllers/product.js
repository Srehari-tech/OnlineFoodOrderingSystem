const config = require('../config/DB_Config');
const con = config.con;

exports.getAllProducts = (req, res) => {
  con.query('SELECT * FROM PRODUCTS', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
