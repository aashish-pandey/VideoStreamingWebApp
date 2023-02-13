const AccountLoginHistory = require('../models/AccountLoginHistory')

const SetInactiveUSersOffline = function(){

    var InactiveTime = new Date(Date.now() - 30 * 1000) // Every login that has not been updated within 5 minutes will be set as offline

    AccountLoginHistory.updateMany({"updatedAt" : { $lt: InactiveTime}, active: "true"}, {active: "false"}, function(err, details){
        if(err){
            console.log("Error set inactive users offline data fetch mongodb");
        }else{
            console.log("set inactive users offline")
           
        }
    })
}

module.exports = SetInactiveUSersOffline