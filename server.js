const express = require('express');
const app = express();
const dotEnv = require('dotenv');

dotEnv.config({path: './config/config.env'});

app.get('/api/v1/bootcamp', (req, res) => {
 res.status(200).json({success: true, msg: 'show all bootcamps'});
});
app.post('/api/v1/bootcamp', (req, res) => {
    res.status(200).json({success: true, msg: 'create new bootcamps'});
});
app.put('/api/v1/bootcamp/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`});
});
app.delete('/api/v1/bootcamp/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`});
});
const port = process.env.PORT || 30025;
app.listen(port, () => console.log(`the server is running on port ${process.env.NODE_ENV} ${port}`));
