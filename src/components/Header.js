import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../styles/Header.css';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Cancer Spy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="hero" smooth={true} duration={1000}>Home</Nav.Link>
            <Nav.Link as={Link} to="about" smooth={true} duration={1000}>About</Nav.Link>
            <Nav.Link as={Link} to="services" smooth={true} duration={1000}>Services</Nav.Link>
            <Nav.Link as={Link} to="appointment" smooth={true} duration={1000}>Appointment</Nav.Link>
            <Nav.Link as={Link} to="departments" smooth={true} duration={1000}>Departments</Nav.Link>
            <Nav.Link as={Link} to="doctors" smooth={true} duration={1000}>Doctors</Nav.Link>
            <Nav.Link as={Link} to="pricing" smooth={true} duration={1000}>Pricing</Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={1000}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
