const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '.env') });

const async = require('async');
const mongoose = require('mongoose');

const Users = require('../models/users');
const Vaccine = require('../models/vaccine');
const networkConnection = require('./networkConnection');

const InitiateMongoServer = require('../db/connection');
const mongoURI = process.env.MONGODB_URI_DEV;

InitiateMongoServer(mongoURI);

