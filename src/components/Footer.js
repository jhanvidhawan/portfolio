import React from 'react';
import './Footer.css';
import footerImage from '../assets/images/logofooter.png';
import logo from '../assets/images/Logo.png';
import image1 from '../assets/images/r2.png';
import image2 from '../assets/images/r3.png';
import image3 from '../assets/images/r1.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-image">
        <img src={footerImage} alt="Footer logo" />
      </div>
      <div className="logo-image">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-content">
        <div className="footer-item">
          <div className='leftlogos'>
            <div><img src={image1} alt="Image 1" /><p className='footer-rate'>4.5/5 Rating on Lorem</p></div>
            <div><img src={image2} alt="Image 2" /><p className='footer-rate'>9/10 Rating on Ipsum</p></div>
            <div><img src={image3} alt="Image 3" /><p className='footer-rate'>4.5/5 Rating on Dorel</p></div>
          </div>
        </div>

        <div className="footer-item">
          <h2 className='footer-head'>Quick Links</h2>
          <div className='footer-para'>
            <p>Home</p>
            <p>Skills</p>
            <p>Education</p>
            <p>Projects</p>
            <p>Recommendations</p>
          </div>
        </div>

        <div className="footer-item">
          <h2 className='footer-head'>Portfolio</h2>
          <div className='footer-para'>
            <p>Frontend Developments</p>
            <p>Backend Development</p>
            <p>Website Design</p>
            <p>Machine Learning</p>
            <p>Problem Solving and DSA</p>
          </div>
        </div>

        <div className="footer-item">
          <h2 className='footer-head'>Connect</h2>
          <div className='footer-social'>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Copyright, All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
