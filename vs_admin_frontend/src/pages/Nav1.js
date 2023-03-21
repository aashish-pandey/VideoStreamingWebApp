import React from 'react'
import Container from 'react-bootstrap/Container';
import companyLogo from '../../src/log.png';
import { useCookies } from 'react-cookie';
import {NavDropdown} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Nav1() {
  const [cookies, setCookies] = useCookies(['loginStat'])
  const navigate = useNavigate()
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand id="nav" href="#">Hello Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link id="navLinks" href="/">Dashboard</Nav.Link>
            <Nav.Link id="navLinks" href="/reg">Register</Nav.Link>
<Nav.Link id='navLinks' href='/ban'>Banner</Nav.Link>
            <Nav.Link id="navLinks" href="/admins">Admins</Nav.Link>
      {/* <Nav.Link id="navLinks" href="/EditMovies">EditMovies</Nav.Link> */}

            <Nav.Link id="navLinks" href="/subs">Subscriptions</Nav.Link>
            {/* <Nav.Link id="navLinks" href="/allMovies" > Movies</Nav.Link> */}

      {/* <Nav.Link id="navLinks" href="/EditAdmins">EditAdmins</Nav.Link> */}

            <NavDropdown id="navLinks"   title="Movies" >

<NavDropdown.Item eventKey="Upload" href="/upload">Upload</NavDropdown.Item>

<NavDropdown.Item eventKey="Movie List" href="/allMovies">Lists</NavDropdown.Item>

</NavDropdown>
            <Nav.Link id="navLinks" href="/allUsers" >
              Users
            </Nav.Link>

            <Nav.Link id="navLinks" onClick={()=>{setCookies('isLogged', 'false'); navigate('/login')}} >Logout</Nav.Link>

          </Nav>

          <img id="logo" src={companyLogo} height="40px" alt="BigCo Inc. logo"/>
         
        </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}
