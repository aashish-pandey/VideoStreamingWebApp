import React from 'react'
import { BiEditAlt } from 'react-icons/bi';
import {RiDeleteBin3Fill } from 'react-icons/ri';

import axios from 'axios';


import { IconContext } from "react-icons";
export default function UserCard(props) {

  const handleDeleteUser = async ()=>{

    const formData = {
      _id: props.user._id
    }

    try{
      const res = await axios.post(
        "http://" + process.env.REACT_APP_API_CALL_ADDRESS + ":3560/deleteUser",
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



    console.log("Deleting user with id " + props.user._id)
  }

  

  return (

<tr>
<td>{props.user._id}</td>
    
    <td>{props.user.uemail}</td>
    <td>{props.user.upassword}</td>
    <td>{props.user.uplan}</td>
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

<span onClick={handleDeleteUser}>
<IconContext.Provider value={{ color: "green"  }} >
  <RiDeleteBin3Fill></RiDeleteBin3Fill>
</IconContext.Provider>
</span>

    </td>
</tr>


  )
}
