
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Recommendations from './components/Recommendations';
import LeaveMeYourInfo from './components/LeaveMeYourInfo';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="recommendations">
        <Recommendations />
      </section>
      <section id="contact">
        <LeaveMeYourInfo />
      </section>
      <Footer />
      
    </div>
  );
}

export default App;
