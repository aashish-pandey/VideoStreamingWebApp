import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';
// import Incorrect from './Incorrect';




export default function Login() {
    const [cookies, setCookies] = useCookies(['loginStat'])
    const [err, setErr] = useState('')
  
    

    const navigate = useNavigate()
    const handleLogin = async(e)=>{
        e.preventDefault()
        // console.log("pass")
        const frm = document.getElementById('fm');
        const formData = new FormData(frm);
        try {
            const res = await axios.post(
              "http://" + process.env.REACT_APP_API_CALL_ADDRESS + ":3560/loginAdmin",
              formData
            )
            .then(dt=>{return dt.data})
            // console.log("no error")
            console.log(res);

            if(res.err == false){
              // setLoginStatus('true')
              setCookies('isLogged', 'true')
              console.log('bro')
              navigate('/')
            }else{
              async function hdl(){
                let msg = res.msg
                await setErr(msg)
              }
              hdl()
              console.log(err)
              // navigate('/Incorrect')
             
            }
          } catch (ex) {
            console.log(ex);
          }
    }

  return (
    <div>
      
      
    <div className="Auth-form-container">
    
      <form className="Auth-form" onSubmit={handleLogin} method='POST' id="fm">
      <mark><h5><i>{err}</i></h5></mark>
        <div className="Auth-form-content">

          <h3 className="Auth-form-title">Log In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email" name='email' className="form-control mt-1" placeholder="Enter email" />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password" name='password'
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" value='Login' className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>




 </div>
  );
}




