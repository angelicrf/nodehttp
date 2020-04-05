const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config({path: './config/config.env'});
const Bootcamp = require('./models/Bootcamp');
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});
const bootcamps = JSON.parse(fs.readFileSync(
    `${__dirname}/_data/bootcamps.json`,
    'utf-8'));
const importData = async () => {
    try{
        await Bootcamp.create(bootcamps);
        console.log('Data imported...'.green.inverse);
        process.exit();
    }catch (e) {
        console.log(e);
    }
};
const deleteData = async () => {
    try{
        await Bootcamp.deleteMany();
        console.log('Data deleted...'.red.inverse);
        process.exit();
    }catch (e) {
        console.log(e);
    }
};
if(process.argv[2] === '-i'){
    importData();
}
if(process.argv[2] === '-d'){
    deleteData();
}
