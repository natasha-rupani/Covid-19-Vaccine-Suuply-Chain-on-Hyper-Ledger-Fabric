const web3 = require('web3');
const vaccineModel = require('../database/models/vaccine');
const userModel = require('../database/models/users');

exports.all = async (req,res) => {
    // const user = await userModel.findOne({ address: req.cookies.address });
    // if (!user) {
    //     return res.status(401).json({ message: 'User not found' });
    // }
    const vaccines = await vaccineModel.find();
    res.status(200).json(vaccines);
}