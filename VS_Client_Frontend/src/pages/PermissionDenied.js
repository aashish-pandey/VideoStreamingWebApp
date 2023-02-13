import React from 'react'
import { useNavigate } from 'react-router-dom'
import useCookies from 'react-cookie/cjs/useCookies';


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
    <div>
        PermissionDenied
        Try sometimes later

        <button onClick={handleGoToLogin}>Go to login page</button>
        </div>
  )
}
