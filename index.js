const express = require('express')
var body_parser = require('body-parser')
require('./db')
const cors = require('cors')

const app = express()


var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())
app.use(cors())


//const db_manager = require('./persistence/dbmanager')
var userController = require('./controller/usersController')

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)


/*
app.listen('/', (req, res) => {
    console.log('Api rest en ejecucuon en puerto 8080')
})
*/

app.post('/', (req, res) => {
    console.log('usess');
})

app.get('/', (req, res) => {
    res.send('Hola mundos')
})


app.post('/users', function (req, res) {
    userController.create(req, res)
})


/*
app.post('/user', (req, res) => {
    console.log(req);
    //  res.json({mensaje: req.body.name})  
    db_manager.user_create(req, res)
})

app.get('/user/', (req, res) => {
    db_manager.user_details(req, res)
})

app.put('/user/', (req, res) => {
    db_manager.user_update(req, res)
})

app.delete('/user/', (req, res) => {
    db_manager.delete_user(req, res)
})

*/
module.exports = app