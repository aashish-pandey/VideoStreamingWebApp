const Admin = require('../models/RegisterAdmin')

const admin = function(req, res){

    const admin = new Admin({
        name:req.body.name,
        email: req.body.email,
        password: req.body.password,
        department:req.body.department
    })

    admin.save(function(err){
        if(err){
            console.log(err)
            res.json({err:true,
            msg: "Something went wrong!!Cannot add new admin!!Try another email id"})
        }
        else{
            res.json({err:false, msg: "Admin registered successfully"})
        }
    })
        
}


module.exports = admin