const express = require('express');
const router = express.Router();

const home = require('./home.routes')
const products = require('./product.routes')
const categories = require('./categories.routes')
const users = require('./users.routes')
const customers = require('./customer.routes');
const orders = require('./orders.routes');

router.use('/', home);
router.use('/products', products);
router.use('/categories', categories);
router.use('/users', users);
router.use('/customers', customers);
router.use('/orders', orders);

module.exports = router;
