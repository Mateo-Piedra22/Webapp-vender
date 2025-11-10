import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
};

export default Home;