const WatchHistory = require('../models/WatchHistory')

const watchHistory = async function(req, res){
    const uemail = req.body.uemail

    const data = await WatchHistory.find({userEmail: uemail}).sort({updatedAt: -1})
    res.status(200).send(data)
}

module.exports = watchHistory