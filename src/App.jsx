import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './index.css';
import './App.css';

import AskAlisonSection from './components/AskAlisonSection';
import FragmentedSection from './components/FragmentedSection';
import TransitionSectionV2 from './components/TransitionSectionV2';
import Footer from './components/Footer';
import FeaturesPage from './pages/FeaturesPage';

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

const Navigation = ({ scrolled }) => {
  const location = useLocation();
  const activeSection = location.pathname === '/features' ? 'features' : 'home';

  return (
    <nav className={`navbar ${scrolled ? 'glass' : ''}`}>
      <div className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        SentNotes
      </div>
      <div className="nav-links">
        <Link 
          to="/"
          className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          style={{ textDecoration: 'none' }}
        >
          Home
        </Link>
        <Link 
          to="/features"
          className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}
          style={{ textDecoration: 'none' }}
        >
          Features
        </Link>
      </div>
    </nav>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="app-container">
        {/* Navigation */}
        <Navigation scrolled={scrolled} />

        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={
            <>
              {/* Hero Intro Section */}
              <AskAlisonSection />

              {/* The rest of the homepage gets the grey background */}
              <div className="grey-zone">
                {/* Healthcare Is Fragmented Section */}
                <FragmentedSection />

                {/* Transition Text Section (1 Centered Wallet on Rainbow) */}
                <TransitionSectionV2 />
              </div>
            </>
          } />

          {/* FEATURES PAGE */}
          <Route path="/features" element={<FeaturesPage />} />
        </Routes>

        {/* Global Footer (shows up on every page at the very bottom) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
