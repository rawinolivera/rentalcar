const express = require('express');
const router = express.Router();

const licenseController = require('../controllers/license');

router.get('/', licenseController.getAll);

router.get('/:id', licenseController.getSingle);

router.post('/', licenseController.newlicense);

router.put('/:id', licenseController.updatelicense);

router.delete('/:id', licenseController.deletelicense);

module.exports = router;