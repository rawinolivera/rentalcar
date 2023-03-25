const express = require('express');
const router = express.Router();

const carController = require('../controllers/car');

router.get('/', carController.getAll);

router.get('/:id', carController.getSingle);

router.post('/', carController.newcar);

router.put('/:id', carController.updatecar);

router.delete('/:id', carController.deletecar);

module.exports = router;