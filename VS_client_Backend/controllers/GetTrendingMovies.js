const WatchHistory = require('../models/WatchHistory')

const getTrendingMovies = function(req, res){
    res.status(200).send({err: false, msg:"We cool bro?"})
}

module.exports = getTrendingMovies