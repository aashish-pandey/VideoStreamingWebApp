const Banner = require('../models/BannerModel')

const fs = require('fs')

const getBannerMovie = function (req, res) {
    const range = req.headers.range;
    console.log(req.query.speed)



    if (!range) {
        res.status(400).send("Requires Range Header");
    }

    Banner.find({ _id: req.params.id }, function (err, data) {
        if (err) res.status(500).send({ code: 200, msg: "bro error" })
        else {
            const videoPath = __dirname + data[0].movieLocation
            const videoSize = fs.statSync(videoPath).size


            //calculating the size of chunk to send the data

            let clientSpeed  = req.query.speed

            const sz = clientSpeed/(8)
            console.log(sz)
            // const CHUNK_SIZE = Math.round(sz * 10 ** 6)
           //1 MB =   1000000 bits //6 zeros

            const CHUNK_SIZE = Math.round(sz * 1000000)    

            console.log("size chunk: " + CHUNK_SIZE)
            const start = Number(range.replace(/\D/g, ""))
            const end = Math.min(start + CHUNK_SIZE, videoSize - 1)
            console.log("time: ", start)

            const contentLength = end - start + 1;

            const headers = {
                "Content-Range": `bytes ${start}-${end}/${videoSize}`,
                "Accept-Ranges": "bytes",
                "Content-Length": contentLength,
                "Content-Type": "video/mp4",

            };

            res.writeHead(206, headers);

            const videoStream = fs.createReadStream(videoPath, { start, end })

            videoStream.pipe(res)
        }
    })
}

module.exports = getBannerMovie