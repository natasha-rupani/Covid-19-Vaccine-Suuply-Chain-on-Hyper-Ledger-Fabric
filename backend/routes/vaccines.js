var express = require('express');
var router = express.Router();
const vaccineController = require('../controllers/vaccineController');

/* GET vaccines listing. */
router.get('/all', vaccineController.all);

module.exports = router;