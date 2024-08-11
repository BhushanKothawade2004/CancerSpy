import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import '../styles/FAQ.css';

const FAQ = () => {
  return (
    <section id="faq" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Question 1?</Accordion.Header>
            <Accordion.Body>
              Answer to question 1.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Question 2?</Accordion.Header>
            <Accordion.Body>
              Answer to question 2.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
}

export default FAQ;
