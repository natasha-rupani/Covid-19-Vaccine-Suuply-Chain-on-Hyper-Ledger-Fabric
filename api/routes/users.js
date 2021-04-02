var express = require('express');
var router = express.Router();
const userValidator = require('../middlewares/userValidator');
const userController = require('../controllers/usersController');
const { validate } = require('../middlewares/validate');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', userValidator.login, validate, userController.login);

module.exports = router;
