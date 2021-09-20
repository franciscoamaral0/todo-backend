require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDb = require('./config/db.connect')
const app = express()
const  todoRoutes = require('./routes/todo.routes')
const newUsers = require('./routes/user.routes')
const authRoutes = require('./routes/auth.routes')
const auth = require('./controller/token.controller')

// Connect to DataBase
connectDb()


app.use(express.json())
app.use(cors())


// Routes
app.use('/', newUsers)
app.use('/',  authRoutes)
app.use(auth)
app.use('/',  todoRoutes)











app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))