const mongoose = require('mongoose');
var dev_db_url = "mongodb://localhost:27017/db_users";
//var dev_db_url = mongoose.connect('mongodb://localhost:27017/db_users');
var mongoDB = process.env.MONGODB_URI || dev_db_url;
//const { nextTick } = require('process');
//mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true });

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB error de conexion'));

var User = require('./user');

exports.user_create = function (req, res) {
    console.log(req.body.name);
    var user = new User({
        name: req.body.name,
        age: req.body.age
    })
    user.save(function (err) {
        if (err) {
            res.send(err)
            //  return next(err)
        }
        res.send({ 'message': 'OK' })
    })
}

exports.user_details = function (req, res) {

    User.findById(req.query.id, function (err, user) {
        if (err) return next(err)
        res.send.user

    })
}

exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.query.id, req, (err, user) => {
        if (err) {
            return next(err)
        }
        res.send.user + "USUARIO ACTUALIZADO";
    })
}

exports.delete_user= function(req, res){
    //obtenemos el id de la preticio para eliminar
    User.findByIdAndRemove(id, null, (err, user) => {
        if (err) {
            return next(err)
        }
        res.send.user + "USUARIO ACTUALIZADO";
    })
}