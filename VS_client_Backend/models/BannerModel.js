const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bannerUploadSchema = new Schema({
    name:{
        type: String,
    },
    releaseYear:{
        type: String,
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
}, {timestamps:true})

const BannerUpload = mongoose.model('Banner', bannerUploadSchema)

module.exports = BannerUpload