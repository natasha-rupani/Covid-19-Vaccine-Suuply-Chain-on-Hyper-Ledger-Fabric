const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;
const salt = 10;
const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    registration_date: {
        type: Date,
        required: true,
        default: new Date()
    },
    userType:{
        type: Number, //1 -Admin, 2- Distributor, 3 - Manufacturer, 4 - Transporter
        required: true
    }
});

UserSchema.pre('save', function (next) {
    // Check if document is new or a new password has been set
    if (this.isNew || this.isModified('password')) {
        // Saving reference to this because of changing scopes
        const document = this;
        bcrypt.hash(document.password, salt,
            function (err, hashedPassword) {
                if (err) {
                    next(err);
                }
                else {
                    document.password = hashedPassword;
                    next();
                }
            });
    } else {
        next();
    }
});


UserSchema.path('name').validate(function (name) {
    return name.length <= 100;
}, 'Name max length must be 100');

UserSchema.path('address').validate(function (address) {
    address = address.replace('0x', '');
    return address.length === 40;
}, 'Address length must be 40');

module.exports = mongoose.model('Users',UserSchema);
