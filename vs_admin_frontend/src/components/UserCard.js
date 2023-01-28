import React from 'react'

export default function UserCard(props) {
  return (

<tr>
<td>{props.user._id}</td>
    
    <td>{props.user.uemail}</td>
    <td>{props.user.upassword}</td>
    <td>{props.user.uplan}</td>
</tr>


  )
}
