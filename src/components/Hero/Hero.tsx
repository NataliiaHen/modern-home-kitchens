import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';

export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__image-container">
        {/* Background image set via SCSS */}
      </div>
      <div className="hero__content">
        <p className="hero__subtitle">
          Crafted with Care: Quality Every Step of the Way
        </p>
        <h2 className="hero__title">
          Embrace the Beauty of Craftsmanship
          <br />
          in Your Kitchen
        </h2>
        <p className="hero__text">
          Experience the luxury of a bespoke, handmade kitchen tailored to your
          unique style. Start designing your perfect kitchen space online today
          with our made-to-measure solutions. Elevate your home with elegance
          and precision craftsmanship.
        </p>
        <Link to="#" className="hero__link">
          About us
        </Link>
      </div>
    </section>
  );
};
