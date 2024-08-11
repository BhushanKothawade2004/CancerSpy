import React from 'react';
import '../styles/Services.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-stethoscope"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Stethoscope Care</h3>
              </a>
              <p>Providing exceptional care with precision and dedication. Expertise in diagnostics and patient management.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="800">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-syringe"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Vaccination Services</h3>
              </a>
              <p>Offering a wide range of vaccinations to keep you and your family safe from diseases.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="900">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-heart"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Cardiac Care</h3>
              </a>
              <p>Comprehensive cardiac services including diagnosis, treatment, and prevention of heart conditions.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="1000">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-brain"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Neurology</h3>
              </a>
              <p>Expert care for neurological conditions including diagnosis and management of brain and spinal disorders.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="1100">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-x-ray"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Diagnostic Imaging</h3>
              </a>
              <p>Advanced imaging services for accurate diagnosis and effective treatment planning.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="1200">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-ambulance"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Emergency Services</h3>
              </a>
              <p>24/7 emergency medical services for urgent care and critical situations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
