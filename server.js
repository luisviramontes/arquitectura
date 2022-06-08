var express = require('express') //llamamos a Express
var app = express()           
var cors = require('cors')    
var bodyParser = require('body-parser')

var port = process.env.PORT || 8080  // establecemos nuestro puerto

/*toda la configuración de bbdd la hacemos en un fichero a parte*/
require('./db')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.engine('html', require('ejs').renderFile);


// para establecer las distintas rutas, necesitamos instanciar el express router
var router = require('./routes')  
app.use('/', router)


// iniciamos nuestro servidor
app.listen(port)
console.log('API ITZ escuchando en el puerto ' + port)

/*lo añado al final de app/server.js:*/
module.exports = app