const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const VaccineSchema = Schema({
    serialNo:{
        type:String,
        required: true
    },
    manufacturer:{
        type: String,
        required:true
    },
    thermal:{
        type: Number,
        required : true
    },
});

module.exports = mongoose.model('Vaccine',VaccineSchema);
