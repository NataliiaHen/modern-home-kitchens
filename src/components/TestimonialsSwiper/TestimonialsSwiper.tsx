import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './TestimonialsSwiper.scss';
import { Navigation } from 'swiper/modules';

type Testimonial = {
  quote: string;
  author: string;
};

type Props = {
  testimonials: Testimonial[];
};

export const TestimonialsSwiper: React.FC<Props> = ({ testimonials }) => {
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.destroy();
    }

    swiperRef.current = new Swiper('.my-swiper', {
      slidesPerView: 1,
      loop: true,
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    swiperRef.current.slideTo(0);
  }, []);

  return (
    <div className="my-swiper">
      <div className="swiper-wrapper">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="swiper-slide">
            <div className="swiper-text">
              <p className="swiper-quote">{testimonial.quote}</p>
              <p className="swiper-author">{testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-buttons">
        <div className="swiper-button-prev">
          <img src="images/icons/Arrow-left.svg" alt="Previous" />
        </div>
        <div className="swiper-button-next">
          <img src="images/icons/Arrow-right.svg" alt="Next" />
        </div>
      </div>
    </div>
  );
};
