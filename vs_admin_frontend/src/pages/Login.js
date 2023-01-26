import axios from 'axios';
import React from 'react'

export default function Login() {


    const handleLogin = async(e)=>{
        e.preventDefault()

        const frm = document.getElementById('fm');
        const formData = new FormData(frm);
        
        try {
            const res = await axios.post(
              "http://localhost:3560/loginAdmin",
              formData
            );
            console.log("no error")
            console.log(res);
          } catch (ex) {
            console.log(ex);
          }
    }

  return (
    <div>Login

        <form onSubmit={handleLogin} method='POST' id="fm">
            Enter the admin email:
            <input type="email" name="email"/>

            Enter the password:
            <input type="password" name="password"/>

            <input type="submit" value="Login"/>
        </form>


    </div>
  )
}
