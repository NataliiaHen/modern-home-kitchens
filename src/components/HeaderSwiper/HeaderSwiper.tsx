import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './HeaderSwiper.scss';
import { Autoplay, Pagination } from 'swiper/modules';

export const HeaderSwiper: React.FC = () => {
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.destroy();
    }

    swiperRef.current = new Swiper('.header-swiper', {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      modules: [Pagination, Autoplay],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    swiperRef.current.slideTo(0);
  }, []);

  return (
    <div className="header-swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="header-swiper-img-thumb">
            <img src="images/hero-1.jpg" alt="Hero" className="swiper-img" />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="header-swiper-img-thumb">
            <img src="images/hero-2.jpg" alt="Hero" className="swiper-img" />
          </div>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};
