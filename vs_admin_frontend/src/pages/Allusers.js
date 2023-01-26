import React, { useEffect, useState } from 'react'

export default function Allusers() {

    const [users, setUsers] = useState()

    useEffect(()=>{
        async function getAllUsers(){
            const data = await fetch("http://localhost:3560/getAllUsers")
            .then(res=>res.json())
              .then(dt=>{
                setUsers(dt['msg'])
                console.log("aashish")
                console.log(dt['msg'])
                return dt
              })
            return data
          }

          getAllUsers()
    }, [])

  if(!users){
    return(
        <>Loading....</>
    )
  } else 
  return (
    <div>Allusers

    {users.map(user=>{return(
        <>
        {user._id}
        {user.uemail}<br/>
        </>
    )})}

    </div>
  )
}
