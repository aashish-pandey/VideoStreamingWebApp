<<<<<<< HEAD
// import React, { useState } from 'react'
import axios from 'axios';

export default function VideoUpload() {


=======
import React, { useState } from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav1 from './Nav1';
import Thumbnail from '../components/Thumbnail';
import Vdyo from '../components/Vdyo';

export default function VideoUpload() {  
>>>>>>> 79a94fb5a68128331d0c5d5bde460e6d067f27e7
    const uploadFile = async (e) => {
      e.preventDefault();
      const frm = document.getElementById('fm');
        const formData = new FormData(frm);
        
        try {
            const res = await axios.post(
              "http://localhost:3560/uploadMovie",
              formData
            );
            console.log("no error")
            console.log(res);
          } catch (ex) {
            console.log(ex);
          }

      };

  return (
<<<<<<< HEAD
    <div>

          <form onSubmit={uploadFile} id="fm">
            <input type="text" name="movieName" placeholder='movie Name'/><br/>
            <input type="text" name='releaseDate' placeholder='release Date'/><br/>
            <input type="text" name='genre' placeholder='Movie Genre'/><br/>
            <input type="text" name='casts' placeholder='Cast name'/><br/>
            <input type="text" name="description" placeholder="Description"/><br/>
            <input type="file" name="movieThumbnail" />
            <input type="file" name="movieFile" />
            <input type="submit" value="Upload" />
          </form>
        

    </div>
=======
    <><Nav1 />
    <div id='con'>

      {/* <form onSubmit={uploadFile} id="fm">
      <input type="text" name="movieName" placeholder='movie Name'/><br/>
      <input type="text" name='releaseDate' placeholder='release Date'/><br/>
      <input type="text" name='genre' placeholder='Movie Genre'/><br/>
      <input type="text" name='casts' placeholder='Cast name'/><br/>
      <input type="text" name="description" placeholder="Description"/><br/>
      <input type="file" name="movieThumbnail" />
      <input type="file" name="movieFile" />
      <input type="submit" value="Upload" />
    </form> */}




      <Container>
        {/* <Row>
      <Col>1 of 2</Col>
      <Col>2 of 2</Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col>2 of 3</Col>
      <Col>3 of 3</Col>
    </Row> */}
        <Row className="justify-content-md-center" >
          <Col xs={6} md="auto"  >
            {/* <video width="600" height="400" autoPlay muted id="vdyo1">
              <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4"></source> */}
<Thumbnail/>

  {/* <img  id="thm" width="600" height="400" src="https://www.bollywoodhungama.com/wp-content/uploads/2022/11/Pathaan-5.jpg" alt="Forest"></img> */}
  {/* <img  id="thm" width="600" height="400" src={}alt="Forest"></img> */}


            {/* </video> */}
          </Col >
          <Col xs={6} >

            {/* <video  width="600" height="400" autoPlay muted id='vdyo2'>
            <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4"></source>
            </video> */}
{/* <Vdyo/> */}
<Vdyo/>
          </Col>

        </Row>
      </Container>
      {/* <input type="file" accept=".jpg,.jpeg.,.gif,.png,.mov,.mp4" /> */}
    </div>



    </>
>>>>>>> 79a94fb5a68128331d0c5d5bde460e6d067f27e7
  )
}
