const Banner = require('../models/BannerModel')
var fs = require('fs');

const getBannerThumbnail = function(req, res){
    
    Banner.find({_id : req.params.id}, function(err, data){
        if(err)res.status(500).send({code: 200, msg: "bro error"})
        else{
            console.log(data[0].thumbnailLocation)
            res.writeHead(200,{'content-type':'image/jpg'});
            fs.createReadStream(__dirname + data[0].thumbnailLocation)
            .pipe(res);
            // res.sendFile("C:/Users/paash/Desktop/VideoStreaming_MajorProject2/Authentication system/Authentication_backend/controllers/../uploads/thumbnails/Screenshot (15).png")
        }
    })
    // res.sendFile(location)
}

module.exports = getBannerThumbnail