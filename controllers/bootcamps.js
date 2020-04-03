const Bootcamp = require('../models/Bootcamp');

exports.getBootcamps = async (req, res, next ) => {
    try{
        const bootcamps = await Bootcamp.find();
        res.status(200).json({success: true,
            data: bootcamps,
            msg: 'show all bootcamps',
            count: bootcamps.length});
    }catch (e) {
        res.status(400).json({success: false});
    }
};
exports.getBootcamp = async (req, res, next ) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if(!bootcamp){
            return res.status(400)
                .json({success: false
                })
        }
        res.status(200).json({success: true,
            data: bootcamp,
            msg: `show bootcamp ${req.params.id}`});
    }catch (e) {
        res.status(400).json({success: false})
    }
};
exports.createBootcamp = async (req, res, next ) => {
    try{
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({success: true,
            data: bootcamp,
            msg: 'create new bootcamps'});
    }catch (e) {
        res.status(400).json({success: false});
    }
};
exports.updateBootcamp = async (req, res, next ) => {
    try{
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidator: true
        });
        if(!bootcamp){
            return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: bootcamp ,msg: `Update bootcamp ${req.params.id}`});
    }catch (e) {
        res.status(400).json({success: false});
    }
};
exports.deleteBootcamp = async (req, res, next ) => {
    try{
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
        if(!bootcamp){
            return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: {} ,msg: `Delete bootcamp ${req.params.id}`});
    }catch (e) {
        res.status(400).json({success: false});
    }
};
