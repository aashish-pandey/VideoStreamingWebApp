const UserPlans = require('../models/UserPlans')

const subscriptionStatus = function(req, res){
    UserPlans.find({userEmail: req.body.uemail}, function(err, docs){
        if(err){
            console.log(err)
            res.json({err:false, msg:"something went wrong"})
        }else{
            if(docs.length == 0){
                res.json({err:true, msg: "You have not taken our subscription"})
            }else{
                res.json({err:false, msg:"You have taken our subscription"})
            }
        }
    })
}

module.exports = subscriptionStatus