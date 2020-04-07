const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'please add a course']
    },
    description: {
        type:String,
        required: [true, 'please add a description']
    },
    weeks:{
        type:String,
        required: [true, 'please add a weeks']
    },
    tuition:{
        type:String,
        required: [true, 'please add a tuition ccst']
    },
    minimumSkill:{
        type:String,
        required: [true, 'please add a minimum Skill'],
        enum: ['beginner', 'intermediate', 'advanced']
    },
    scholarhipsAvailable: {
        type:Boolean,
        default: false
    },
    createdAt:{
        type:String,
        default: Date.now()
    },
    bootcamp:{
        type: mongoose.Schema.ObjectId,
        ref: 'Bootcamp',
        required: true
    }
});
module.exports = mongoose.model('Courses',CourseSchema);
