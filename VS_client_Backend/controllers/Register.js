const Register = require('../models/Registers')

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
            Register.findOneAndUpdate({_id: details._id}, {MasterKey: details._id}, function(err){
                if(err){
                    res.status(500).json({err:true, msg:"Cannnot add new user now", errMsg: err})
                }else{
                    console.log("Registered succesfull")
                    res.status(200).json({err:false, msg:"User registered successfully"})
                }
            })
        }
    })
        
}


module.exports = register