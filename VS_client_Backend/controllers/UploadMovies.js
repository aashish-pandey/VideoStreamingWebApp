const MovieUpload = require('../models/MovieUpload')

const uploadMovie = function(req, res){
    console.log("upload server")
    const movieFile = req.files.movieFile;
    const movieFilename = movieFile.name;

    const thumbnailFile = req.files.movieThumbnail;
    const thumbnailFilename = thumbnailFile.name;

    const movieName = req.body.movieName;
    const releaseDate = req.body.releaseDate;
    const genre = req.body.genre;
    const cast = req.body.casts;
    const description = req.body.description;

    console.log("upload movie "+movieFilename + "  " + thumbnailFilename + " " + movieName + " " + genre + " " + releaseDate + " " + cast + " " + description)


 
    thumbnailFile.mv(__dirname +'/../uploads/thumbnails/' + thumbnailFilename, function(err){
        if(err)res.status(500).send({code: 200, msg: "Thumbnail image upload failed"});
        else{
            movieFile.mv(__dirname + '/../uploads/videos/movies/' + movieFilename, function(err){
                if(err)res.status(500).send({code: 200, msg: "Movie upload Failed"});
                else{
                    const movieUpload = new MovieUpload({
                        name: movieName,
                        genre: genre,
                        releaseYear: releaseDate,
                        casts: cast,
                        description: description,
                        thumbnailLocation:'/../uploads/thumbnails/' + thumbnailFilename,
                        movieLocation:'/../uploads/videos/movies/' + movieFilename,
                        quality: "no"
                    })

                    movieUpload.save(function(err){
                        if(err)res.status(500).send({code: 200, msg: "Database upload failed"});
                        else res.status(200).send({code:200, msg:"Everything was successful"});
                    })
                }
            })
        }
    })

}

module.exports = uploadMovie