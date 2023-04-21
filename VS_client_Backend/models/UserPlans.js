const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserPlanSchema = new Schema({ 
    userEmail:{
        type: String,
        required: true,
    },
    activePlan:{
        type: String,
        required: true
    }
}, {timestamps: true})

const userPlan = mongoose.model('userPlan', UserPlanSchema)

module.exports = userPlan