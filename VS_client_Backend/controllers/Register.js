const Register = require('../models/Registers')
const AccountLoginHistory = require('../models/AccountLoginHistory')

const register = function(req, res){

    const register = new Register({
        
        uemail: req.body.uemail,
        upassword: req.body.upass,
        HomeIpAddress: "",
        MasterKey: ""
    })

    register.save(function(err, details){
        if(err){
            console.log(err)
            res.json({err:true,
            errVal: err})
        }
        else{

            const accountLogin = new AccountLoginHistory({
                uemail: req.body.uemail,
                ip: '',
                browser: '',
                os: '',
                device: '',
                active: 'true',
            })

            accountLogin.save(function(err, data){
                if(err){
                    res.status(500).json({err:true, msg:"Error in history saving in the register process"})
                }else{
                    Register.findOneAndUpdate({_id: details._id}, {MasterKey: data._id}, function(err){
                        if(err){
                            res.status(500).json({err:true, msg:"Cannnot add new user now", errMsg: err})
                        }else{
                            console.log("Registered succesfull")
                            res.status(200).json({err:false, msg:"User registered successfully", sessionId: data._id})
                        }
                    })
                }
            })

        }
    })
        
}


module.exports = register