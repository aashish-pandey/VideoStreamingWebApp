const Register = require('../models/Registers')

const register = function(req, res){

    const register = new Register({
        
        uemail: req.body.uemail,
        upassword: req.body.upass
    })

    register.save(function(err){
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


module.exports = register