const express = require('express');
const router = express.Router();

const home = require('./home.routes')
const products = require('./product.routes')
const categories = require('./categories.routes')
const users = require('./users.routes')

router.use('/', home);
router.use('/products', products);
router.use('/categories', categories);
router.use('/users', users);

module.exports = router;
