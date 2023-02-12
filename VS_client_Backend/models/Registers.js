const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema({
    uemail: {
        type: String, 
        unique:true, 
        required:true
    },
    upassword: {
        type: String, 
        required:true
    },
    HomeIpAddress: {
        type: String
    },
    MasterKey:{
        type: String
    }
}, {timestamps: true})

const Register = mongoose.model('Register', userSchema)

module.exports = Register;
