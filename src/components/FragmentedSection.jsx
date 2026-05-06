import React from 'react';
import './FragmentedSection.css';

const FragmentedSection = () => {
  return (
    <section className="fragmented-section">
      <div className="fragmented-header">
        <h2 className="fragmented-main-title">Healthcare Is Fragmented. Life Isn't.</h2>
      </div>

      <div className="fragmented-cards-container">
        
        {/* Card 1 - Light (Wide Card with Image) */}
        <div className="fragmented-card light-card card-wide">
          <div className="card-wide-content">
            <div className="card-text-side">
              <h3 className="card-headline">
                Your health is scattered
              </h3>
              <p className="card-subtext">
                Your lab results live in one place, prescriptions in another, and your doctor only sees part of the picture. The rest is left to memory — across conversations, apps, and moments that never quite connect.
              </p>
              <div className="punchline-wrapper">
                <p className="card-punchline purple-punchline">
                  No single place holds your full health story — but it should.
                </p>
                <svg className="punchline-underline" viewBox="0 0 300 20" preserveAspectRatio="none">
                  <path d="M5,15 Q150,-5 295,12" stroke="#5A45FF" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className="card-image-side">
              <img 
                src="/web-assets/healthisscattered.png" 
                alt="Health data scattered everywhere" 
                className="scattered-card-image"
              />
            </div>
          </div>
        </div>

        {/* Card 2 - Dark (Stacked) */}
        <div className="fragmented-card dark-card card-stacked">
          <div className="card-stacked-header">
            <h3 className="card-headline-large">
              Care happens in moments.<br/>
              Health happens <span className="purple-text">every day.</span>
            </h3>
            <p className="card-paragraph-centered">
              Your body sends signals daily, but most care only captures moments.
            </p>
          </div>
          
          <div className="periodic-image-wrapper">
            <img 
              src="/web-assets/periodiccare.png" 
              alt="Care in moments vs Health every day" 
              className="periodic-card-image"
            />
          </div>

          <div className="card-punchline-pill">
            <div className="pill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <p className="card-punchline" style={{ color: '#fff' }}>
              The system checks in occasionally. <span className="purple-text">Your body doesn’t.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FragmentedSection;
