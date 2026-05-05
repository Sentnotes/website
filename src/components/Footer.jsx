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
              <a href="#">Security</a>
              <a href="#">Updates</a>
            </div>
            
            <div className="footer-link-group">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </div>

            <div className="footer-link-group">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>

        <div className="footer-cta-section">
          <div className="footer-cta-text">
            <h4>Ready to take control?</h4>
            <p>Download the iOS app today.</p>
          </div>
          <button className="footer-download-btn">
            <Download size={20} />
            <span>Download for iOS</span>
          </button>
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
