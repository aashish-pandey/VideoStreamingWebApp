import React from 'react'
import { useNavigate } from 'react-router-dom'
import useCookies from 'react-cookie/cjs/useCookies';
import './styleSheet/PermissionDeniedStyleSheet.css'


export default function PermissionDenied() {
    const navigate = useNavigate()
    const [cookies, setCookies] = useCookies(['user'])
    const handleGoToLogin = function(){
        setCookies('ip', '')
        setCookies('os', '')
        setCookies('device', '')
        setCookies('browser', '')
        setCookies('uemail', '')
        setCookies('permissionDenied', '')
        setCookies('loginStatus', 'false')
        navigate('/login')
    }
  return (
    <div className='permissionDenied'>
        <span class="loader3"></span>    
        <h2>We cannot grant you access right now</h2>
        <h4>Try logging in again after a while</h4>
        <div class="scene">
          <div class="cube">
            <span class="side top" onClick={handleGoToLogin}>Sorry For The Inconvenience</span>
            <span class="side front" onClick={handleGoToLogin}>Go To Login</span>
          </div>
        </div>
        {/* <button onClick={handleGoToLogin}>Go to login page</button> */}
    </div>
  )
}
