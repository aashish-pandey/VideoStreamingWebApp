import React, { useEffect, useState } from 'react'

export default function AllAdmins() {

    const [admins, setAdmins] = useState()

    useEffect(()=>{
        async function getAllAdmins(){
            const data = await fetch("http://localhost:3560/getAllAdmins")
            .then(res=>res.json())
              .then(dt=>{
                setAdmins(dt['msg'])
                console.log(dt['msg'])
                return dt
              })
            return data
          }

          getAllAdmins()
    }, [])

  if(!admins){
    return(
        <>Loading....</>
    )
  } else 
  return (
    <div>Allusers

    {admins.map(admin=>{return(
        <>
        {admin._id}
        {admin.email}<br/>
        </>
    )})}

    </div>
  )
}
