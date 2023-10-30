import React, {useState, useEffect} from 'react';
import { menu } from '@data/menu';
import clsx from 'clsx';

const Header = () => {
  const [hamburgerOpen, setHamburger] = useState(0);
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  const openHamburger = (value) => {
    setHamburger(value);
  }

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <header className={clsx(hamburgerOpen === 0 && 'overflow-hidden')}>
      <div className="main-header--container container">
        <div className="main-header--desktop-items">
          {menu && menu.map((item, index) => {
            return (
              <a 
                key={index}
                className={clsx("main-header--desktop-items__link", activeLink === item.uri && 'active')}
                href={item.uri}
              >
                {item.name}
              </a>
            )
          })}
        </div>
        <div className="main-header--mobile-items">
          <div className="main-header--hamburger__btn" onClick={() => openHamburger(1)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className={clsx("main-header--hamburger__items", hamburgerOpen === 1 && 'shown')}>
          <div className="main-header--hamburger__close" onClick={() => openHamburger(0)}>
            <span></span>
            <span></span>
          </div>
          <div className="main-header--hamburger__items-container">
            {menu && menu.map((item, index) => {
              return (
                <a 
                  key={index}
                  className={clsx('main-header--hamburger__items-link', activeLink === item.uri && 'active')}                  
                  href={item.uri}
                >
                  {item.name}
                </a>
              )
            })}
          </div>
        </div>
    </header>
  )
}

export default Header
