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
                Your health is scattered.
              </h3>
              <p className="card-subtext">
                Your lab results live in one portal, your prescriptions in another, and your doctor only sees part of the picture. The rest lives in your memory — scattered across conversations, apps, and timelines that never quite connect.
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
              Care Happens in Moments.<br/>
              Health Happens <span className="purple-text">Every Day.</span>
            </h3>
            <p className="card-paragraph-centered">
              Healthcare is built around brief appointments spaced months apart, where decisions are made with limited context. But your health doesn’t follow a schedule — it evolves daily, through small changes, recurring symptoms, and patterns that often go unnoticed.
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

        {/* Card 3 - Light */}
        <div className="fragmented-card light-card">
          <h3 className="card-headline">
            You’re the One Connecting Everything
          </h3>
          <p className="card-subtext" style={{ marginBottom: '32px' }}>
            You repeat your history at every visit, try to remember what changed and when, and piece together insights no one else has time to track. You’ve been holding your health story together on your own.
          </p>
          <p className="card-punchline" style={{ color: '#111', marginTop: 'auto' }}>
            You’ve been acting as your own health system. That’s not how it should work.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FragmentedSection;
