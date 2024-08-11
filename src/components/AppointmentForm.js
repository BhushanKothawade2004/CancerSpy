import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import '../styles/AppointmentForm.css';

const AppointmentForm = () => {
  return (
    <section id="appointment" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Make an Appointment</h2>
        <Form>
          <Row>
            <Col md={4}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter your phone number" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="mt-3">
            Schedule Appointment
          </Button>
        </Form>
      </Container>
    </section>
  );
}

export default AppointmentForm;
