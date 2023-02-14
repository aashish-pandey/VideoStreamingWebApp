const Register = require('../models/Registers')

const SetHomeAddress = function(req, res){
    console.log("In home address")
    console.log(req.body.ip)
    Register.findOneAndUpdate({uemail:req.body.email}, {HomeIpAddress: req.body.ip}, function(err, data){
        if(err){
            res.status(500).json({err:true, msg: "something went wrong in setting your home address", errMsg: err})
        }else{
            res.status(200).json({err:false, msg: "Home Address was set successfully", data:data})
        }
    })

}

module.exports = SetHomeAddress