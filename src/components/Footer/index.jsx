import React from 'react';
import { socialLinks } from '@data/menu';

const Footer = () => {
  
  return (
    <footer className="main-footer">
      <div className="main-footer--container">
        <div className="main-footer--social-links">
            {socialLinks.map((item, index) => {
              return (
                <a key={index} href={item.uri} target="_blank">
                  {item.name}
                  <img src={item.icon} width="30" height="30" alt={item.name + '-logo'}/>
                </a>
              )
            })}
        </div> 
      </div>
    </footer>
  )
}

export default Footer
