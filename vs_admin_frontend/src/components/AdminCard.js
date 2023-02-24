import React from 'react'
// import { Button } from 'react-bootstrap';
import { BiEditAlt } from 'react-icons/bi';
import {RiDeleteBin3Fill } from 'react-icons/ri';

import { IconContext } from "react-icons";
export default function AdminCard(props) {
  return (
   
<tr>
<td>{props.admin._id}</td>
    <td>{props.admin.name}</td>
    <td>{props.admin.email}</td>
    <td>{props.admin.password}</td>
    <td>{props.admin.department}</td>
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
