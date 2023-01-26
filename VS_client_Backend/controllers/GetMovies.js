const MovieUpload = require('../models/MovieUpload')

const getMovies = function(req, res){


    MovieUpload.find({}, function(err, data){
        if(err)res.status(500).send({code: 200, msg: "bro error"})
        else res.status(200).send({code: 200, msg: data})
    })
}

module.exports = getMovies;