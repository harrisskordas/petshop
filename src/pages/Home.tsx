import React from 'react';
import './Home.css'; // Προσθέστε στυλ αν χρειάζεται
import image from '../assets/images/image-2.png';
import image2 from '../assets/images/image-3.png';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Our Pet Shop!</h1>
      <div className="carousel">
        <div className="carousel-item">
          <img src={image} alt="Slide 1" />
          <h3>Quality Products for Your Pets</h3>
        </div>
        <div className="carousel-item">
          <img src={image2} alt="Slide 2" />
          <h3>Exclusive Offers This Week!</h3>
        </div>
      </div>
      <section>
        <h2>Our Categories</h2>
        <div className="categories">
          <div>Food</div>
          <div>Toys</div>
          <div>Accessories</div>
        </div>
      </section>
      <section>
        <h2>Latest News</h2>
        <ul>
          <li>Special discounts this week!</li>
          <li>New arrivals in toys and accessories.</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;