const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    cpf: String
})

module.exports = mongoose.model('User', UserSchema)