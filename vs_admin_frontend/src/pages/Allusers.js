import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import Nav1 from './Nav1'
import Table from 'react-bootstrap/Table';

export default function Allusers() {

    const [users, setUsers] = useState()

    useEffect(()=>{
        async function getAllUsers(){
            const data = await fetch("http://" + process.env.REACT_APP_API_CALL_ADDRESS + ":3560/getAllUsers")
            .then(res=>res.json())
              .then(dt=>{
                setUsers(dt['msg'])
                // console.log("aashish")
                console.log(dt['msg'])
                return dt
              })
            return data
          }

          getAllUsers()
    }, [])

  if(!users){
    return(
        <>
        {/* Loading.... */}
        
        </>
    )
  } else 
  return (
   <><Nav1 /><div>

<Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
           
            <th>Email</th>
            <th>Password</th>
            <th>Subcription Plan</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>


      {users.map(user => {
        return (

<UserCard key={user._id}  user={user}/>

        
        )
      })}
   </tbody>
      </Table>
    </div></>
  )
}
