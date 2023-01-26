import axios from 'axios';
import React from 'react'

export default function Register() {


    const handleSubmit = async(e)=>{
        e.preventDefault()

        const frm = document.getElementById('fm');
        const formData = new FormData(frm);

        try{
            const res = await axios.post(
                "http://localhost:3560/registerAdmin",
                formData
            )
            console.log(res)
        }catch (ex) {
            console.log(ex);
        }
    }

  return (
    <div>Register

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
        </form>


    </div>
  )
}
