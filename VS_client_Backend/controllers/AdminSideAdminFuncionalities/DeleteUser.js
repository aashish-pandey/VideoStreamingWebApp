const User = require('../../models/Registers')

const deleteUser = function(req, res){

    User.deleteOne({_id: req.body._id}, function(err){
        if(err){
            res.status(500).json({code:200, msg:err})
        }else{
            res.status(200).json({code:200, msg:"User deleted successfully"})
        }
    })
}

module.exports = deleteUser