const express = require('express');
const app = express();
const dotEnv = require('dotenv');
const morgan = require('morgan');
const logger = require('./middleware/logger');
const bootcamps = require('./routes/bootcamp');
const colors = require('colors');
const connectDB = require('./config/db');

dotEnv.config({path: './config/config.env'});
connectDB();
app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/api/v1/bootcamp', bootcamps);

const port = process.env.PORT || 30025;
const server = app.listen(port, () =>
    console.log(`the server is running on port ${process.env.NODE_ENV} ${port}`.yellow.bold));

process.on('UnhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    server.close(() => process.exit(1));
});
