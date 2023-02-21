import React from 'react'
// import { Button } from 'react-bootstrap';
import { BiEditAlt } from 'react-icons/bi';

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
    {/* import { FaThumbsUp } from 'react-icons/fa'; */}


        <span onClick={()=>{console.log("Button clicked aashish")}}>

            <IconContext.Provider value={{ color: "green"  }} >
              <BiEditAlt></BiEditAlt>
            </IconContext.Provider>
           
        </span>
 


    </td>
</tr>

        
  )
}
