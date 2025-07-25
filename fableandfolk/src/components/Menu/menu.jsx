"use client"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import './Menu.css';

const Menu = ({ isOpen, onClose }) => {
  const menuClassName = `menu-overlay ${isOpen ? 'menu-overlay--open' : ''}`;

   useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
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

      <Link to="/" className="menu-logo">
        F&<span className="logo-f-gold">f</span>
      </Link>
    </div>
  );
};

export default Menu;