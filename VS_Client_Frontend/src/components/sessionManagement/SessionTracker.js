import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import getCookies from '../../pages/CookieHandler'

export default function SessionTracker() {

    const [status, setStatus] = useState("loggedOut")
    
    const onlineStatusUpdateTime = 5000 //change 1000 to another value to set the status of userlogin in backend

    useEffect(()=>{
        setTimeout(async ()=>{

            var sessionId = getCookies("sessionId")
            var email = getCookies('uemail')
            if(email && email != ''){
                console.log("From the session tracker file")
                const formInfo = {
                    sessionId: sessionId
                }
    
                var err_status = await fetch('http://' + process.env.REACT_APP_API_CALL_ADDRESS + ':3560/saveOnlineStatus', {
                    method: "POST",
                    headers: {"content-type": "application/json"},
                    body: JSON.stringify(formInfo)
                }).then(res=>res.json())
                .then(dt=>{
                    console.log(dt)
                    return dt
                })
    
                if(status == "loggedIn")setStatus("loggedOut")
                else setStatus("loggedIn")
            }
        }, onlineStatusUpdateTime)
    })

  return (
    <>
    {console.log(status)}
    </>
  )
}
