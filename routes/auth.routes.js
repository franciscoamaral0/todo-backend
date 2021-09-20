const {Router} = require('express')
const controllerAuthentication = require('../controller/auth.controller.js')

const router = Router()

router.post('/signup', controllerAuthentication.singup)

router.post('/login',  controllerAuthentication.login )

module.exports = router