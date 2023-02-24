import React from 'react'
import { BiEditAlt } from 'react-icons/bi';
import {RiDeleteBin3Fill } from 'react-icons/ri';

import { IconContext } from "react-icons";
export default function UserCard(props) {
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

<span onClick={()=>{console.log("Button clicked")}}>
<IconContext.Provider value={{ color: "green"  }} >
  <RiDeleteBin3Fill></RiDeleteBin3Fill>
</IconContext.Provider>
</span>

    </td>
</tr>


  )
}
