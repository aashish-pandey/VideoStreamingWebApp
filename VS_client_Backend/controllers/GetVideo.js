const MovieUpload = require('../models/MovieUpload')
const fs = require('fs')

const getVideo = function (req, res) {
    const range = req.headers.range;

    if (!range) {
        res.status(400).send("Requires Range Header");
    }

    MovieUpload.find({ _id: req.params.id }, function (err, data) {
        if (err) res.status(500).send({ code: 200, msg: "bro error" })
        else {
            const videoPath = __dirname + data[0].movieLocation
            const videoSize = fs.statSync(videoPath).size
            
            const CHUNK_SIZE = 10 ** 6
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

module.exports = getVideo