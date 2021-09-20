const { Router } = require('express')
const auth = require('../controller/token.controller')

const userController = require('../controller/user.controller')

const router = Router()

router.post('/user', userController.create)

router.get('/user', userController.getAllusers)
router.get('/user/addtodo/:todoid',  userController.addFavoutireTodo)

module.exports = router