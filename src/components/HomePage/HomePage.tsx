import React from 'react';
import './HomePage.scss';
import { Intro } from '../Intro';
import { HeroSection } from '../Hero';
import { Testimonials } from '../Testimonials';
import { Gallery } from '../Gallery';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Intro />
      <HeroSection />
      <Testimonials />
      <Gallery />
    </div>
  );
};
