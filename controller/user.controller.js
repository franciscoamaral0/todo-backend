const User = require('../models/User')
const bcrypt = require('bcryptjs')


const userController = { 
    create: async function (req, res)  {
        const {username, password} = req.body
        
        const user = new User({
            username, 
            password: bcrypt.hashSync(password)
        })
        console.log(user)
        
        try {
            const newUser = await user.save()
            res.send(newUser)
        } catch (error) {
            res.status(500).send(error)
        }
        
    },

    getAllusers: async function  (req, res){
        try {
            const users = await User.find()
            res.status(200).json(users)
    
        } catch (error) {
            res.status(500).json(error)
        }
    },

    addFavoutireTodo: async function (req, res){
        const {todoid} = req.params
        const {_id} = req.user
        try {
            const addTodo = await User.findByIdAndUpdate(_id, { $push: {userTodos: todoid} }, {new: true} )
    
            res.status(200).send(addTodo)
            
        } catch (error) {
            res.status(500).send(error)
        }
    }

}


module.exports = userController