import React from 'react'

export default function AllMoviesCard(props) {
  return (
   
<tr>
<td>{props.movie._id}</td>
<td>{props.movie.name}</td>
<td>{props.movie.genre}</td>
<td>{props.movie.quality}</td>
<td>{props.movie.releaseYear}</td>
<td>{props.movie.casts}</td>

</tr>
  )
}
