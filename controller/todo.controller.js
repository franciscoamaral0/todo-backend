const Todo = require('../models/todo')



const controllerTodo = {

    getAllTodos: async function (req,res) {
        try {
            const todos = await Todo.find()
            res.status(200).json(todos)
        } catch (error) {
            res.status(500).json({msg: `Server error ${error}`})
        }
    },

    createTodo: async function (req, res) {
        const payload = {...req.body, user: req.user._id}
        
        try {
            const newTodo = await Todo.insertMany(payload)
            res.status(201).json(newTodo)
        } catch (error) {
           res.status(500).json({msg: `Sever error ${error}`})
            
        }
    },

    editTodo: async function (req, res) {
        const _id = req.params.id 
        const payload = req.body
        try {
            const updateTodo = await Todo.findByIdAndUpdate({_id}, payload, {new: true})
            res.status(200).json(updateTodo)
            
        } catch (error) {
            res.status(500).json({msg: `Error during update item ${error}`})
        }
    },

    deleteTodo: async function (req, res) {
        const _id = req.params.id 
        try {
            await Todo.findByIdAndDelete(_id)
            res.status(204).json({msg: `Apagado com sucesso`})
        } catch (error) {
            res.status(500).json({msg: `Error during deleting todo list ${error}`})
        }
        }

}

module.exports = controllerTodo
