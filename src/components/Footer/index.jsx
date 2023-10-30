import React from 'react';
import { socialLinks } from '@data/menu';

const Footer = () => {
  
  return (
    <footer className="main-footer">
      <div className="container main-footer--container">
        <div className="social-links">
            {socialLinks.map((item, index) => {
              return (
                <a 
                  key={index} 
                  href={item.uri} 
                  target="_blank"
                  className="social-links--item"
                >
                  {item.name}
                  <img 
                    className="social-links--item__image"
                    src={item.icon} 
                    width="30" 
                    height="30" 
                    alt={item.name + '-logo'}
                  />
                </a>
              )
            })}
        </div> 
        <div className="main-footer--copyright">
            <p>Copyright © 2020 All rights reserved </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
