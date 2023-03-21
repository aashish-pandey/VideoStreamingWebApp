const Admin = require('../../models/RegisterAdmin')

const editAdmin = function(req, res){
    
    Admin.findOneAndUpdate({name: req.body.name, email: req.body.email}, {password: req.body.nwpass}, function(err, docs){
        if(err){
            res.status(500).json({err:true, msg: "Cannot update this Admin password now"})
        }else{
            if(!docs){
                res.status(200).json({err:true, msg: "Updating this admin password failed. Maybe this admin doesn't exists"})
            }
            else{
                res.status(200).json({err:false, msg:"Admin password updated successfully"})
            }
        }
    })
}


module.exports = editAdmin