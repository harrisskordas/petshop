import React from 'react';
import './AboutUs.css'; // Add styles for Contact page
import image from '../assets/images/image.png';

const AboutUs: React.FC = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Welcome to our Pet Shop! We are passionate about providing high-quality products and services for your pets.
      </p>
      <div>
        <img src={image} alt="Our Store" />
      </div>
    </div>
  );
};

export default AboutUs;