import React from 'react'

export default function AdminCard(props) {
  return (
   
<tr>
<td>{props.admin._id}</td>
    <td>{props.admin.name}</td>
    <td>{props.admin.email}</td>
    <td>{props.admin.password}</td>
    <td>{props.admin.department}</td>
</tr>

        
  )
}
