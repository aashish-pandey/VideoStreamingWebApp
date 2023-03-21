const Admin = require('../../models/RegisterAdmin')

const changeAdminDepartment = function(req, res){
    
    Admin.findOneAndUpdate({name: req.body.name, email: req.body.email}, {department: req.body.nwdept}, function(err, docs){
        if(err){
            res.status(500).json({err:true, msg: "Cannot update this Admin department now"})
        }else{
            if(!docs){
                res.status(200).json({err:true, msg: "Updating this admin department failed. Maybe this admin doesn't exists"})
            }
            else{
                res.status(200).json({err:false, msg:"Admin department updated successfully"})
            }
        }
    })
}


module.exports = changeAdminDepartment