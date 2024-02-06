const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters'],
        unique: true
    }, 
    completed: {
        type: Boolean,
        default: false
    },
    day: {
        type: Number,
        required: [true, 'must provide a day']
    },
    month: {
        type: Number,
        required: [true, 'must provide a month']
    },
    year: {
        type: Number,
        required: [true, 'must provide a year']
    },
    urgency: {
        type: Number,
        default: 3
    },
    category: {
        type: Number,
        default: 1
    },
    description: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model('Task', TaskSchema);