import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <main className="about-hero-section">
        <div className="about-hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 className="about-hero-title" style={{ textAlign: 'center', marginBottom: '24px' }}>Health is more than isolated records.</h1>
          <p className="about-hero-paragraph" style={{ maxWidth: '900px', margin: '0 auto 60px', fontSize: 'clamp(1.15rem, 2vw, 1.35rem)', lineHeight: 1.6, color: '#666', textAlign: 'center' }}>
            Most healthcare systems are built around isolated moments — appointments, reports, prescriptions, and test results scattered across different places.<br/><br/>
            But real health is continuous. It changes through symptoms, routines, medication, sleep, stress, and the patterns that shape how we feel over time.
          </p>
          
          <div className="about-gallery-grid">
            
            {/* Left Image Card */}
            <div className="about-gallery-item">
              <div className="about-image-wrapper">
                <img src="/web-assets/about1.jpg" alt="SentNotes Sync" className="about-hero-img" />
              </div>
              <div className="about-caption">
                <p>
                  <strong>Connected everywhere.</strong> Your health stays connected across devices and daily inputs, so your story is always up to date.
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
                  <strong>Private by default.</strong> Your health story belongs to you. Everything is encrypted and securely stored.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Why We Built SentNotes Section */}
      <section className="about-why-section">
        <div className="about-why-content">
          <h2 className="about-why-headline">
            Why we built SentNotes
          </h2>
          <p className="about-why-paragraph">
            Most health tools focus on isolated metrics, short-term tracking, or one part of your health at a time.
          </p>
          <p className="about-why-paragraph">
            But real health is connected. How you sleep affects your mood. Medication affects symptoms. Stress affects energy, routines, and recovery.
          </p>
          <p className="about-why-paragraph strong">
            SentNotes was built to help people see those connections clearly over time.
          </p>
        </div>

        {/* Staggered Image Grid */}
        <div className="staggered-grid-wrapper">
          <div className="staggered-grid-container">
            
            {/* Col 1 */}
            <div className="staggered-col col-1">
              <div className="staggered-item item-medium"></div>
              <div className="staggered-item item-medium"></div>
            </div>

            {/* Col 2 */}
            <div className="staggered-col col-2">
              <div className="staggered-item item-small"></div>
              <div className="staggered-item item-small"></div>
              <div className="staggered-item item-small"></div>
            </div>

            {/* Col 3 */}
            <div className="staggered-col col-3">
              <div className="staggered-item item-tall"></div>
            </div>

            {/* Col 4 */}
            <div className="staggered-col col-4">
              <div className="staggered-item item-xtall"></div>
            </div>

            {/* Col 5 */}
            <div className="staggered-col col-5">
              <div className="staggered-item item-tall"></div>
            </div>

            {/* Col 6 */}
            <div className="staggered-col col-6">
              <div className="staggered-item item-xtall"></div>
            </div>

            {/* Col 7 */}
            <div className="staggered-col col-7">
              <div className="staggered-item item-small"></div>
              <div className="staggered-item item-small"></div>
              <div className="staggered-item item-small"></div>
            </div>

            {/* Col 8 */}
            <div className="staggered-col col-8">
              <div className="staggered-item item-medium"></div>
              <div className="staggered-item item-medium"></div>
            </div>

          </div>
        </div>
      </section>

      {/* More Than Tracking Section */}
      <section style={{ padding: '80px 20px', width: '100%', boxSizing: 'border-box', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#111', marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            More than tracking
          </h2>
          <p style={{ fontSize: 'clamp(1.15rem, 2vw, 1.35rem)', lineHeight: 1.6, color: '#666', marginBottom: '24px', fontWeight: 600 }}>
            SentNotes isn’t just about recording data.
          </p>
          <p style={{ fontSize: 'clamp(1.15rem, 2vw, 1.35rem)', lineHeight: 1.6, color: '#666', marginBottom: '24px' }}>
            Most health apps stop at tracking steps, sleep, symptoms, or routines in isolation. But health doesn’t happen in isolated moments.
          </p>
          <p style={{ fontSize: 'clamp(1.15rem, 2vw, 1.35rem)', lineHeight: 1.6, color: '#666', marginBottom: '24px' }}>
            Sleep affects mood. Medication affects symptoms. Stress affects energy, focus, and recovery over time.
          </p>
          <p style={{ fontSize: 'clamp(1.15rem, 2vw, 1.35rem)', lineHeight: 1.6, color: '#111', fontWeight: 600, margin: 0 }}>
            SentNotes helps you understand your health in context — how the different parts of your daily life connect and change over time.
          </p>
        </div>
      </section>

      {/* Clean Bottom Section */}
      <section style={{ padding: '60px 20px 120px', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#111', marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Your health is a continuous story.
          </h2>
          <p style={{ fontSize: 'clamp(1.15rem, 2vw, 1.35rem)', lineHeight: 1.6, color: '#666', margin: 0 }}>
            SentNotes was created to bring the different parts of your health into one connected place — from symptoms and medication to sleep, routines, and daily life. So instead of scattered records and disconnected moments, you can understand your health as it changes over time.
          </p>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
