import React from 'react';
import './Contact.css'; // Add styles for Contact page
import image from '../assets/images/Screenshot 2024-11-22 at 10.31.13 PM.png';

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to reach out to us!</p>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your name" />
        <label>Email:</label>
        <input type="email" placeholder="Your email" />
        <label>Message:</label>
        <textarea placeholder="Your message"></textarea>
        <button type="submit">Submit</button>
      </form>
      <h3>Our Location</h3>
      <p>Find us at: <strong>123 Pet Street, Pet City, 12345</strong></p>
      <div>
        {/* Insert an iframe map or a simple image of the store location */}
        <img src={image} alt="Map" />
      </div>
    </div>
  );
};

export default Contact;