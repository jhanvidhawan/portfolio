import React from 'react';
import './Hero.css';
import bgimage from '../assets/images/bg.png';
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1 className='hero-heading'>
          I am Rayan Adlrdard <br />
          <span className='heading-span'>Front-end</span> Developer
        </h1>
        <p className='hero-para'>
          As a frontend developer specializing in the MERN stack, I build dynamic, user-centric web applications using React.js. My expertise
          extends to integrating MongoDB, Express.js, and Node.js to create seamless, high-performance solutions.
        </p>
        <button className='hero-button'>HIRE ME <FaArrowRight />
        </button>
      </div>
      <div>
      <img src={bgimage} alt="bgimage" />
      </div>
    </section>
  );
}

export default Hero;
