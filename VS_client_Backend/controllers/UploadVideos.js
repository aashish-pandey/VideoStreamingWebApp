
const fs = require('fs')
const VideoUpload = require('../models/VideoUpload')

const uploadVideo = function(req, res){

    // const newpath = __dirname + "../";
    const file = req.files.movieFile;
  const filename = file.name;

  console.log(filename)
  console.log(req.body.name)


    //  fs.mkdir(__dirname + '/../uploads/' , {recursive: true}, function(err){
    //     if(err){
    //         console.log(err)
    //         res.json({msg : "file with same filename exists"})
    //     }
    // })

    //  file.mv(__dirname +'/../uploads/'  + filename, function(err){
    //     if(err)res.status(500).send({code: 200, msg: "File upload failed"});
    //     else {
    //         res.json({msg: "file uploaded!!!! Fuck you sandesh"})
    //         const newVideo = new VideoUpload({
    //             name: filename,
    //             genre: "Comedy",
    //             location: __dirname +'/../uploads/'  + filename,
    //             releaseYear: "2005",
    //             quality: "no"
    //         })

    //         newVideo.save(function(err){
    //             if(err){
    //                 console.log(err)
    //                 res.json({err:true,
    //                 errVal: err})
    //             }
    //             else{
    //                 res.json({err:false})
    //             }
    //         })
    // }
    // })

}

module.exports = uploadVideo