import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AvailablePlans from '../components/AvailablePlans'
import Navigation from '../components/navigation/Navigation'
import getCookies from './CookieHandler'
import useCookies from 'react-cookie/cjs/useCookies';


import { browserName, osName, deviceType} from 'react-device-detect'

export default function Home() {

  const [subscriptionStatus, setSubscriptionStatus] = useState('false')
  const [cookies, setCookies] = useCookies(['user'])
  // const [ip, setIp] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
    var ip = ''
    async function getip(){
      console.log("hi")
      await fetch('https://api.ipify.org/?format=json').then(results=>results.json()).then(data => {ip = data.ip; console.log(data.ip);})
    }
    
    const userEmail = getCookies('uemail');
    async function handleSaveAccountLoginInfo(){
      
      await getip()
      console.log(browserName + "  " + osName + "  " + deviceType + " " + ip)
      
      var sessionId = getCookies("sessionId")
      if(sessionId == 'undefined')
      {
          setCookies("sessionId", "")
          sessionId = ""
      }
      console.log(sessionId)
  
      const accountLoginStatus = {
        uemail: userEmail,
        ip: ip,
        browser: browserName,
        os: osName,
        device: deviceType,
        sessionId: sessionId
      }


      var error_status  = await fetch('http://' + process.env.REACT_APP_API_CALL_ADDRESS + ':3560/accountLoginHistorySave', {
          method: "POST",
          headers:{'Content-type': 'application/json'},
          body: JSON.stringify(accountLoginStatus)
      })
      .then(res=>res.json())
      .then(dt=>{
        console.log(dt)
        setCookies("sessionId", dt._id)
        return dt.err
      })
  
  
    if(error_status.toString() == 'true'){
      setSubscriptionStatus('true')
      console.log("got false")
      setCookies('permissionDenied', 'true')
      navigate('/permissionDenied')
      // console.log("Account login status not saved")   
    }else{
      setCookies('ip', ip)
      setCookies('os', osName)
      setCookies('device', deviceType)
      setCookies('browser', browserName)

      
      // navigate('/homefeed')
      // console.log("Account Login status saved")
    }
    }

    


    const queryInfo = {
      uemail : userEmail
    }
    async function handlefetch(){

      var error_status  = await fetch('http://' + process.env.REACT_APP_API_CALL_ADDRESS + ':3560/subscriptionStatus', {
          method: "POST",
          headers:{'Content-type': 'application/json'},
          body: JSON.stringify(queryInfo)
      })
      .then(res=>res.json())
      .then(dt=>{
        console.log(dt)
        return dt.err
      })
  
  
    if(error_status.toString() == 'false'){
      setSubscriptionStatus('false')    
      navigate('/homefeed')
    }else{
      setSubscriptionStatus('true')
    }
    }

    handlefetch()
    if(subscriptionStatus == 'false')
    handleSaveAccountLoginInfo();

  }, [])


  return (
    <div>
        <Navigation/>
        <AvailablePlans/>
        </div>
  )
}
