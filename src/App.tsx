import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import News from './pages/News';
import EShop from './pages/EShop';
import './App.css'; // Import your global styles

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="news">
          <News />
        </section>
        <section id="eshop">
          <EShop />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;