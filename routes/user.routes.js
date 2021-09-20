const { Router } = require('express')

const userController = require('../controller/user.controller')

const router = Router()

router.post('/user', userController.create)

router.get('/user', userController.getAllusers)

module.exports = router