import React from 'react';
import './Intro.scss';
import { Link } from 'react-router-dom';
import { HeaderSwiper } from '../HeaderSwiper';

export const Intro: React.FC = () => {
  return (
    <div className="intro">
      <HeaderSwiper />
      <div className="intro__content">
        <p className="intro__text">Craft Your Ideal Kitchen with Ease!</p>
        <h1 className="intro__title">
          Unique Handmade Kitchen Designs,
          <br />
          Made for You
        </h1>
        <Link to="#" className="intro__cta">
          Order now
        </Link>
      </div>
    </div>
  );
};
