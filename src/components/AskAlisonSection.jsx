import React from 'react';
import './AskAlisonSection.css';
import { AnimatedClouds } from './WalletSectionV3';

const AskAlisonSection = () => {
  return (
    <section id="home" className="ask-alison-section">
      <AnimatedClouds />

      {/* Hero Tagline */}
      <div className="ask-alison-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', maxWidth: '800px', margin: '40px auto 60px', zIndex: 10, position: 'relative' }}>
        <h1 className="ask-alison-title" style={{ fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.1 }}>See your health as a complete story.</h1>
        <p className="ask-alison-subtitle" style={{ fontSize: 'clamp(1.1rem, 4vw, 1.25rem)', lineHeight: 1.5, maxWidth: '600px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
          From symptoms and medication to daily habits like sleep and activity — everything connects over time so you can understand what’s going on.
        </p>
        <button style={{ marginTop: '10px', pointerEvents: 'auto', padding: '14px 36px', backgroundColor: 'white', color: '#161616', borderRadius: '30px', border: 'none', fontSize: '1.05rem', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', transition: 'transform 0.2s ease' }}>
          Download the app
        </button>
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
