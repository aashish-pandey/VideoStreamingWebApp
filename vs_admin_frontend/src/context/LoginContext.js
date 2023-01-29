import React, { createContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import getCookies from '../cookieHandler/CookieHandler';


export const LoginContext = createContext()

export const LoginContextProvider = ({children})=>{
    const[loginStatus, setLoginStatus] = useState('false')
    const [cookies, setCookies] = useCookies(['loginStat'])
    useEffect(()=>{
        const status = getCookies('isLogged')
        console.log("Bro status" + status)
        if(status == 'true')setLoginStatus('true')
    }, [])


    return(
        <LoginContext.Provider value={[loginStatus, setLoginStatus]}>
            {children}
        </LoginContext.Provider>
    )
}
