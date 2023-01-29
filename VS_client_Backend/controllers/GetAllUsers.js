const Register = require('../models/Registers')

const getAllUsers = function(req, res){
    Register.find({}, function (err, allDetails) {
        if (err) {
          console.log(err);
          res.json({err:true, msg: "something went wrong"})
        } else {
          res.json({err: false, msg: allDetails});
        }
      });
}

module.exports = getAllUsers