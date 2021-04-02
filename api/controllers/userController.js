const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const usersModel = require('../models/users');
const networkConnection = require('../utils/networkConnection');


exports.login = async (req, res) => {
    const name = req.body.inputEmail;
    const password = req.body.inputPassword;
    
    if (!name || !password) {
        return res.status(401).json({ message: 'Username and Password are not correct!' });
    }

    const user = await usersModel.findOne({ name });
    if (!user) {
        return res.status(401).json({ message: 'Invalid Username' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid password' });
    }

    const userJWT = jwt.sign({ name }, process.env.PRIVATE_KEY, { algorithm: 'HS256' });

    res.status(200).json({ userJWT, address: user.address, userType: user.userType });
}
