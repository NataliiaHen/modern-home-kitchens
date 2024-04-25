import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.scss';
import { SocialIcon } from '../../utils/SocialIcon';
import { Logo } from '../Logo';
import { Container } from '../Container';

export const Footer = () => {
  const iconProps = {
    className: 'footer__socials-icon',
  };
  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__line">
            <div className="footer__logo">
              <Logo />
            </div>
          </div>
          <div className="footer__columns">
            <div className="footer__column">
              <h4 className="footer__column-title">About</h4>
              <div className="footer__links">
                <Link to="#" className="footer__link">
                  Shop
                </Link>
                <Link to="#" className="footer__link">
                  Plan My Kitchen
                </Link>
                <Link to="#" className="footer__link">
                  About Us
                </Link>
                <Link to="#" className="footer__link">
                  Gallery
                </Link>
              </div>
            </div>

            {/* Service Column */}
            <div className="footer__column">
              <h4 className="footer__column-title">Service</h4>
              <div className="footer__links">
                <Link to="#" className="footer__link">
                  FAQ
                </Link>
                <Link to="#" className="footer__link">
                  Contact
                </Link>
                <Link to="#" className="footer__link">
                  How to Buy
                </Link>
                <Link to="#" className="footer__link">
                  Downloads
                </Link>
              </div>
            </div>

            {/* Info Column */}
            <div className="footer__column">
              <h4 className="footer__column-title">Info</h4>
              <div className="footer__links">
                <Link to="#" className="footer__link">
                  Delivery
                </Link>
                <Link to="#" className="footer__link">
                  Terms
                </Link>
                <Link to="#" className="footer__link">
                  Privacy
                </Link>
              </div>
            </div>

            {/* Follow Column */}
            <div className="footer__column">
              <h4 className="footer__column-title">Follow us</h4>
              <div className="footer__socials">
                <div className="footer__socials-item">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon iconProps={iconProps}>
                      <FaFacebookF />
                    </SocialIcon>
                  </a>
                </div>
                <div className="footer__socials-item">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon iconProps={iconProps}>
                      <FaTwitter />
                    </SocialIcon>
                  </a>
                </div>
                <div className="footer__socials-item">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon iconProps={iconProps}>
                      <FaInstagram />
                    </SocialIcon>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <small>
              Copyright Online MTC Home Kitchens 2018 - All rights reserved.
            </small>
            <small>
              Responsive website design, Development & Hosting by mtc.
            </small>
          </div>
        </div>
      </Container>
    </footer>
  );
};
