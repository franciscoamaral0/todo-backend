const { Router } = require('express')
const Todo = require('../models/todo')
const controllerTodo = require('../controller/todo.controller')
const auth = require('../controller/token.controller')


const router = Router()

router.get('/todo', controllerTodo.getAllTodos )
router.post('/todo', controllerTodo.createTodo)
router.put('/todo/:id', controllerTodo.editTodo)
router.delete('/todo/:id', controllerTodo.deleteTodo)

module.exports = router