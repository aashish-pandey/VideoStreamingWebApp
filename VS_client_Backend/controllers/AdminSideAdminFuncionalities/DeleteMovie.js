const Movie = require('../../models/MovieUpload')

const deleteMovie = function(req, res){
    Movie.deleteOne({_id:req.body._id}, function(err){
        if(err){
            res.status(500).json({code:200, msg:err})
        }else{
            res.status(200).json({code:200, msg:"Movie deleted succesfully"})
        }
    })
}

module.exports = deleteMovie