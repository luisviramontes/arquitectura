var router = require('express').Router()
var users = require('./users')

router.use('/users', users)

router.get('/public', function (req, res) {
 // res.sendFile(__dirname + '/index.html');
  res.render("index.html");
  //res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

module.exports = router