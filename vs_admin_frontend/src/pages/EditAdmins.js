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
              "http://" + process.env.REACT_APP_API_CALL_ADDRESS + ":3560/registerAdmin",
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
        {/* <div className="Auth-form-content">
          <h3 className="Auth-form-title">Edit Admin</h3>
          <div className="form-group mt-3">
            <label>Enter the admin name:</label>
            <input
              type="text" name='name' className="form-control mt-1"  />
          </div>
          <div className="form-group mt-3">
            <label>Enter new name:</label>
            <input
              type="text" name='nwname' className="form-control mt-1"  />
          </div>
          <div className="form-group mt-3">
            <label> Enter the admin email address:</label>
            <input
              type="email" name='email' className="form-control mt-1" />
          </div>
          <div className="form-group mt-3">
            <label> Enter the new admin email address:</label>
            <input
              type="email" name='nemail' className="form-control mt-1" />
          </div>
          <div className="form-group mt-3">
            <label>Enter the admin password:</label>
            <input
              type="password" name='password' className="form-control mt-1"  />
          </div>
          <div className="form-group mt-3">
            <label>Enter the new admin password:</label>
            <input
              type="password" name='npassword' className="form-control mt-1"  />
          </div>
          <div className="form-group mt-3">
            <label>Confirm the new admin password:</label>
            <input
              type="password" name='ncpassword' className="form-control mt-1"  />
          </div>
          <div className="form-group mt-3">
            <label>Enter the admin department:</label>
            <input
              type="text" name='department' className="form-control mt-1" />
          </div>
          <div className="form-group mt-3">
            <label>Enter the new admin department:</label>
            <input
              type="text" name='ndepartment' className="form-control mt-1" />
          </div>
          
          <div className="d-grid gap-2 mt-3">
            <button type="submit" value='Register' className="btn btn-primary">
              Submit
            </button>
          </div>
          
        </div> */}

{/* <h3 className="Auth-form-title">Edit Admin</h3> */}
<label className='lbl'>Enter Admin Name:</label>
<p class="breaker"></p>

            <input className='inputup' type="text" name='name' placeholder='Old Name'/> 
            <input className='inputup' type="text" name='nwname' placeholder='New Admin Name'/>
<p class="breaker"></p>
            
          <label className='lbl'> Enter the admin email address:</label> 
<p class="breaker"></p>
            <input className='inputup' type="text" name='email' placeholder='Old Email'/> 
            <input className='inputup' type="text" name='nwemail' placeholder='New Email '/>
            <p class="breaker"></p>
            <label className='lbl'> Enter the admin password:</label> 
<p class="breaker"></p>
            <input className='inputup' type="text" name='pass' placeholder='Old password'/> 
            <input className='inputup' type="text" name='nwpass' placeholder='New Admin Password'/>
            <input className='inputup' type="text" name='nwcpass' placeholder='Confirm New Admin Password'/>

            <p class="breaker"></p>

            <label className='lbl'>Enter the admin department:</label>
            <p class="breaker"></p>
            <input className='inputup' type="text" name='dept' placeholder='Old deparment'/> 
            <input className='inputup' type="text" name='nwdept' placeholder='New Admin department'/>
    
    
            <p class="breaker"></p>
            <p class="breaker"></p>
            <p class="breaker"></p>

            <input  className='btnup' type="submit" value="Edit" />
      </form>
    </div>
    </>
 
    
  )
}
