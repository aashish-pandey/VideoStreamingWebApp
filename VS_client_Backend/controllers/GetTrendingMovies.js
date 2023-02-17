const WatchHistory = require('../models/WatchHistory')

const getTrendingMovies = function(req, res){

    WatchHistory.distinct("movieId",function(err, details){
        if(err){
            res.status(500).send({err:true, msg:err})
        }else{

            res.status(200).send({err:false, msg:details})

        }
    })

}

module.exports = getTrendingMovies