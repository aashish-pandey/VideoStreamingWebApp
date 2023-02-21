import React from 'react'
import { BiEditAlt } from 'react-icons/bi';
import {RiDeleteBin3Fill } from 'react-icons/ri';

import { IconContext } from "react-icons";
export default function AllMoviesCard(props) {
  return (
   
<tr>
<td>{props.movie._id}</td>
<td>{props.movie.name}</td>
<td>{props.movie.genre}</td>
<td>{props.movie.quality}</td>
<td>{props.movie.releaseYear}</td>
<td>{props.movie.casts}</td>
<td>
<span onClick={()=>{console.log("Button clicked")}}>

<IconContext.Provider value={{ color: "green"  }} >
  <BiEditAlt></BiEditAlt>
</IconContext.Provider>


</span>

&nbsp;
&nbsp;
&nbsp;
&nbsp;

<span onClick={()=>{console.log("Button clicked")}}>
<IconContext.Provider value={{ color: "green"  }} >
  <RiDeleteBin3Fill></RiDeleteBin3Fill>
</IconContext.Provider>
</span>

</td>

</tr>
  )
}
