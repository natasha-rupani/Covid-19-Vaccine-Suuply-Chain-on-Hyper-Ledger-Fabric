const express = require('express');

const manufacturer_controller = require('../controllers/manufacturerController');

const routes = express.Router();

routes.post('/transferVaccine', manufacturer_controller.transferBattery);

routes.post('/makeVaccine', manufacturer_controller.makeVaccine);

module.exports = routes;
