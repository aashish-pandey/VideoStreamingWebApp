const PlanAvailable = require('../models/PlanAvailable')


const getSubscriptionPlanByName = function(req, res){
    PlanAvailable.find({planName : req.params.name}, function (err, allDetails) {
        if (err) {
          console.log(err);
          res.json({err:true, msg: "something went wrong"})
        } else {
          res.json({err: false, msg: allDetails});
        }
      });
}

module.exports = getSubscriptionPlanByName