import React from 'react'
import { BiEditAlt } from 'react-icons/bi';
import {RiDeleteBin3Fill } from 'react-icons/ri';
import axios from 'axios';


import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';
export default function AllMoviesCard(props) {

  const navigate = useNavigate()

  const handleDeleteMovies = async ()=>{

    const formData = {
      _id: props.movie._id
    }

    try{
      const res = await axios.post(
        "http://" + process.env.REACT_APP_API_CALL_ADDRESS + ":3560/deleteMovie",
          formData
      )
      .then(res=>{ 
        window.location.reload();
        return res.data
      })
      
      // console.log(res)
  }catch (ex) {
      console.log(ex);
  }



    console.log("Deleting movie with id " + props.movie._id)
  }

  const handleEditMovies = ()=>{
    navigate('/Editmovies')
    console.log("Editing movie with id "  + props.movie._id)
  }
  return (
   
<tr>
<td>{props.movie._id}</td>
<td>{props.movie.name}</td>
<td>{props.movie.genre}</td>
<td>{props.movie.quality}</td>
<td>{props.movie.releaseYear}</td>
<td>{props.movie.casts}</td>
<td>
<span onClick={handleEditMovies}>

<IconContext.Provider value={{ color: "green"  }} >
  <BiEditAlt></BiEditAlt>
</IconContext.Provider>


</span>

&nbsp;
&nbsp;
&nbsp;
&nbsp;

<span onClick={handleDeleteMovies}>
<IconContext.Provider value={{ color: "green"  }} >
  <RiDeleteBin3Fill></RiDeleteBin3Fill>
</IconContext.Provider>
</span>

</td>

</tr>
  )
}
