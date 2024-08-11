import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Testimonials</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Text>
                  "Great service, highly recommended!"
                </Card.Text>
                <Card.Subtitle className="text-muted">- John Doe</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Text>
                  "The staff was very professional."
                </Card.Text>
                <Card.Subtitle className="text-muted">- Jane Doe</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Text>
                  "I felt cared for and appreciated."
                </Card.Text>
                <Card.Subtitle className="text-muted">- Sam Smith</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
