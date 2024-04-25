import React from 'react';
import './Testimonials.scss';
import { TestimonialsSwiper } from '../TestimonialsSwiper/TestimonialsSwiper';
import { Link } from 'react-router-dom';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        'Exemplary Customer Service from Start to Finish""From my initial inquiry, the level of customer service and guidance I received for my kitchen plans has been exceptional..',
      author: 'Luke, Leeds',
    },
    {
      quote:
        "The attention to detail and quality of the products exceeded our expectations. Our kitchen is now the centerpiece of our home, thanks to the team's hard work.",
      author: 'Omar, Bristol',
    },
    {
      quote:
        "I'm absolutely thrilled with my new kitchen. The design process was seamless, and the installation team was professional and efficient. Highly recommend!",
      author: 'Lisa, Manchester',
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials__header">
        <p className="testimonials__subtitle">What our customers say</p>
        <h3 className="testimonials__title">
          Trusted for Over 35 Years: Crafting Exceptional Handmade Kitchens
        </h3>
      </div>
      <TestimonialsSwiper testimonials={testimonials} />
      <div className="testimonials__bottom">
        <Link to="#" className="testimonials__button">
          Frequently Asked Questions
        </Link>
      </div>
    </section>
  );
};
