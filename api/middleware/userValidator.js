const validator = require('express-validator');

exports.login = [
    validator.body('inputEmail').isLength({min: 1}).trim().withMessage('Username must be entered').isAlphanumeric().withMessage('Username must be alphanumeric').escape(),
    validator.body('inputPassword').isLength({min:1}).trim().withMessage('Password must be entered').escape()
]
