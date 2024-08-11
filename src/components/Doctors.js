import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Doctors.css';
import doctor1 from '../images/doctor1.jpg';
import doctor2 from '../images/doctor2.jpg';
import doctor3 from '../images/doctor3.jpg';
import doctor4 from '../images/doctor4.jpg';

const Doctors = () => {
  return (
    <section id="doctors" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Meet Our Doctors</h2>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={doctor1} />
              <Card.Body>
                <Card.Title>Dr. John Doe</Card.Title>
                <Card.Text>Cardiologist</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={doctor2} />
              <Card.Body>
                <Card.Title>Dr. Jane Smith</Card.Title>
                <Card.Text>Neurologist</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={doctor3} />
              <Card.Body>
                <Card.Title>Dr. Sam Brown</Card.Title>
                <Card.Text>Pediatrician</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={doctor4} />
              <Card.Body>
                <Card.Title>Dr. Sarah White</Card.Title>
                <Card.Text>General Physician</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Doctors;
