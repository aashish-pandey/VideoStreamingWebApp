import React, { useState } from "react";



const  Vdyo = () => {

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files[0]);
       setFile(URL.createObjectURL(e.target.files[0]));

       console.log(file)



   }


    return ( 

           <div className="App">

            <video  width="600" height="400" autoPlay muted id='vdyo2'>
                <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4"></source>
            </video>
{/*          
         <video  width="600" height="400" autoPlay muted id='vdyo2'>
            <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type='video/mp4'></source>
            </video> */}
            <p>Add Video:</p>
            <input type="file" onChange={handleChange} />
       </div>
  
     );
}
 
export default Vdyo;