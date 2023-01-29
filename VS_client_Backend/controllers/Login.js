const Register = require('../models/Registers')

const login = function(req, res){


    Register.find({uemail: req.body.uemail}, function(err, docs){
        if(err){
            console.log(err)
            res.json({err:true, msg: "Something went wrong"})
        }else{
            console.log(docs)
            if(docs.length == 0){
                res.json({err:true, msg: "Email address does not exist"})
            }
            else if(docs[0].upassword == req.body.upass){
                res.json({err:false, msg: "Access granted"})
            }else{
                res.json({err:true, msg: "Password is incorrect"})
            }
        }
    })

}

module.exports = login;