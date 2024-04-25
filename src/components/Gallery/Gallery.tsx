import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.scss';
import { Container } from '../Container';

const images = [
  'images/photo-1.jpg',
  'images/photo-left-1.jpeg',
  'images/photo-3.jpg',
  'images/photo-4.jpg',
];

export const Gallery = () => {
  return (
    <section className="gallery">
      <Container>
        <div className="gallery__content">
          <h3 className="gallery__title">Customer Gallery</h3>
          <div className="gallery__images">
            {images.map((image, index) => (
              <img
                src={image}
                key={index}
                className="gallery__image-thumbnail"
              />
            ))}
          </div>
          <Link to="#" className="gallery__link">
            View more
          </Link>
        </div>
      </Container>
    </section>
  );
};
