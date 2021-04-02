const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const networkConnection = require('../utils/networkConnection');

const vaccineModel = require('../models/vaccine');
const userModel = require('../models/users');

exports.all = async (req,res) => {
    // const user = await userModel.findOne({ address: req.cookies.address });
    // if (!user) {
    //     return res.status(401).json({ message: 'User not found' });
    // }
    const vaccines = await vaccineModel.find();
    res.status(200).json(vaccines);
}
