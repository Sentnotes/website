import React from 'react';
import './TransitionSection.css';
import './AskAlisonSection.css';

const TransitionSection = () => {
  return (
    <section className="transition-section">
      <div className="transition-container">
        <p className="transition-tagline">There should be a better way.</p>
        <h2 className="transition-headline">
          You don’t have to hold it all together anymore.
        </h2>
        <p className="transition-subtext">
          SentNotes brings your entire health story into one continuous, intelligent system — so nothing gets lost, forgotten, or disconnected.
        </p>
      </div>

      <div className="transition-phones-wrapper">
        <div className="transition-phones-scroll">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="transition-phone-item">
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
                      alt="SentNotes iPhone Interface" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransitionSection;
