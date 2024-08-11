import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-white">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2024 . All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <p>Privacy Policy | Terms & Conditions</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
