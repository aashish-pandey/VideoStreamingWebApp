const mongoose = require('mongoose')

const Schema = mongoose.Schema


const AccountLoginSchema = new Schema({
    uemail:{
        type: String, 
        required: true
    },
    ip:{
        type:String
    },
    browser:{
        type:String
    },
    os:{
        type: String
    },
    device:{
        type: String
    },
    active:{
        type: String
    }, 
}, {timestamps: true})

const accountLoginHistory = mongoose.model('accountLoginHistory', AccountLoginSchema)

module.exports = accountLoginHistory