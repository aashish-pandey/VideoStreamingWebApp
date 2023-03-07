const Admin = require('../../models/RegisterAdmin')

const deleteAdmin = function(req, res){
    
    Admin.deleteOne({_id: req.body._id}, function(err){
        if(err){
            res.status(500).json({code:200, msg:err})
        }else{
            res.status(200).json({code:200, msg:"admin deletion successful"})
        }
    })

        
}


module.exports = deleteAdmin