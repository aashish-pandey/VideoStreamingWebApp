import React, { useState } from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav1 from './Nav1';
import Thumbnail from '../components/Thumbnail';
import Vdyo from '../components/Vdyo';

import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function VideoUpload() {  
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

      const [startDate, setStartDate] = useState(new Date());

  return (
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

        <Row className="justify-content-md-center" >
          <Col xs={6} md="auto"  >

<Thumbnail/>
          </Col >
          <Col xs={6} >
<Vdyo/>
          </Col>

        </Row>
      </Container>



    <Form id='upform' onSubmit={uploadFile}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="movieName">
          <Form.Label>Movie Name</Form.Label>
          <Form.Control name="movieName" type="name" placeholder="Enter Movie Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="Movie Genre">
        <Form.Label >Movie Genre</Form.Label>
        <Form.Control  name='genre' placeholder="Movie Genre" />
      </Form.Group>

       
      </Row>

      
      <Form.Group className="mb-3" controlId="Cast Name">
        <Form.Label>Cast Name</Form.Label>
        <Form.Control   name='casts' placeholder="Cast Name" />
      </Form.Group>

      <Form.Group  className="mb-3" controlId="date">
    <Form.Label>Select Release Date</Form.Label>
<DatePicker  name='releaseDate' selected={startDate} onChange={(date:Date) => setStartDate(date)} />
</Form.Group>
  
<textarea  name="description" rows="4" cols="50" form="usrform">
Enter text here...</textarea>
 
    </Form>

    </div>
    <Button variant="primary" type="submit" value="Upload" id="mbtn">
        Submit
      </Button>
    </>
  )
}
