"use client"
import { Link } from "react-router-dom";
import React from 'react';
import './Menu.css';

const Menu = ({ isOpen, onClose }) => {
  const menuClassName = `menu-overlay ${isOpen ? 'menu-overlay--open' : ''}`;

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