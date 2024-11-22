import React from 'react';
import './Carousel.css'; // Προσθέστε στυλ αν χρειάζεται

const Carousel: React.FC = () => {
  return (
    <div className="carousel">
      <div className="carousel-item">
        <img src="/assets/images/slide1.jpg" alt="Slide 1" />
        <h3>Quality Products for Your Pets</h3>
      </div>
      <div className="carousel-item">
        <img src="/assets/images/slide2.jpg" alt="Slide 2" />
        <h3>Exclusive Offers This Week!</h3>
      </div>
    </div>
  );
};

export default Carousel;