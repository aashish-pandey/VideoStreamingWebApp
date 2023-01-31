import React, { useState } from "react";

function Thumbnail() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        console.log(file)
    }
  
    return (
        <div className="App">

           <img  id="thm" width="600" height="400" src={file} />
            <p>Add Thumbnail:</p>
            <input name="movieThumbnail" type="file" onChange={handleChange} />
        </div>
           
          
  
    );
}

export default Thumbnail;