const express = require('express');
const router = express.Router();

const branchController = require('../controllers/branch');

router.get('/', branchController.getAll);

router.get('/:id', branchController.getSingle);

router.post('/', branchController.newbranch);

router.put('/:id', branchController.updatebranch);

router.delete('/:id', branchController.deletebranch);

module.exports = router;