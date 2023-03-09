import React from 'react'
// import { Button } from 'react-bootstrap';
import { BiEditAlt, BiWindows } from 'react-icons/bi';
import {RiDeleteBin3Fill } from 'react-icons/ri';
import axios from 'axios';


import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';
export default function AdminCard(props) {


  const handleDeleteAdmin = async ()=>{

    const formData = {
      _id: props.admin._id
    }

    try{
      const res = await axios.post(
        "http://" + process.env.REACT_APP_API_CALL_ADDRESS + ":3560/deleteAdmin",
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
    console.log("Deleting admin with id " + props.admin._id)
  }

  const handleEditAdmin = ()=>{
    console.log("Editing admin with id "  + props.admin._id)
  }


  return (
   
<tr>
<td>{props.admin._id}</td>
    <td>{props.admin.name}</td>
    <td>{props.admin.email}</td>
    <td>{props.admin.password}</td>
    <td>{props.admin.department}</td>
    <td>



<span onClick={handleEditAdmin}>

<IconContext.Provider value={{ color: "green"  }} >
  <BiEditAlt></BiEditAlt>
</IconContext.Provider>


</span>

&nbsp;
&nbsp;
&nbsp;
&nbsp;

<span onClick={handleDeleteAdmin}>
<IconContext.Provider value={{ color: "green"  }} >
  <RiDeleteBin3Fill></RiDeleteBin3Fill>
</IconContext.Provider>
</span>

    </td>
</tr>

        
  )
}
