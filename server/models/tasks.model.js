const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

var taskSchema = new Schema({
    tittle: {
        type: String,
        required: [true, 'The tittle is requerid']
    },
    taskPriority: {
        type: String,
        default: 'Media'
    },
    dueDate: {
        type: Date,
        default: new Date().getDate()
    },
    postedBy: {
        type: ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Task', taskSchema)