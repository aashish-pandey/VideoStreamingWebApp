import React, { useState } from 'react'
import axios from 'axios';
import Nav1 from './Nav1';
import "react-datepicker/dist/react-datepicker.css";

export default function Banner() { 
  




    const uploadFile = async (e) => {
      e.preventDefault();
      console.log("aas")
      const frm = document.getElementById('fm');
        const formData = new FormData(frm);
        
        try {
          
            const res = await axios.post(
              "http://" + process.env.REACT_APP_API_CALL_ADDRESS + ":3560/bannerUpload",
              formData
            );
            console.log("no error")
            console.log(res);
          } catch (ex) {
            console.log(ex);
          }

      };

      const [startDate, setStartDate] = useState(new Date());

  return (
    <>
    <Nav1 />
    <div id='con'>

      <form onSubmit={uploadFile} id="fm" >
      <input className='inputup' type="text" name="movieName" placeholder='movie Name'/><br/>
      <input className='inputup' type="text" name='UploadDate' placeholder='Upload Date format(2000/01/25)'/><br/>
      <input className='inputup' type="text" name="description" placeholder="Description"/><br/>
      <p class="breaker"></p>
      {/* <p class="breaker"></p> */}

<p>Select Thumbnail:</p>
{/* <p class="breaker2"></p> */}

      <input className='inputup'  type="file" name="movieThumbnail" />
      <p class="breaker2"></p>

<p>Select Video Thumbnail:</p>
      <input className='inputup'  type="file" name="movieFile" />
      <p class="breaker2"></p>

      <input  className='btnup' type="submit" value="Upload" />
      
    </form>
    </div>
    </>
  )
}

