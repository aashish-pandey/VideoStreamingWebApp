const Register = require('../models/Registers')

const getMyProfile = function(req, res){
    Register.find({ uemail: req.params.email }, function (err, allDetails) {
        if (err) {
          console.log(err);
          res.status(500).send({err:true, msg: "something went wrong"})
        } else {
          res.status(200).send({err: false, msg: allDetails});
        }
      });
}

module.exports = getMyProfile