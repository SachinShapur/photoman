// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
    password: String,
    isAdmin: Boolean,
    photoId: String,
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
}));