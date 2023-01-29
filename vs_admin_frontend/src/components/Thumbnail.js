import React, { useState } from "react";
// import useState, { useState } from 'react';
// export default function Thumbnail() {
//   return (
//     <div>Thumbnail</div>
//   )
// }
function Thumbnail() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        console.log(file)
    }
  
    return (
        <div className="App">
  {/* <img  id="thm" width="600" height="400" src="https://www.bollywoodhungama.com/wp-content/uploads/2022/11/Pathaan-5.jpg" alt="Forest"></img> */}

           <img  id="thm" width="600" height="400" src={file} />
            <p>Add Thumbnail:</p>
            <input type="file" onChange={handleChange} />
        </div>
           
          
  
    );
}

export default Thumbnail;