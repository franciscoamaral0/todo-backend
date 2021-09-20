const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')



const controllerAuthentication = {

    singup: async function (req, res) {
        const {username, password} = req.body
        
        try {
            const user = await User.findOne({username})
            if(user){
                throw new Error ('User name already exists');
            }
            const salt = bcrypt.hashSync(password)
            const newUser = await User.create({
                username,
                password: salt
            })
            res.status(201).json({
                username: newUser.username
            })
        }
        catch (error){
            console.log(error)
            res.status(500).json({msg: 'Error while create user', error})
        }
    },

    login: async function (req, res) {
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
            const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, {expiresIn: 21600})
            res.header('auth_token', token)

            res.status(200).json({
                msg: `user ${user.username} logged`
            })
        } catch (error) {
            res.status(400).json({msg: error.message})
        }
    }
}

module.exports = controllerAuthentication