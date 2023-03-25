const express = require('express');
const router = express.Router();
router.use('/', require('./swagger'));


router.use('/client', require('./client'))
router.use('/car', require('./car'))
router.use('/booking', require('./booking'))
router.use('/branch', require('./branch'))
router.use('/driverlicense', require('./client'))

module.exports = router;