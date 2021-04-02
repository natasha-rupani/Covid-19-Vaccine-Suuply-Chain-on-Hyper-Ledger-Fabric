const app = require('./app');

const initMongo = require('./database/connect');

initMongo(process.env.MONGODB_URI_DEV);

app.listen(process.env.PORT || 5000);