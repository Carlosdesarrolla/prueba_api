const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');
//router.get('/', (req,res)=>{res.end('hello World')});
router.get('/', indexController.index);

router.get('/products', indexController.getProducts);

router.post('/new-product', indexController.addProduct);

module.exports = router;