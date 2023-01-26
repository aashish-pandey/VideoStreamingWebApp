import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import getCookies from '../pages/CookieHandler'

export default function ListPlan(props) {

    const [errMsg, setErrMsg] = useState()
    const navigate = useNavigate()

    const handleActivateSubscription = async()=>{
        const email = getCookies('uemail')

        const formInfo = {
            userEmail: email,
            activePlan: props.planName
        }

        const error_status  = await fetch('http://localhost:3560/activatesubscription', {
            method: "POST",
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify(formInfo)
        })
        .then(res=>res.json())
        .then(dt=>{
            console.log(dt)
            return dt.err
        })
    

        setErrMsg()
        if(error_status.toString() == 'false'){
            
            navigate('/homefeed')
        }else{
            setErrMsg('Something went Wrong Try again')
        }
    }

  return (
    <div className='AvailablePlansItem'>

        <label className='AvailablePlansLabel'>
        <input type="radio" name="radioname" value={props.planName} className='AvailablePlanRadioBtn'/>
        <div className='AvailablePlansHeading'>{props.planName}</div>
        <div className='AvailablePlanSpecs'>{props.monthlyPrice}</div>
        <div className='AvailablePlanSpecs'>{props.noOfDevice}</div>
        <button onClick={handleActivateSubscription} className='SignIn'>Choose this plan</button>
        </label>

    </div>
  )
}
