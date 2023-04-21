const Register = require('../models/Registers')
const AccountLoginHistory = require('../models/AccountLoginHistory')

const forgetPasswordComplete = function(req, res){
    console.log(req.body.password)
    console.log(req.body.email)
    Register.findOneAndUpdate({uemail:req.body.email}, {upassword: req.body.password}, function(err, docs){
        if(err){
            res.render("ResetPasswordComplete", {msg:"Cannot change password Right Now. Try Again Later"});
        }else{
            console.log(docs)
            res.render("ResetPasswordComplete", {msg:"Password Updated Successfully"});

        }
    })
}

module.exports = forgetPasswordComplete