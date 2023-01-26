const PlanAvailable = require('../models/PlanAvailable')


const planAvailable = function(req, res){
    PlanAvailable.find({}, function (err, allDetails) {
        if (err) {
          console.log(err);
          res.json({err:true, msg: "something went wrong"})
        } else {
          res.json({err: false, msg: allDetails});
        }
      });
}

module.exports = planAvailable