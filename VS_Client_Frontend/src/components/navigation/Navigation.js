import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import getCookies from '../../pages/CookieHandler';
import useCookies from 'react-cookie/cjs/useCookies';
import './navigationStylesheet.css' 

export default function Navigation() {

    const navigate = useNavigate();

    const [loginStatus, setloginStatus] = useState();

    const [cookies, setCookies] = useCookies(['user'])

    useEffect(()=>{
      setloginStatus(getCookies('loginStatus'))
    }, [])

    const handleLogout = async()=>{
      console.log("out")
      
      const accountLoginStatus = {
        uemail: getCookies('uemail'),
        ip: getCookies('ip'),
        browser: getCookies('browser'),
        os: getCookies('os'),
        device: getCookies('device')
      }
      console.log(accountLoginStatus)

      var error_status  = await fetch('http://localhost:3560/logout', {
          method: "POST",
          headers:{'Content-type': 'application/json'},
          body: JSON.stringify(accountLoginStatus)
      })
      .then(res=>res.json())
      .then(dt=>{
        console.log(dt)
        return dt.err
      })
  
  
    if(error_status.toString() == 'true'){
      // console.log("Account login status not saved")   
    }else{
      setCookies('ip', '')
      setCookies('os', '')
      setCookies('device', '')
      setCookies('browser', '')
      setCookies('uemail', '')
      setCookies('loginStatus', 'false')
      navigate('/')
      // navigate('/homefeed')
      // console.log("Account Login status saved")
    }
    }


    const redirectLogin = ()=>{
        navigate('/login')
    }


if(loginStatus == 'true'){
  return(
    <div className='Navbar'>
      <span className='Title'>JAALCHITRA</span>
      <button onClick={handleLogout} className='SignIn'>Logout</button>
    </div>
  )
}else{
  return (
    

    <div className='Navbar'>
    <span className='Title'>JAALCHITRA</span>
    <button className='SignIn' onClick={redirectLogin}>Sign In</button>
    </div>
  )
  
}




}
