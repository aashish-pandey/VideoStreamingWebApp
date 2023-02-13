const AccountLoginHistory = require('../models/AccountLoginHistory')

const OnlineStatus = function(req, res){

    AccountLoginHistory.findOneAndUpdate({_id: req.body.sessionId}, {updatedAt: new Date(Date.now()), active: "true"}, function(err, details){
        if(err)
            res.status(500).send({err: true, msg: "update Not Successfull in online Status", errMsg: err})
        else
            res.status(200).send({err: false, msg: "update Successfull in online Status"})

    })
}

module.exports = OnlineStatus