const mongoose = require('mongoose')

const Schema = mongoose.Schema

const globalChatSchema = new Schema({
    email: {
        type:String,
    },
    msg:{
        type:String,
    }

}, {timestamps:true})

const GlobalChat = mongoose.model('globalChats', globalChatSchema)
module.exports = GlobalChat