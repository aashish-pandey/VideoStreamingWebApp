import React from 'react'
import axios from 'axios';

import Navigation from '../components/navigation/Navigation'
import { useState } from 'react';

export default function ForgetPassword() {

    const [msg, setmsg] = useState('')

    const handleFormSubmit = async(e)=>{
        e.preventDefault();

        const frm = document.getElementById('fm');
        const formData = new FormData(frm);

        try{
            const res = await axios.post(
              "http://" + process.env.REACT_APP_API_CALL_ADDRESS + ":3560/sendMail",
                formData
            )
            .then(res=>{return res.data})
            console.log(res)

            setmsg(res.msg)
        }catch (ex) {
            console.log(ex);
        }
    }

  return (
    <>
        <Navigation/>


        <h3>We are so sorry that you forget your password.</h3>
        <h4>We are here to help you get access to your account wit seam</h4>

        <form onSubmit={handleFormSubmit} id='fm'>
            <input type="email" placeholder='email' name='email'/>
            <input type="submit" />
        </form>
    
    </>
  )
}
