import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <main className="about-hero-section">
        <div className="about-hero-content">
          <h1 className="about-hero-title">Track. Understand. Optimize. Repeat.</h1>
          
          <div className="about-gallery-grid">
            
            {/* Left Image Card */}
            <div className="about-gallery-item">
              <div className="about-image-wrapper">
                <img src="/web-assets/about1.jpg" alt="SentNotes Sync" className="about-hero-img" />
              </div>
              <div className="about-caption">
                <p>
                  <strong>Continuous Sync.</strong> Seamlessly connect your daily inputs and medical data across all your devices, ensuring your health profile is always up to date.
                </p>
              </div>
            </div>

            {/* Right Image Card */}
            <div className="about-gallery-item">
              <div className="about-image-wrapper">
                <img src="/web-assets/about2.png" alt="SentNotes Privacy" className="about-hero-img" />
              </div>
              <div className="about-caption">
                <p>
                  <strong>Privacy Locked.</strong> Your sensitive health data is encrypted and stored securely, keeping your personal records strictly yours.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Mission & Vision Block */}
      <section className="about-mission-section">
        <div className="about-mission-content">
          <h2 className="mission-headline">
            Your health is a continuous story. We built the intelligent wallet to tell it.
          </h2>
          <p className="mission-paragraph">
            Our mission is to move beyond passive tracking. We created SentNotes to be a single, secure place where all your physical signals, medical history, and daily habits converge—giving you the complete picture of your health, every single day.
          </p>
        </div>
      </section>

      {/* Narrative Flow Section */}
      <section className="about-flow-section">
        <div className="about-flow-container">
          
          <div className="flow-item centered">
            <div className="flow-text-side">
              <span className="flow-eyebrow">BEYOND TRACKING</span>
              <h3 className="flow-title">Context over raw data.</h3>
              <p className="flow-description">
                Step counts and heart rates are just noise without context. We connect your physical signals with your emotional state, nutrition, and clinical history to generate actionable, real-world insights.
              </p>
            </div>
          </div>

          <div className="flow-item centered">
            <div className="flow-text-side">
              <span className="flow-eyebrow">THE INTELLIGENT WALLET</span>
              <h3 className="flow-title">A central vault for your body.</h3>
              <p className="flow-description">
                Imagine every symptom, every prescription, and every vital sign organized perfectly in your pocket. SentNotes acts as a living, intelligent record of your physical self.
              </p>
            </div>
          </div>

          <div className="flow-item centered">
            <div className="flow-text-side">
              <span className="flow-eyebrow">EMPOWERING YOUR STORY</span>
              <h3 className="flow-title">Better data, better care.</h3>
              <p className="flow-description">
                When you own your complete health narrative, the conversation with your doctor changes. No more forgotten details or missing lab results. You arrive prepared, informed, and empowered.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;
