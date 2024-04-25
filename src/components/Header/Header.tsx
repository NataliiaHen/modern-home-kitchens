import React, { useCallback, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './Header.scss';
import { Logo } from '../Logo';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaShoppingCart,
} from 'react-icons/fa';
import { SocialIcon } from '../../utils/SocialIcon';
import { PageSizeContext } from '../../storage/PageSizeContext';
import { ReactSVG } from 'react-svg';
import { Menu } from '../Menu';

export const Header: React.FC = () => {
  const { currentPageSize } = useContext(PageSizeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const iconProps = { className: 'header__socials-icon' };

  return (
    <header className="header">
      <div className="header__content">
        <nav className="header__top-bar">
          {currentPageSize === 'MOBILE' || currentPageSize === 'TABLET' ? (
            <>
              <Logo />

              <ReactSVG
                src="images/icons/Burger.svg"
                className="header__open-menu-btn"
                onClick={() => setIsMenuOpen(true)}
              />
            </>
          ) : (
            <>
              <div className="header__socials">
                <div className="header__socials-item">
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
                <div className="header__socials-item">
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
                <div className="header__socials-item">
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

              <div className="header__nav">
                <div className="header__nav-block">
                  <Link to="#" className="header__nav-item">
                    Shop
                  </Link>
                  <Link to="#" className="header__nav-item">
                    Plan my kitchen
                  </Link>
                </div>
                <Logo />
                <div className="header__nav-block">
                  <Link to="#" className="header__nav-item">
                    About us
                  </Link>
                  <Link to="#" className="header__nav-item">
                    Gallery
                  </Link>
                </div>
              </div>

              <div className="header__cart">
                <Link to="#" className="header__cart-button">
                  My order
                  <FaShoppingCart className="header__cart-button-icon" />
                </Link>
              </div>
            </>
          )}
        </nav>
      </div>

      <CSSTransition
        in={isMenuOpen}
        timeout={300}
        classNames="menu"
        mountOnEnter
        unmountOnExit
      >
        <Menu closeMenu={closeMenu} />
      </CSSTransition>
    </header>
  );
};
