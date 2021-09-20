const mongoose = require('mongoose')



const userSchema = mongoose.Schema (
    {
        username: { type: String, unique: true, required: true},
        password: { type: String, required: true},
        userTodos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'todo'}],
        todos: [
            {type: mongoose.Schema.Types.ObjectId, ref: 'todo'}
        ]

    },
    {
        timestamps: true
    }

)

module.exports = mongoose.model('User', userSchema)