const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

exports.getBootcamps = asyncHandler(async (req, res, next ) => {

        const bootcamps = await Bootcamp.find();
        res.status(200).json({success: true,
            data: bootcamps,
            msg: 'show all bootcamps',
            count: bootcamps.length});

});
exports.getBootcamp = asyncHandler(async (req, res, next ) => {

        const bootcamp = await Bootcamp.findById(req.params.id);
        if(!bootcamp) {
            return next(new ErrorResponse(`Bootcamp not found with Id of ${req.params.id}`, 404));
        }
        res.status(200).json({success: true,
            data: bootcamp,
            msg: `show bootcamp ${req.params.id}`});

});
exports.createBootcamp = asyncHandler(async (req, res, next ) => {

        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({success: true,
            data: bootcamp,
            msg: 'create new bootcamps'});

});
exports.updateBootcamp = asyncHandler( async (req, res, next ) => {

        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidator: true
        });
        if(!bootcamp){
            return next(new ErrorResponse(`Bootcamp not found with Id of ${req.params.id}`, 404));
        }
        res.status(200).json({success: true,
            data: bootcamp ,
            msg: `Update bootcamp ${req.params.id}`});
});
exports.deleteBootcamp = asyncHandler(async (req, res, next ) => {

        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
        if(!bootcamp){
            return next(new ErrorResponse(`Bootcamp not found with Id of ${req.params.id}`, 404));
        }
        res.status(200).json({success: true, data: {} ,msg: `Delete bootcamp ${req.params.id}`});

});
