import axios from 'axios';
import React, { useState } from 'react';
import Nav1 from './Nav1';

export default function EditMovies() {

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

<label className='lbl'>Enter Movie Name:</label>
<p class="breaker"></p>

            <input className='inputup' type="text" name='name' placeholder='Old Name'/> 
            <input className='inputup' type="text" name='nwname' placeholder='New Movie Name'/>
<p class="breaker"></p>
            
          <label className='lbl'> Enter the Genre:</label> 
<p class="breaker"></p>
            <input className='inputup' type="text" name='genre' placeholder='Old Genre'/> 
            <input className='inputup' type="text" name='nwgenre' placeholder='New Genre '/>
            <p class="breaker"></p>
            <label className='lbl'> Enter the release date:</label> 
<p class="breaker"></p>
            <input className='inputup' type="text" name='date' placeholder='Old Date'/> 
            <input className='inputup' type="text" name='newdate' placeholder='New Date'/> 


            <p class="breaker"></p>

            <label className='lbl'>Enter the Cast:</label>
            <p class="breaker"></p>
            <input className='inputup' type="text" name='cast' placeholder='Old Cast'/> 
            <input className='inputup' type="text" name='nwdept' placeholder='New Cast'/>
    
    
            <p class="breaker"></p>
            <p class="breaker"></p>
            <p class="breaker"></p>

            <input  className='btnup' type="submit" value="Edit" />
      </form>
    </div>
    </>
 
    
  )
}
