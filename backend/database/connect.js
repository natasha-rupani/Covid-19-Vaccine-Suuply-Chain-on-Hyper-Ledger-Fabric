const mongoose = require('mongoose');
const initMongo = async (mongoURI) => {
  
    try{
        await mongoose.connect(mongoURI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        });
        const db = mongoose.connection;
        db.on('error',console.error.bind(console,'MongoDB connection error'));
    }   
    catch(e){
        console.log(e);
        throw e;
    }
};

module.exports = initMongo;