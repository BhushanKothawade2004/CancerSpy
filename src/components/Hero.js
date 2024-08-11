import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <Container className="text-center">
        <h1>Welcome to Medico</h1>
        <p>Your Health, Our Priority</p>
        <Link to="about" smooth={true} duration={1000}>
          <Button variant="primary">Learn More</Button>
        </Link>
      </Container>
    </section>
  );
}

export default Hero;
