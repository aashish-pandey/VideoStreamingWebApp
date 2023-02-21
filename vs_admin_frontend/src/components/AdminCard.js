import React from 'react'
import { Button } from 'react-bootstrap';
import { BiEditAlt } from 'react-icons/bi';

export default function AdminCard(props) {
  return (
   
<tr>

{/* BiEditAlt */}

{/* <input type="button" id="edit_button1" value="Edit" class="edit" onclick="edit_row('1')"></input>
                <input type="button" id="save_button1" value="Save" class="save" onclick="save_row('1')"></input>
<input type="button" value="Delete" class="delete" onclick="delete_row('1')">

</input> */}
<td>{props.admin._id}</td>
    <td>{props.admin.name}</td>
    <td>{props.admin.email}</td>
    <td>{props.admin.password}</td>
    <td>{props.admin.department}</td>
    <td>
    {/* import { FaThumbsUp } from 'react-icons/fa'; */}


<BiEditAlt></BiEditAlt>


    </td>
</tr>

        
  )
}
