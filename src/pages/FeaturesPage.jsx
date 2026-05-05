import React, { useEffect } from 'react';
import BentoSignalsSection from '../components/BentoSignalsSection';
import WalletSectionV3 from '../components/WalletSectionV3';
import { WALLETS } from '../App'; // Re-using data from App.jsx

const FeaturesPage = () => {
  useEffect(() => {
    // Scroll to top when navigating to this new page
    window.scrollTo(0, 0);

    // Re-apply intersection observer for wallet cards
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

  return (
    <div className="features-page-container grey-zone" style={{ paddingTop: '100px', minHeight: '100vh', width: '100%' }}>
      
      {/* Page Header */}
      <div style={{ textAlign: 'center', padding: '60px 5% 0' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#111', marginBottom: '20px' }}>
          Your Health, Unlocked.
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '700px', margin: '0 auto 40px' }}>
          Explore the tools and intelligence built into SentNotes.
        </p>
      </div>

      {/* Health Intelligence Bento Grid Section */}
      <BentoSignalsSection />

      {/* Features / Wallets Section */}
      <section id="features" style={{ paddingBottom: '80px' }}>
        <WalletSectionV3 wallets={WALLETS} />
      </section>

      {/* About Section */}
      <section id="about" style={{ paddingBottom: '120px' }}>
        <div className="section-header">
          <h2 className="section-title">About SentNotes</h2>
          <p className="section-subtitle">
            Built for privacy, designed for clarity.
          </p>
        </div>
        
        <div className="about-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '0 5%' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Seamless Sync</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            The SentNotes website is an extension of your mobile experience. 
            Everything is securely synced, giving you access to your health data 
            wherever you go, with the same gorgeous interface you love.
          </p>
        </div>
      </section>
      
    </div>
  );
};

export default FeaturesPage;
