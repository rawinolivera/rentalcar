const express = require('express');
const router = express.Router();

const bookingController = require('../controllers/booking');

router.get('/', bookingController.getAll);

router.get('/:id', bookingController.getSingle);

router.post('/', bookingController.newbooking);

router.put('/:id', bookingController.updatebooking);

router.delete('/:id', bookingController.deletebooking);

module.exports = router;