var router = require('express').Router()
var usersController = require ('../controller/usersController')

router.get('/search', function(req, res) {
    usersController.search(req, res)
})
router.get('/', function(req, res) {
    usersController.list(req, res)
})
router.get('/:id', function(req, res) {
    usersController.show(req, res)
})
router.post('/', function(req, res) {
    usersController.create(req, res)
})
router.put('/:id', function(req, res) {
    usersController.update(req, res)
})
router.delete('/:id', function(req, res) {
    usersController.remove(req, res)
})
module.exports = router