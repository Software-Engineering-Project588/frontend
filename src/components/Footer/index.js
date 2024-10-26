import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p className='rights'>&copy; 2024 College Finder. All Rights Reserved.</p>

        <div className="footer-links">
          <a href="#about">About Us</a> |
          <a href="#privacy">Privacy Policy</a> |
          <a href="#contact">Contact Us</a>
        </div>

        <p className='rights'>Follow us on:</p>
        <div className="social-media-icons">
          <a href="https://facebook.com">Facebook</a> |
          <a href="https://twitter.com">Twitter</a> |
          <a href="https://instagram.com">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
