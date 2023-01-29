const WatchHistory = require('../models/WatchHistory')

const watchHistory = function(req, res){
    const uemail = req.body.uemail

    WatchHistory.find({userEmail: uemail}, function(err, data){
        if(err)res.status(500).send({code:200, msg: err})
        else{
            res.status(200).send(data)
            console.log(data)
            
        }
    })
}

module.exports = watchHistory