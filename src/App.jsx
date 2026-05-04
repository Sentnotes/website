import React, { useState, useEffect } from 'react';
import { Activity, Moon, Heart, Droplets, Leaf } from 'lucide-react';
import './index.css';
import './App.css';

import WalletSectionV3 from './components/WalletSectionV3';
import AskAlisonSection from './components/AskAlisonSection';
import FragmentedSection from './components/FragmentedSection';
import BentoSignalsSection from './components/BentoSignalsSection';

export const WALLETS = [
  {
    id: 'activities',
    title: 'Activities',
    description: 'Track your daily movement and challenges. Your steps, distance, and active energy are stacked securely here.',
    cards: [
      { id: 'a1', title: 'Steps', value: '8,432', unit: 'Steps', color: '#FF595E' },
      { id: 'a2', title: 'Distance', value: '3.2', unit: 'Miles', color: '#FFCA3A' },
      { id: 'a3', title: 'Active Energy', value: '450', unit: 'kcal', color: '#8AC926' },
    ]
  },
  {
    id: 'nutrition',
    title: 'Nutrition',
    description: 'Your daily intake, beautifully categorized. Monitor your calories and macronutrients at a glance.',
    cards: [
      { id: 'n1', title: 'Breakfast', value: '450', unit: 'kcal', color: '#FF6B6B' },
      { id: 'n2', title: 'Lunch',     value: '650', unit: 'kcal', color: '#4ECDC4' },
      { id: 'n3', title: 'Snack',     value: '250', unit: 'kcal', color: '#FFE66D' },
      { id: 'n4', title: 'Dinner',    value: '800', unit: 'kcal', color: '#1A535C' },
    ]
  },
  {
    id: 'health-log',
    title: 'Health Log',
    description: 'A secure vault for your symptoms, cycle tracking, and daily health metrics.',
    cards: [
      { id: 'h1', title: 'Symptoms', value: '2', unit: 'Logged', color: '#FF70A6' },
      { id: 'h2', title: 'Conditions', value: '1', unit: 'Active', color: '#70D6FF' },
      { id: 'h3', title: 'Vitals', value: '68', unit: 'BPM', color: '#FF9770' },
    ]
  },
  {
    id: 'bio-intel',
    title: 'Bio Intelligence',
    description: 'Advanced analytics based on your physiological data. Predict trends and optimize recovery.',
    cards: [
      { id: 'b1', title: 'Sleep Score', value: '85', unit: '/100', color: '#E20303' },
      { id: 'b2', title: 'HRV', value: '45', unit: 'ms', color: '#18024C' },
      { id: 'b3', title: 'Respiratory', value: '14', unit: 'br/min', color: '#01B84E' },
    ]
  },
  {
    id: 'meditation',
    title: 'State Meditation',
    description: 'Your mindfulness journey. Access guided sessions, breathing exercises, and track your streaks.',
    cards: [
      { id: 'm1', title: 'Mindful Minutes', value: '15', unit: 'min', color: '#1982C4' },
      { id: 'm2', title: 'Current Streak', value: '5', unit: 'Days', color: '#6A4C93' },
    ]
  }
];

// AnimatedClouds moved to WalletSection.jsx

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background blur on scroll
      setScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = ['home', 'features', 'about'];
      let current = '';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.wallet-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'glass' : ''}`}>
        <div className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          SentNotes
        </div>
        <div className="nav-links">
          <button 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => scrollTo('home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Home
          </button>
          <button 
            className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}
            onClick={() => scrollTo('features')}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Features
          </button>
          <button 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollTo('about')}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            About
          </button>
        </div>
      </nav>

      {/* Hero and Wallets are now merged into WalletSection for the scroll animation */}

      {/* Ask Alison / Hero Intro Section */}
      <AskAlisonSection />

      {/* === Grey Background Zone — Sky ends here === */}
      <div className="grey-zone">

        {/* Healthcare Is Fragmented Section */}
        <FragmentedSection />

        {/* Health Intelligence Bento Grid Section */}
        <BentoSignalsSection />

        {/* Features / Wallets Section with SVG Animation */}
        <section id="features">
          <WalletSectionV3 wallets={WALLETS} />
        </section>

        {/* About Section */}
        <section id="about">
          <div className="section-header">
            <h2 className="section-title">About SentNotes</h2>
            <p className="section-subtitle">
              Built for privacy, designed for clarity.
            </p>
          </div>
          
          <div className="about-content">
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Seamless Sync</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              The SentNotes website is an extension of your mobile experience. 
              Everything is securely synced, giving you access to your health data 
              wherever you go, with the same gorgeous interface you love.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <button className="cta-button" style={{ background: 'rgba(0,0,0,0.1)', color: 'var(--text-primary)' }}>
                Download iOS App
              </button>
              <button className="cta-button">
                Sign In to Web
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
