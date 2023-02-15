const UserPlans = require('../models/UserPlans')

const getMySubscription = function(req, res){
    UserPlans.find({userEmail: req.params.email}, function(err, docs){
        if(err){
            console.log(err)
            res.json({err:true, msg:"something went wrong"})
        }else{
            if(docs.length == 0){
                res.json({err:true, msg: "You have not taken our subscription"})
            }else{
                res.json({err:false, msg:docs})
            }
        }
    })
}

module.exports = getMySubscription