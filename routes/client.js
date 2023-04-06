const express = require('express');
const router = express.Router();
const{validateCreate} = require('../validator/client')



const clientController = require('../controllers/client');

router.get('/', clientController.getAll);

router.get('/:id', clientController.getSingle);

router.post('/', validateCreate, clientController.newClient);

router.put('/:id', validateCreate, clientController.updateClient);

router.delete('/:id', clientController.deleteClient);

module.exports = router;