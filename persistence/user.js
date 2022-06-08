const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String, require: true, max: 150 },
    age: { type: Number, require: true }
})

//mongoose.exports = mongoose.model('User', UserSchema)

var User = mongoose.model('User', UserSchema)

module.exports = User
