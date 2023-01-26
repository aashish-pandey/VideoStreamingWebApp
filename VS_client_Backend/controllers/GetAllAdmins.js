const Admin = require('../models/RegisterAdmin')

const getAllAdmins = function(req, res){
    Admin.find({}, function (err, allDetails) {
        if (err) {
          console.log(err);
          res.json({err:true, msg: "something went wrong"})
        } else {
          res.json({err: false, msg: allDetails});
        }
      });
}

module.exports = getAllAdmins