const Admin = require('../models/RegisterAdmin')

const login = function(req, res){


    Admin.find({email: req.body.email}, function(err, docs){
        if(err){
            console.log(err)
            res.json({err:true, msg: "Something went wrong"})
        }else{
            console.log(docs)
            if(docs.length == 0){
                res.json({err:true, msg: "Email address does not exist"})
            }
            else if(docs[0].password == req.body.password){
                res.json({err:false, msg: "Access granted"})
            }else{
                res.json({err:true, msg: "Password is incorrect"})
            }
        }
    })

}

module.exports = login;