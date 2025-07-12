import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Topics from '../components/Topics';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
        <Hero />
        <Features />
        <Topics />
        <Footer />
    </div>
  );
};

export default Home;