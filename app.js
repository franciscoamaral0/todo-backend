const { response } = require('express')
const express = require('express')
const cors = require('cors')
const PORT = 5000
const connectDb = require('./config/db.connect')
const app = express()
const  todoRoutes = require('./routes/todo.routes')
const newUsers = require('./routes/user.routes')
const authRoutes = require('./routes/auth.routes')

// Connect to DataBase
connectDb()


app.use(express.json())
app.use(cors())


// Routes
app.use('/', authRoutes)
app.use('/', todoRoutes)
app.use('/', newUsers)











app.listen(PORT, () => console.log(`Server running on port ${PORT}`))