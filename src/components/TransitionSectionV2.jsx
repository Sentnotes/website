import React from 'react';
import './TransitionSectionV2.css';
import './AskAlisonSection.css'; // Ensure iPhone 17 CSS is loaded

const TransitionSectionV2 = () => {
  return (
    <section className="transition-section-v2">
      <div className="transition-container">
        <p className="transition-tagline">There should be a better way.</p>
        <h2 className="transition-headline">
          You don’t have to hold it all together anymore.
        </h2>
        <p className="transition-subtext">
          SentNotes brings your entire health story into one continuous, intelligent system — so nothing gets lost, forgotten, or disconnected.
        </p>
      </div>

      {/* Rainbow Arcs Background */}
      <div className="rainbow-arcs-container">
        <svg viewBox="0 0 1000 500" width="100%" height="100%" preserveAspectRatio="xMidYMax slice">
          {/* 7 distinct rainbow arcs, seamlessly touching */}
          <circle cx="500" cy="500" r="480" fill="none" stroke="#FF3B30" strokeWidth="30" />
          <circle cx="500" cy="500" r="450" fill="none" stroke="#FF9500" strokeWidth="30" />
          <circle cx="500" cy="500" r="420" fill="none" stroke="#FFCC00" strokeWidth="30" />
          <circle cx="500" cy="500" r="390" fill="none" stroke="#34C759" strokeWidth="30" />
          <circle cx="500" cy="500" r="360" fill="none" stroke="#00C7BE" strokeWidth="30" />
          <circle cx="500" cy="500" r="330" fill="none" stroke="#007AFF" strokeWidth="30" />
          <circle cx="500" cy="500" r="300" fill="none" stroke="#AF52DE" strokeWidth="30" />
        </svg>
      </div>

      <div className="single-wallet-wrapper" style={{ zIndex: 2 }}>
        
        {/* Faded Apple Watch peeking from the left */}
        <div className="faded-watch-wrapper">
          <img 
            src="/web-assets/watch.png" 
            alt="Apple Watch" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        </div>

        {/* Faded iPhone peeking from behind the wallet */}
        <div className="faded-iphone-wrapper">
          <div className="iphone-frame-wrapper" style={{ transform: 'scale(0.85)', transformOrigin: 'bottom center' }}>
            {/* Hardware Buttons */}
            <div className="iphone-button-silent"></div>
            <div className="iphone-button-vol-up"></div>
            <div className="iphone-button-vol-down"></div>
            <div className="iphone-button-power"></div>

            <div className="iphone-inner-bezel">
              <div className="iphone-screen" style={{ backgroundColor: '#000', position: 'relative' }}>
                <div className="dynamic-island">
                  <div className="island-lens-1"></div>
                  <div className="island-lens-2"></div>
                </div>
                <img 
                  src="/web-assets/homescreen.png" 
                  alt="SentNotes iPhone Interface" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>
          </div>
        </div>

        <img 
          src="/web-assets/walleticon.svg" 
          alt="SentNotes Health Wallet" 
          className="transition-wallet-icon"
        />
      </div>
    </section>
  );
};

export default TransitionSectionV2;
