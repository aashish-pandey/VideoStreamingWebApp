const WatchHistory = require('../models/WatchHistory')

const saveWatchHistory = function(req, res){
    userEmail = req.body.userEmail
    movieId = req.body.movieId

    const watchHistoryData = new WatchHistory({
        userEmail: userEmail, 
        movieId: movieId
    })

    // WatchHistory.save({movieId: movieId, userEmail: userEmail}, {movieId: movieId, userEmail: userEmail})

    WatchHistory.find({movieId: movieId, userEmail: userEmail}, function(err, data){
        if(err){
            console.log("Error in finding data in watch history")
            res.status(500).send({code:200, msg: "Error in finding data in watch history"})
        }else{
            // console.log(data.length)
            if(data.length == 0){
                console.log("Watch history is saved")
                watchHistoryData.save()
            }else{
                console.log("Watch history is updated")
                WatchHistory.findOneAndUpdate({_id: data[0]._id}, {movieId: movieId, userEmail: userEmail}, function(err){
                    if(err)console.log("Error in updating the record")
                })
                // watchHistoryData.update({movieId: movieId, userEmail: userEmail})
                // WatchHistory.updateOne({movieId: movieId, userEmail: userEmail}, {movieId: movieId, userEmail: userEmail})
            }
        }
    })
    
    res.send({msg: "watch history saved successfully"})
}

module.exports = saveWatchHistory