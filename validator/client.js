const { check } = require('express-validator') //TODO <---
const { validateResult } = require('../validator/validateHelper')

const validateCreate = [ //TODO:name, age, email
    check('firstName')
        .exists()
        .not()
        .isEmpty()
        .not()
        .isNumeric(),

        check('lastName')
        .exists()
        .not()
        .isEmpty()
        .not()
        .isNumeric(),

    check('email')
        .exists()
        .isEmail(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }
