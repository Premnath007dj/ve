import React from 'react';
import Hero from '../components/Hero';
import CoreServices from '../components/CoreServices';
import ValueProposition from '../components/ValueProposition';
import Industries from '../components/Industries';
import Process from '../components/Process';
import AboutSummary from '../components/AboutSummary';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <CoreServices />
      <ValueProposition />
      <Industries />
      <Process />
      {/* <AboutSummary /> */}
      <Contact />
    </>
  );
};

export default HomePage;
