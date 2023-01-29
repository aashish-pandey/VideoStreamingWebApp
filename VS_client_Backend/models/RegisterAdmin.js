const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema({
    name:{
        type: String
    },
    email: {
        type: String, 
        unique:true, 
        required:true
    },
    password: {
        type: String, 
        required:true
    },
    department:{
        type: String
    }
}, {timestamps: true})

const Admin = mongoose.model('Admin', userSchema)

module.exports = Admin;