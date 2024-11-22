import React from 'react';
import './Header.css'; // Προσθέστε στυλ αν χρειάζεται

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/eshop">E-Shop</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;