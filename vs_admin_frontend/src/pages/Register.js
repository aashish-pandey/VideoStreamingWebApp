import axios from 'axios';
import React, { useState } from 'react'
import Nav1 from './Nav1';

export default function Register() {

    const [msg, setmsg] = useState()
    const handleSubmit = async(e)=>{
        e.preventDefault()

        const frm = document.getElementById('fm');
        const formData = new FormData(frm);

        try{
            const res = await axios.post(
                "http://localhost:3560/registerAdmin",
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
    <div>
        <Nav1/>

        <h1>{msg}</h1>
        <div className="Auth-form-container" id="f">
      <form className="Auth-form" onSubmit={handleSubmit} method='POST' id="fm">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="form-group mt-3">
            <label>Enter the admin name:</label>
            <input
              type="text" name='name' className="form-control mt-1"  />
          </div>
          <div className="form-group mt-3">
            <label> Enter the admin email address:</label>
            <input
              type="email" name='email' className="form-control mt-1" />
          </div>
          <div className="form-group mt-3">
            <label>Enter the admin password:</label>
            <input
              type="password" name='password' className="form-control mt-1"  />
          </div>
          <div className="form-group mt-3">
            <label>Enter the admin department:</label>
            <input
              type="text" name='department' className="form-control mt-1" />
          </div>
          
          <div className="d-grid gap-2 mt-3">
            <button type="submit" value='Register' className="btn btn-primary">
              Submit
            </button>
          </div>
          
        </div>
      </form>
    </div>
        
        {/* Register

        <form onSubmit={handleSubmit} id="fm" method='POST'>
            Enter the admin name:
            <input type="text" name='name'/>
            Enter the admin email address:
            <input type="email" name='email'/>
            Enter the admin password:
            <input type="password" name='password'/>
            Enter the admin department:
            <input type="text" name='department'/>

            <input type="submit" value="Add Admin"  />
        </form> */}


    </div>
  )
}
