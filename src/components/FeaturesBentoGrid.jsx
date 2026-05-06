import React from 'react';
import './FeaturesBentoGrid.css';
import { Activity, Lock, RefreshCw, Moon, Droplet, Heart, Brain } from 'lucide-react';

const FeaturesBentoGrid = () => {
  return (
    <div className="features-bento-container">
      
      <div className="bento-header">
        <h2 className="bento-main-title">A complete picture of your health.</h2>
        <p className="bento-subtitle">Every signal connected. Everything private.</p>
      </div>

      <div className="f-bento-grid">
        
        {/* Large Card: Health Log (2x2) */}
        <div className="f-bento-card f-bento-large dark-panel">
          <div className="f-bento-text">
            <span className="f-bento-eyebrow"><Activity size={16} /> COMPREHENSIVE LOGGING</span>
            <h3>Track symptoms, medications, and vitals</h3>
            <p>Monitor physical signals to gain a better understanding of your body. Log symptoms over time for data-driven insights.</p>
          </div>
          <div className="f-bento-images-grid">
            <img src="/web-assets/symptoms.jpg" alt="Symptoms" className="f-bento-img tilt-left" />
            <img src="/web-assets/medication.jpg" alt="Medications" className="f-bento-img tilt-right" />
          </div>
        </div>

        {/* Tall Card: Mindfulness (1x2) */}
        <div className="f-bento-card f-bento-tall light-panel">
          <div className="f-bento-text">
            <span className="f-bento-eyebrow"><Brain size={16} /> MINDFULNESS</span>
            <h3>Master your physiology</h3>
            <p>Science-backed breathing techniques and real-time biofeedback.</p>
          </div>
          <div className="f-bento-img-container">
            <img src="/web-assets/breathing.jpg" alt="Breathing" className="f-bento-full-img" />
          </div>
        </div>

        {/* Square Card: Privacy (1x1) */}
        <div className="f-bento-card f-bento-square solid-accent">
          <Lock size={32} className="f-bento-icon" />
          <h3>Privacy Lock</h3>
          <p>On-device encryption keeps your health data strictly yours.</p>
        </div>

        {/* Square Card: Sync (1x1) */}
        <div className="f-bento-card f-bento-square dark-panel flex-center">
          <RefreshCw size={32} className="f-bento-icon rotating-icon" />
          <h3>Instant Sync</h3>
          <p>Seamlessly connected across all your devices.</p>
        </div>

        {/* Wide Card: Sleep (2x1) */}
        <div className="f-bento-card f-bento-wide light-panel row-layout">
          <div className="f-bento-text">
            <span className="f-bento-eyebrow"><Moon size={16} /> RECOVERY</span>
            <h3>Optimize your sleep architecture</h3>
            <p>Analyze your nightly cycles, track deep sleep, and wake up refreshed with smart alarms.</p>
          </div>
          <div className="f-bento-img-container">
            <img src="/web-assets/sleep.jpg" alt="Sleep Tracking" className="f-bento-full-img float-img" />
          </div>
        </div>

        {/* Wide Card: Nutrition (2x1) */}
        <div className="f-bento-card f-bento-wide dark-panel row-layout reverse">
          <div className="f-bento-text">
            <span className="f-bento-eyebrow"><Droplet size={16} /> NUTRITION</span>
            <h3>Fuel your specific goals</h3>
            <p>Monitor your distribution of proteins, fats, and carbohydrates to ensure peak performance.</p>
          </div>
          <div className="f-bento-images-grid side-by-side">
            <img src="/web-assets/hydration.jpg" alt="Hydration" className="f-bento-img" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturesBentoGrid;
