import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <p className="footer-tagline">
          Your success is our favorite <span className="highlight">story.</span>
        </p>
        <nav className="footer-nav">
          <ul>
            <li><a href="mailto:hello@fableandfolk.com">hello@fableandfolk.com</a></li>
            <li><a href="/work">WORK</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>

      <div className="footer-middle">
        <h2 className="footer-brand">Fable&folk</h2>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          COPYRIGHT 2025 FABLE&FOLK. ALL RIGHTS RESERVED
        </p>
        <p className="footer-made-in">
          MADE WITH ♥ IN INDIA
        </p>
      </div>
    </footer>
  );
};

export default Footer;