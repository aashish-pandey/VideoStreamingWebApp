import axios from 'axios';
import React, { useState } from 'react';
import Nav1 from './Nav1';

export default function EditAdmins() {

    const [msg, setmsg] = useState()
    const handleSubmit = async(e)=>{
        e.preventDefault()

        const frm = document.getElementById('fm');
        const formData = new FormData(frm);

        try{
            const res = await axios.post(
              "http://" + process.env.REACT_APP_API_CALL_ADDRESS + ":3560/editAdmin",
                formData
            )
            .then(res=>{return res.data})
            console.log(res)

            setmsg(res.msg)
        }catch (ex) {
            console.log(ex);
        }
    }

    const handleDeptChangeSubmit = async(e)=>{
        e.preventDefault()

        const frm = document.getElementById('fmDept');
        const formData = new FormData(frm);

        try{
            const res = await axios.post(
              "http://" + process.env.REACT_APP_API_CALL_ADDRESS + ":3560/changeAdminDepartment",
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
    <div>
        <Nav1/>

        <h1>{msg}</h1>
    
      <form  onSubmit={handleSubmit} method='POST' id="fm">
        

                  <label className='lbl'>Enter Admin Name:</label>
                  <p class="breaker"></p>

                  <input className='inputup' type="text" name='name' placeholder='Old Name'/> 
                  <p class="breaker"></p>
                  
                <label className='lbl'> Enter the admin email address:</label> 
                <p class="breaker"></p>
                  <input className='inputup' type="text" name='email' placeholder='Old Email'/> 
                  
                  <p class="breaker"></p>
                  <input className='inputup' type="text" name='nwpass' placeholder='New Password'/>
                  <p class="breaker"></p>

                  <input  className='btnup' type="submit" value="Edit" />
      </form>

      <form  onSubmit={handleDeptChangeSubmit} method='POST' id="fmDept">
        

                  <label className='lbl'>Enter Admin Name:</label>
                  <p class="breaker"></p>

                  <input className='inputup' type="text" name='name' placeholder='Old Name'/> 
                  <p class="breaker"></p>
                  
                <label className='lbl'> Enter the admin email address:</label> 
                <p class="breaker"></p>
                  <input className='inputup' type="text" name='email' placeholder='Old Email'/> 
                  
                  <p class="breaker"></p>
                  <input className='inputup' type="text" name='nwdept' placeholder='New Dept'/>
                  <p class="breaker"></p>

                  <input  className='btnup' type="submit" value="Edit" />
      </form>


    </div>
    </>
 
    
  )
}
