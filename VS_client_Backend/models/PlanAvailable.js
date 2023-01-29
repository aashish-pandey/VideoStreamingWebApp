const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PlanAvailableSchema = new Schema({
    planName:{
        type: String, 
        required: true,
    },
    monthlyPrice:{
        type: String,
        required: true
    },
    noOfDevice:{
        type: String, 
        required: true
    }

})

const planAvailable = mongoose.model('planAvailable', PlanAvailableSchema)

module.exports = planAvailable