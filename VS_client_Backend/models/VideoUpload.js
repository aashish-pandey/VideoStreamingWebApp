const mongoose = require('mongoose')

const Schema = mongoose.Schema

const videoUploadSchema = new Schema({
    name:{
        type: String,
    },
    genre:{
        type: String,
    },
    releaseYear:{
        type: String,
    },
    location:{
        type: String,
    },
    quality:{
        type: String,
    }
}, {timestamps:true})

const VideoUpload = mongoose.model('videoUpload', videoUploadSchema)

module.exports = VideoUpload