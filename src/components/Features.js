import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUsers, faHeart, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Features.css';

const Features = () => {
  return (
    <section id="features" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Our Features</h2>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Body>
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faCog} className="feature-icon" />
                </div>
                <Card.Title>Feature One</Card.Title>
                <Card.Text>
                  Description of feature one. This feature provides valuable information to the user.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faUsers} className="feature-icon" />
                </div>
                <Card.Title>Feature Two</Card.Title>
                <Card.Text>
                  Description of feature two. This feature enhances user experience with additional details.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faHeart} className="feature-icon" />
                </div>
                <Card.Title>Feature Three</Card.Title>
                <Card.Text>
                  Description of feature three. This feature includes important aspects for user interaction.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faShieldAlt} className="feature-icon" />
                </div>
                <Card.Title>Feature Four</Card.Title>
                <Card.Text>
                  Description of feature four. This feature offers enhanced security and protection.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
