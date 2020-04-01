exports.getBootcamps = (req, res, next ) => {
    res.status(200).json({success: true, msg: 'show all bootcamps', hello: req.hello});
};
exports.getBootcamp = (req, res, next ) => {
    res.status(200).json({success: true, msg: `show bootcamp ${req.params.id}`});
};
exports.createBootcamp = (req, res, next ) => {
    res.status(200).json({success: true, msg: 'create new bootcamps'});
};
exports.updateBootcamp = (req, res, next ) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`});
};
exports.deleteBootcamp = (req, res, next ) => {
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`});
};
