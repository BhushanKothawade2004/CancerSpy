import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Contact Us</h2>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=your-google-map-url" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              title="Google Maps"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
