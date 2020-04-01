const express = require('express');
const app = express();
const dotEnv = require('dotenv');
const morgan = require('morgan');
const logger = require('./middleware/logger');
const bootcamps = require('./routes/bootcamp');


dotEnv.config({path: './config/config.env'});

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/api/v1/bootcamp', bootcamps);


const port = process.env.PORT || 30025;
app.listen(port, () => console.log(`the server is running on port ${process.env.NODE_ENV} ${port}`));
