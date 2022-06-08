var Users = require('../models/Users')

exports.create = function (req, res) {
    console.log(req.query);
    var user = new Users(req.query)
    user.save(function (err, user) {
        if (err) {
            return res.status(500).json({
                message: 'Error al guardar la user',
                error: err
            })
        }
        return res.json(user);
        /*
        return res.status(201).json({
            message: 'saved',
            _id: user._id
        })
        */
    })
}

exports.list = function (req, res) {
    Users.find(function (err, users) {
        if (err) {
            return res.status(500).json({
                message: 'Error obteniendo los usuarios'
            })
        }
        return res.json(users)
    })
};

exports.update = function (req, res) {
    var id = req.params.id
    Users.findOne({ _id: id }, function (err, user) {
        if (err) {
            return res.status(500).json({
                message: 'Se ha producido un error al guardar el user',
                error: err
            })
        }
        if (!user) {
            return res.status(404).json({
                message: 'No hemos encontrado el user'
            })
        }
        user.name = req.query.name
        user.age = req.query.age
        user.save(function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error al guardar el user'
                })
            }
            if (!user) {
                return res.status(404).json({
                    message: 'No hemos encontrado el user'
                })
            }
            return res.json(user)
        })
    })
};

exports.remove = function (req, res) {
    var id = req.params.id
    Users.findByIdAndRemove(id, function (err, user) {
        if (err) {
            return res.json(500, {
                message: 'No hemos encontrado el usuario'
            })
        }
        return res.json(user)
    })
}
