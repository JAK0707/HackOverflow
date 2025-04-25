import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-mission">
          AIXCHANGE: Revolutionizing AI development with the power of community and Web3 technology.
        </p>
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Platform</h3>
            <ul>
              <li><a href="/training">AI Training</a></li>
              <li><a href="/datasets">Datasets</a></li>
              <li><a href="/models">Models</a></li>
              <li><a href="/gpu">Cloud GPU</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="/assistant">Research Assistant</a></li>
              <li><a href="/apps">Custom Apps</a></li>
              <li><a href="/docs">Documentation</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/cookies">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 AIXCHANGE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
