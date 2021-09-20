const User = require('../models/User')


const userController = { 
    create: async function (req, res)  {
        const {username, password} = req.body
        
        const user = new User({
            username, 
            password,
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
    }

}


module.exports = userController