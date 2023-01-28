import React from 'react'
import Container from 'react-bootstrap/Container';
import companyLogo from '../../src/logo-1.png';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Nav1() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand id="nav" href="#">Cool Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link id="navLinks" href="/">Dashboard</Nav.Link>
            <Nav.Link id="navLinks" href="/reg">Register</Nav.Link>

            <Nav.Link id="navLinks" href="/admins">Admins</Nav.Link>
            <Nav.Link id="navLinks" href="/subs">Subscriptions</Nav.Link>
            <Nav.Link id="navLinks" href="#" > Movies</Nav.Link>
            <Nav.Link id="navLinks" href="/allUsers" >
              Users
            </Nav.Link>
          </Nav>

          <img id="logo" src={companyLogo} height="40px" alt="BigCo Inc. logo"/>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
