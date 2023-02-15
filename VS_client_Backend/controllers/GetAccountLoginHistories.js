const AccountLoginHistory = require('../models/AccountLoginHistory')

const getAccountLoginHistories = function(req, res){
    AccountLoginHistory.find({uemail: req.params.email}, function(err, details){
        if(err){
            console.log("Error in get Account Login  Histories");
            res.status(500).send({err:true, msg: "Error in get account Login histories"})
        }else{
            console.log("From login Histories")
            console.log(details)
            res.status(200).send({err:false, msg: details})
        }
    })
}

module.exports = getAccountLoginHistories