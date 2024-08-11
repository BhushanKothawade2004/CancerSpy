import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Gallery.css';
import gallery1 from '../images/gallery1.jpg';
import gallery2 from '../images/gallery2.jpg';
import gallery3 from '../images/gallery3.jpg';
import gallery4 from '../images/gallery4.jpg';

const Gallery = () => {
  return (
    <section id="gallery" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Gallery</h2>
        <Row>
          <Col md={3}>
            <img src={gallery1} alt="Gallery 1" className="img-fluid mb-3" />
          </Col>
          <Col md={3}>
            <img src={gallery2} alt="Gallery 2" className="img-fluid mb-3" />
          </Col>
          <Col md={3}>
            <img src={gallery3} alt="Gallery 3" className="img-fluid mb-3" />
          </Col>
          <Col md={3}>
            <img src={gallery4} alt="Gallery 4" className="img-fluid mb-3" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Gallery;
