import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import AdminCard from '../components/AdminCard';
import Nav1 from './Nav1';
export default function AllAdmins() {

    const [admins, setAdmins] = useState()

    useEffect(()=>{
        async function getAllAdmins(){
            const data = await fetch("http://" + process.env.REACT_APP_API_CALL_ADDRESS + ":3560/getAllAdmins")
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
        <>
        {/* loading code */}
        </>
    )
  } else 
  return (
    <><Nav1 /><div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>


          {admins.map(admin => {
            return (
              <AdminCard key={admin._id} admin={admin} />



            );
          })}
        </tbody>
      </Table>


    </div></>
    )

    }
