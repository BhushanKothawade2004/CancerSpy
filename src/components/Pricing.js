import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Pricing</h2>
        <Row>
          <Col md={4}>
            <Card className="pricing-card">
              <Card.Body>
                <Card.Title>Basic Plan</Card.Title>
                <Card.Text>₹200 per month</Card.Text>
                <ul className="list-unstyled">
                  <li>Basic Health Consultation</li>
                  <li>Routine Check-ups</li>
                  <li>Access to General Ward</li>
                  <li>24/7 Customer Support</li>
                </ul>
                <Button variant="primary">Sign Up</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="pricing-card popular-plan">
              <Card.Body>
                <div className="badge">Most Popular</div>
                <Card.Title>Standard Plan</Card.Title>
                <Card.Text>₹499 per month</Card.Text>
                <ul className="list-unstyled">
                  <li>Specialist Consultations</li>
                  <li>Comprehensive Diagnostic Tests</li>
                  <li>Access to Private Room</li>
                  <li>Personalized Health Plans</li>
                  <li>Priority Appointment Scheduling</li>
                </ul>
                <Button variant="primary">Sign Up</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="pricing-card">
              <Card.Body>
                <Card.Title>Premium Plan</Card.Title>
                <Card.Text>₹999 per month</Card.Text>
                <ul className="list-unstyled">
                  <li>Comprehensive Health Assessment</li>
                  <li>Access to VIP Suite</li>
                  <li>Dedicated Medical Concierge</li>
                  <li>Unlimited Specialist Consultations</li>
                  <li>Tailored Wellness Programs</li>
                  <li>Complimentary Medical Procedures</li>
                </ul>
                <Button variant="primary">Sign Up</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Pricing;
