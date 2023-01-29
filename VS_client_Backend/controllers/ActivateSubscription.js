const UserPlan = require('../models/UserPlans')

const userPlan = function(req, res){

    console.log(req.body.userEmail)
    const plan = new UserPlan({
        userEmail: req.body.userEmail,
        activePlan: req.body.activePlan
    })

    plan.save(function(err){
        if(err){
            console.log(err)
            res.json({err:true,
            errVal: err})
        }
        else{
            res.json({err:false})
        }
    })
}

module.exports = userPlan