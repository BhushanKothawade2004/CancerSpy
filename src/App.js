import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import AppointmentForm from './components/AppointmentForm';
import Departments from './components/Departments';
import Testimonials from './components/Testimonials';
import Doctors from './components/Doctors';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <AboutUs />
      <Services />
      <AppointmentForm />
      <Departments />
      <Testimonials />
      <Doctors />
      <Gallery />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
