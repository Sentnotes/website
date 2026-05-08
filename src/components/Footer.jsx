import React from 'react';
import './Footer.css';
import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">SentNotes</h3>
            <p className="footer-description">
              Your health story. Unified, secure, and always with you.
            </p>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-link-group">
              <h4>Product</h4>
              <Link to="/features">Features</Link>
              <a href="#">Updates</a>
            </div>
            
            <div className="footer-link-group">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <a href="#">Contact</a>
              <Link to="/careers">Careers</Link>
            </div>

            <div className="footer-link-group">
              <h4>Legal</h4>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="footer-cta-section">
          <div className="footer-cta-text">
            <h4>Ready to take control?</h4>
            <p>Download the iOS app today.</p>
          </div>
          <a 
            href="https://apps.apple.com/hu/app/sentnotes/id6755358987" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-download-btn-link"
            style={{ textDecoration: 'none' }}
          >
            <button className="footer-download-btn">
              <Download size={20} />
              <span>Download for iOS</span>
            </button>
          </a>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} SentNotes Inc. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
