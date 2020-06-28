const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UserModel = new Schema({
    name: {
        type: String,
        required: [true, 'The name is requerid']
    },
    email: {
        type: String,
        required: [true, 'The email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'the password is required']
    }
})

UserModel.plugin(uniqueValidator, { message: '{PATH} it must be unique' });
module.exports = mongoose.model('User', UserModel);