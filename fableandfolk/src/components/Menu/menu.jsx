import React from 'react';
import './Menu.css';

// Accept the new `isOpen` prop
const Menu = ({ isOpen, onClose }) => {
  // Conditionally create the className string
  const menuClassName = `menu-overlay ${isOpen ? 'menu-overlay--open' : ''}`;

  return (
    // Use the dynamic className
    <div className={menuClassName}> 
      <button className="menu-close-button" onClick={onClose}>
        Close
      </button>

      <nav className="menu-navigation">
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/work">Work</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <div className="menu-logo">
        F&<span className="logo-f-gold">f</span>
      </div>
    </div>
  );
};

export default Menu;