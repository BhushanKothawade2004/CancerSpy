import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/AboutUs.css';
import about from '../images/about.jpg';

const AboutUs = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row>
          <Col md={6}>
          <img src={about} alt="About Us" className="img-fluid" />
          </Col>
          <Col md={6}>
            <h2>About Us</h2>
            <p>We are committed to providing the best healthcare services with a team of highly skilled professionals.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutUs;
