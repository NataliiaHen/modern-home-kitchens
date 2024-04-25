import './Menu.scss';
import React, { memo, useEffect, useRef } from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Logo } from '../Logo';
import { IconBox } from '../IconBox';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaShoppingCart,
} from 'react-icons/fa';
import { SocialIcon } from '../../utils/SocialIcon';

type Props = {
  closeMenu: () => void;
};

export const Menu: React.FC<Props> = memo(({ closeMenu }) => {
  const iconProps = { className: 'menu__socials-icon' };
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerRefValue = menuRef.current;

    if (!observerRefValue) {
      return undefined;
    }

    disableBodyScroll(observerRefValue);

    return () => observerRefValue && enableBodyScroll(observerRefValue);
  }, []);

  return (
    <aside className="menu" ref={menuRef}>
      <div className="menu__top">
        <Logo />

        <div className="menu__icon-link menu__icon-link--close">
          <IconBox>
            <ReactSVG
              src="images/icons/close.svg"
              className="menu__btn--cross"
              onClick={closeMenu}
            />
          </IconBox>
        </div>
      </div>

      <div className="menu__content">
        <div className="menu__nav">
          <Link to="#" className="menu__nav-item">
            Shop
          </Link>
          <Link to="#" className="menu__nav-item">
            Plan my kitchen
          </Link>
          <Link to="#" className="menu__nav-item">
            About us
          </Link>
          <Link to="#" className="menu__nav-item">
            Gallery
          </Link>
        </div>

        <div className="menu__socials-box">
          <h4 className="menu__socials-title">Follow us</h4>

          <div className="menu__socials">
            <div className="menu__socials-item">
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
            <div className="menu__socials-item">
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
            <div className="menu__socials-item">
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

        <div className="menu__cart">
          <Link to="#" className="menu__cart-button">
            My order
            <FaShoppingCart className="menu__cart-button-icon" />
          </Link>
        </div>
      </div>
    </aside>
  );
});
