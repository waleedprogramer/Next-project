import React from 'react';

function Footer () {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h2>LOCATION & CONTACT</h2>
        <p>Address: 901 N Pitt Str., Suite 170, Alexandria, NY, USA</p>
        <p>Email: <a href="mailto:wordpressriver@gmail.com">waleedbinmehmoodahmed@gmail.com</a></p>
        <p>Open Hour: Sun - Thu: Open 24/7</p>
        <p>Phone: 03182164523</p>
      </div>

      <div className="footer-section">
        <h2>Quick Link</h2>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#trainer">Trainer</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#package">Package</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h2>Social Link</h2>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
          <li><a href="https://linkedin.com">LinkedIn</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h2>Gymfito</h2>
        <p>Gymfito offers a seamless blend of modern aesthetics and user-friendly functionality, empowering you to showcase. © 2024 Gymfito. Designed by Waleed Mehmood. All rights reserved.
        </p>
      </div>
      
    </footer>
  );
};

export default Footer;
