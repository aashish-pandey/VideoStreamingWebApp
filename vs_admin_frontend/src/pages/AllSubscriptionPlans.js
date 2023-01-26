import React, { useEffect, useState } from 'react'

export default function AllSubscriptionPlans() {

    const [plans, setPlans] = useState()

    useEffect(()=>{
        async function getAllPlans(){
            const data = await fetch("http://localhost:3560/getAllSubscriptionPlans")
            .then(res=>res.json())
              .then(dt=>{
                setPlans(dt['msg'])
                console.log(dt['msg'])
                return dt
              })
            return data
          }

          getAllPlans()
    }, [])

  if(!plans){
    return(
        <>Loading....</>
    )
  } else 
  return (
    <div>Allusers

    {plans.map(plan=>{return(
        <>
        {plan._id}
        <br/>
        </>
    )})}

    </div>
  )
}
