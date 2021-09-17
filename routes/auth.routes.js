const {Router} = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')

const router = Router()

router.post('/signup', async (req, res) => {
    const {username, password} = req.body
    try {
        const user = await User.findOne({username})
        if(user){
            throw new Error ('User name already exists');
        }
        const salt = bcrypt.genSaltSync(10)
        const passwordHash = bcrypt.hashSync(password, salt)
        const newUser = await User.create({
            username,
            password: passwordHash
        })
        res.status(201).json({
            username: newUser.username
        })
    }
    catch (error){
        res.status(500).json({msg: 'Error while create user', error})
    }
})

router.post('/login', async (req, res) =>{
    const {username, password} = req.body
    try {
        const user = await User.findOne({username})
        if(!user){
            throw new Error ('User name not found')
        }
        const compareHash = bcrypt.compareSync(password, user.password)
        if(!compareHash){
            throw new Error ('User name or password incorrect')
        }
        res.status(200).json({
            msg: `user ${user.username} logged`
        })
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
})

module.exports = router