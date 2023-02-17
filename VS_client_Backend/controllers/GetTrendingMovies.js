const WatchHistory = require('../models/WatchHistory')

const getTrendingMovies = async function(req, res){
    
    const movieHistory = await WatchHistory.find({})

    var movieCount = new Map([])

    movieHistory.map(data=>{
        cnt = 1
        if(movieCount.has(data.movieId)){
            cnt = 1 + movieCount.get(data.movieId)
        }

        movieCount.set(data.movieId, cnt)
    })

    movieCount = new Map([...movieCount.entries()].sort((a, b) => b[1] - a[1]));

    let keys = Array.from( movieCount.keys() )
    console.log(keys)


    res.status(200).send({err:true, msg:keys})

    
        

}

module.exports = getTrendingMovies




