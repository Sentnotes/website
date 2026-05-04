import React from 'react';
import './AskAlisonSection.css';
import { AnimatedClouds } from './WalletSectionV3';

const AskAlisonSection = () => {
  return (
    <section id="home" className="ask-alison-section">
      <AnimatedClouds />

      {/* Hero Tagline */}
      <div style={{ position: 'relative', textAlign: 'center', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', width: '100%', marginBottom: '60px', marginTop: '40px', padding: '0 20px', flexWrap: 'wrap' }}>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(1rem, 4vw, 1.2rem)', margin: 0 }}>Your Daily Health Wallet</p>
        <button style={{ pointerEvents: 'auto', padding: '10px 24px', backgroundColor: 'white', color: '#161616', borderRadius: '30px', border: 'none', fontSize: 'clamp(0.85rem, 3vw, 0.95rem)', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>Download app</button>
      </div>

      <div className="ask-alison-header">
        <h2 className="ask-alison-title">Health Intelligence With You All the Time</h2>
        <p className="ask-alison-subtitle">with Alison</p>
      </div>

      <div className="iphone-frame-wrapper">
        {/* Hardware Buttons */}
        <div className="iphone-button-silent"></div>
        <div className="iphone-button-vol-up"></div>
        <div className="iphone-button-vol-down"></div>
        <div className="iphone-button-power"></div>

        <div className="iphone-inner-bezel">
          <div className="iphone-screen" style={{ backgroundColor: '#000', position: 'relative' }}>
            
            {/* Dynamic Island */}
            <div className="dynamic-island">
              <div className="island-lens-1"></div>
              <div className="island-lens-2"></div>
            </div>

            {/* Static HomeV5 Image */}
            <img 
              src="/web-assets/homescreen.png" 
              alt="Home V5 Screen" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />

          </div>
        </div>
      </div>
    </section>
  );
};
export default AskAlisonSection;
