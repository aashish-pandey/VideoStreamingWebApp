const MovieUpload = require('../models/MovieUpload')

const getMoviesById = function(req, res){

    
    MovieUpload.find({ _id: req.params.id }, function(err, data){
        if(err)res.status(500).send({code: 200, msg: "bro error"})
        else res.status(200).send({code: 200, msg: data})
    })
}

module.exports = getMoviesById;