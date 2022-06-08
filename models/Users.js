var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    name:{
        type: String,
        default:'',
        required: true
    },
    age:{
        type: Number,
        default: 0,
        required: true
    }
})

var User = mongoose.model('User', UserSchema)

module.exports = User