const mongoose = require('mongoose')

const Schema = mongoose.Schema

const movieUploadSchema = new Schema({
    name:{
        type: String,
    },
    genre:{
        type: String,
    },
    releaseYear:{
        type: String,
    },
    casts:{
        type:String,
    },
    description:{
        type: String,
    },
    thumbnailLocation:{
        type:String,
    },
    movieLocation:{
        type:String,
    },
    quality:{
        type: String,
    }
}, {timestamps:true})

const MovieUpload = mongoose.model('movieUpload', movieUploadSchema)

module.exports = MovieUpload