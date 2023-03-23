const Banner = require('../../models/BannerModel')


const bannerUpload = function(req, res){

    console.log("banner upload server")
    const movieFile = req.files.movieFile;
    const movieFilename = movieFile.name;

    const thumbnailFile = req.files.movieThumbnail;
    const thumbnailFilename = thumbnailFile.name;

    const movieName = req.body.movieName;
    const releaseDate = req.body.releaseDate;
    const description = req.body.description;

    thumbnailFile.mv(__dirname +'/../../uploads/thumbnails/' + thumbnailFilename, function(err){
        if(err)res.status(500).send({code: 200, msg: "Thumbnail image upload failed"});
        else{
            movieFile.mv(__dirname + '/../../uploads/videos/movies/' + movieFilename, function(err){
                if(err)res.status(500).send({code: 200, msg: "Movie upload Failed"});
                else{
                    const movieUpload = new Banner({
                        name: movieName,
                        releaseYear: releaseDate,
                        description: description,
                        thumbnailLocation:'/../uploads/thumbnails/' + thumbnailFilename,
                        movieLocation:'/../uploads/videos/movies/' + movieFilename,
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

module.exports = bannerUpload