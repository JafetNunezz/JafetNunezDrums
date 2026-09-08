import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SocialSidebar from './components/SocialSidebar/SocialSidebar';
import Features from './components/Features/Features';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <SocialSidebar />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
}

export default App;
