const { Router } = require('express')
const Todo = require('../models/todo')


const router = Router()

router.get('/todo', async (req,res) =>{
    try {
        const todos = await Todo.find()
        res.status(200).json(todos)
    } catch (error) {
        res.status(500).json({msg: `Server error ${error}`})
    }
})


router.post('/todo', async (req, res) => {
    // if(!req.body.title){
    //     return res.status(400).json({msg:'missing title field'})
    // }
    try {
        const newTodo = await Todo.insertMany(req.body)
        res.status(201).json(newTodo)
    } catch (error) {
       res.status(500).json({msg: `Sever error ${error}`})
        
    }
})


router.put('/todo/:id', async (req, res) => {
    const _id = req.params.id 
    const payload = req.body
    try {
        const updateTodo = await Todo.findByIdAndUpdate({_id}, payload, {new: true})
        res.status(200).json(updateTodo)
        
    } catch (error) {
        res.status(500).json({msg: `Error during update item ${error}`})
    }
})

router.delete('/todo/:id', async (req, res) => {
    const _id = req.params.id 
    try {
        await Todo.findByIdAndDelete(_id)
        res.status(204).json({msg: `Apagado com sucesso`})
    } catch (error) {
        res.status(500).json({msg: `Error during deleting todo list ${error}`})
    }
    })

    module.exports = router