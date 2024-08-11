import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import '../styles/Departments.css';
import department1 from '../images/departments-1.jpg';
import department2 from '../images/departments-2.jpg';
import department3 from '../images/departments-3.jpg';
import department4 from '../images/departments-4.jpg';
import department5 from '../images/departments-5.jpg';

const Departments = () => {
  const [activeKey, setActiveKey] = useState('cardiology');

  const departments = {
    cardiology: {
      title: 'Cardiology',
      description: `Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka`,
      details: `Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui.`,
      imgSrc: department1
    },
    neurology: {
      title: 'Neurology',
      description: `Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka`,
      details: `Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates.`,
      imgSrc: department2
    },
    hepatology: {
      title: 'Hepatology',
      description: `Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et.`,
      details: `Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut.`,
      imgSrc: department3
    },
    pediatrics: {
      title: 'Pediatrics',
      description: `Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus.`,
      details: `Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit.`,
      imgSrc: department4
    },
    ophthalmologists: {
      title: 'Ophthalmologists',
      description: `Omnis blanditiis saepe eos autem qui sunt debitis porro quia.`,
      details: `Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui.`,
      imgSrc: department5
    }
  };

  return (
    <section id="departments" className="py-5">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Departments</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
          <Row>
            <Col lg={3}>
              <Nav variant="pills" className="flex-column" data-aos="fade-up" data-aos-delay="100">
                {Object.keys(departments).map((key) => (
                  <Nav.Item key={key}>
                    <Nav.Link eventKey={key} className={key === activeKey ? 'active show' : ''}>
                      {departments[key].title}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col lg={9} className="mt-4 mt-lg-0">
              <Tab.Content>
                {Object.keys(departments).map((key) => (
                  <Tab.Pane eventKey={key} key={key} className={key === activeKey ? 'active show' : ''}>
                    <Row>
                      <Col lg={8} className="details order-2 order-lg-1">
                        <h3>{departments[key].title}</h3>
                        <p className="fst-italic">{departments[key].description}</p>
                        <p>{departments[key].details}</p>
                      </Col>
                      <Col lg={4} className="text-center order-1 order-lg-2">
                        <img src={departments[key].imgSrc} alt={departments[key].title} className="img-fluid" />
                      </Col>
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default Departments;
