const { Router } = require('express')
const User = require('../models/User')
const { route } = require('./todo.routes')

const router = Router()

router.post('/user', async (req, res) => {
    const payload = req.body
    try {
        const newUser = await User.create(payload)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({msg: 'Error while creating user'})
    }
})

router.get('/user', async (req, res) =>{
    try {
        const users = await User.find()
        res.status(200).json({users})

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router