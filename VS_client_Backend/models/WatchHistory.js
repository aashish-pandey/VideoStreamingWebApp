const mongoose = require('mongoose')

const Schema = mongoose.Schema

const watchHistorySchema = new Schema({
    movieId:{
        type: String, 
        required: true
    },
    userEmail:{
        type: String, 
        required: true
    },
    lastWatchedByte:{
        type: String
    }
}, {timestamps:true})

const WatchHistory = mongoose.model('WatchHistory', watchHistorySchema)

module.exports = WatchHistory