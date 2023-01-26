const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserAccountSchema = new Schema({

    userAccountID:{
        type: String,
        unique: true,
        required: true,
    },

})

const userAccount = mongoose.model('userAccount', UserAccountSchema)

module.exports = userAccount