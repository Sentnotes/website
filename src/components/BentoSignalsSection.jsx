import React from 'react';
import './BentoSignalsSection.css';
import { Mic, TrendingUp, Zap } from 'lucide-react';

const BentoSignalsSection = () => {
  return (
    <section className="bento-section">
      <div className="bento-container">
        
        {/* Top Grid Area */}
        <div className="bento-grid-top">
          
          {/* Main Large Card */}
          <div className="bento-card bento-large solid-panel solid-dark">
            <div className="bento-content-top">
              <span className="bento-eyebrow">CONTINUOUS SIGNAL INTELLIGENCE</span>
              <h2 className="bento-title-large">
                Your <em>signals</em> flow into one intelligent, coordinated system
              </h2>
              <div className="bento-circles">
                <div className="bento-circle" style={{ background: '#FFCA3A' }}></div>
                <div className="bento-circle" style={{ background: '#FF595E' }}></div>
                <div className="bento-circle" style={{ background: '#C8A8FF' }}></div>
              </div>
            </div>
            <p className="bento-paragraph">
              Bridge daily life and professional care — replacing reactive check-ins
              with continuous insight.
            </p>
          </div>

          {/* Right Side Column Cards */}
          <div className="bento-grid-right">
            
            <div className="bento-card bento-small solid-panel solid-light flex-center">
              <span className="bento-eyebrow text-center">NATURAL VOICE INTERFACE</span>
              <div className="bento-icon-wrapper huge-icon">
                <Mic size={48} strokeWidth={1.5} color="#111" />
              </div>
            </div>

            <div className="bento-card bento-small solid-panel solid-light">
              <div className="bento-icon-wrapper green-icon">
                <TrendingUp size={24} strokeWidth={2.5} />
              </div>
              <p className="bento-paragraph-small">
                Data flows in — activity, sleep, nutrition, mood, and clinical metrics.
              </p>
            </div>

            <div className="bento-card bento-small solid-panel solid-light">
              <div className="bento-icon-wrapper orange-icon">
                <Zap size={24} strokeWidth={2.5} />
              </div>
              <p className="bento-paragraph-small">
                Sustained deviations trigger structured summaries and targeted escalation.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Wide Card */}
        <div className="bento-card bento-wide solid-panel solid-dark">
          <div className="bento-tags">
            <span className="bento-tag">Personal baselines</span>
            <span className="bento-tag">Meaningful change</span>
            <span className="bento-tag">Human support</span>
            <span className="bento-tag">One platform</span>
          </div>
          <h2 className="bento-title-medium">Make health measurable</h2>
          <p className="bento-paragraph">
            Every health platform observes. SentNotes completes the loop.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BentoSignalsSection;
