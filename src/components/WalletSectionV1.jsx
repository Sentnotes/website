import React, { useRef, useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import './WalletSection.css';

const CLOUDS_CONFIG = [
  { id: 0, image: '/clouds/1.png', top: '2%',  size: '550px', duration: '50s', delay: '0s',  opacity: 0.8  },
  { id: 1, image: '/clouds/2.png', top: '15%', size: '350px', duration: '35s', delay: '0s',  opacity: 0.65 },
  { id: 2, image: '/clouds/3.png', top: '8%',  size: '420px', duration: '42s', delay: '0s',  opacity: 0.7  },
  { id: 3, image: '/clouds/4.png', top: '20%', size: '300px', duration: '32s', delay: '0s',  opacity: 0.55 },
  { id: 4, image: '/clouds/5.png', top: '5%',  size: '600px', duration: '55s', delay: '18s', opacity: 0.9  },
  { id: 5, image: '/clouds/6.png', top: '12%', size: '400px', duration: '46s', delay: '35s', opacity: 0.6  },
  { id: 6, image: '/clouds/7.png', top: '1%',  size: '450px', duration: '40s', delay: '52s', opacity: 0.75 },
  { id: 7, image: '/clouds/9.png', top: '18%', size: '500px', duration: '49s', delay: '70s', opacity: 0.85 },
];

const AnimatedClouds = () => (
  <div style={{
    position: 'fixed', top: 0, left: 0,
    width: '100vw', height: '45vh',
    overflow: 'hidden', pointerEvents: 'none', zIndex: 5,
  }}>
    {CLOUDS_CONFIG.map(cloud => (
      <img
        key={cloud.id}
        src={cloud.image}
        className="cloud-image"
        alt="cloud"
        style={{
          position: 'absolute',
          top: cloud.top,
          width: cloud.size,
          animationDuration: cloud.duration,
          animationDelay: cloud.delay,
          opacity: cloud.opacity,
        }}
      />
    ))}
  </div>
);

const COLORS    = ['#6B21A8', '#FFD60A', '#E20AFF', '#0AFFFF', '#99FF0A'];
const LIGHT_BG  = new Set(['#FFD60A', '#0AFFFF', '#99FF0A']);
// How many virtual px of wheel-scroll = one full card reveal
const PX_PER_CARD = 350;

const WalletSectionV1 = ({ wallets }) => {
  const [progress, setProgress]   = useState(0);   // 0 → 1 over all cards
  const [released, setReleased]   = useState(false); // true = animation done, page unlocked
  const [expandedSubFrame, setExpandedSubFrame] = useState(null); // e.g., 'challenges', 'macros', etc.
  const lastExpandedRef = useRef(null);
  if (expandedSubFrame) {
    lastExpandedRef.current = expandedSubFrame;
  }
  const currentOrLastSubFrame = expandedSubFrame || lastExpandedRef.current;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const virtualRef = useRef(0);
  const releasedRef = useRef(false);
  const TOTAL_VIRTUAL = wallets.length * PX_PER_CARD;

  /* ── Scroll capture ── */
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      // We only care about scroll within this section's "runway"
      // Assuming the section starts at the top (scrollY = 0)
      const p = Math.max(0, Math.min(scrollY / TOTAL_VIRTUAL, 1));
      setProgress(p);
      
      if (p >= 1) {
        setReleased(true);
      } else {
        setReleased(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [TOTAL_VIRTUAL]);

  /* ── Auto-reset expansion on scroll ── */
  useEffect(() => {
    // Whenever the center-focused card changes, reset any expanded sub-view.
    // This ensures cards aren't 'stuck' in a more-view when you scroll back to them.
    setExpandedSubFrame(null);
  }, [Math.floor(progress * wallets.length)]);

  /* ── Hero text: slides UP and fades as first card rises ── */
  const firstCardD   = progress * wallets.length;           // 0→1 for card-0
  const heroSlide    = Math.min(1, firstCardD) * -15;       // Reduced from -30 to leave more space under navbar
  const heroOpacity  = Math.max(0, 1 - firstCardD * 2.5);  // fades out quickly

  /* ── Section exit ── */
  const sectionOpacity = released ? 0 : 1;

  return (
    <>
      {/* Fixed full-viewport overlay — never causes page scroll */}
      <div
        id="home"
        className="wallet-fullscreen"
        onMouseMove={(e) => {
          const x = (e.clientX / window.innerWidth) * 2 - 1;
          const y = (e.clientY / window.innerHeight) * 2 - 1;
          setMousePos({ x, y });
        }}
        style={{
          opacity: sectionOpacity,
          transition: released ? 'opacity 0.6s ease' : 'none',
          pointerEvents: released ? 'none' : 'auto',
          paddingTop: '80px', /* push content below the fixed navbar */
        }}
      >
        <AnimatedClouds />

        {/* Hero text - Concept 2: Kinetic Typography */}
        <div
          className="hero-content"
          style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            maxWidth: 'none',
            padding: 0,
            zIndex: 10,
            opacity: heroOpacity,
            transform: `translateY(${heroSlide}vh)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            pointerEvents: 'none'
          }}
        >
          {/* Huge Kinetic Typography */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', zIndex: 1 }}>
            <h1 style={{ 
              fontSize: 'clamp(4rem, 11vw, 13rem)', 
              fontWeight: 800, 
              color: 'transparent', 
              WebkitTextStroke: '3px rgba(255,255,255,0.9)', 
              lineHeight: 0.85, 
              margin: 0,
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              transform: `translateX(${mousePos.x * -30}px)`,
              transition: 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
            }}>
              YOUR DAILY
            </h1>
            <h1 style={{ 
              fontSize: 'clamp(4rem, 11vw, 13rem)', 
              fontWeight: 800, 
              color: 'white', 
              lineHeight: 0.85, 
              margin: 0,
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              transform: `translateX(${mousePos.x * 30}px)`,
              transition: 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
            }}>
              HEALTH WALLET
            </h1>
          </div>

          {/* Parallax Wallet Icon */}
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            zIndex: 20, 
            transform: `translate(calc(-50% + ${mousePos.x * 80}px), calc(-50% + ${mousePos.y * 60}px)) rotate(${15 + mousePos.x * 15}deg)`,
            transition: 'transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)',
            width: '100%', 
            maxWidth: '650px',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'
          }}>
            <img 
              src="/web-assets/walleticon.svg" 
              alt="Health Wallet Icon" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                filter: 'drop-shadow(30px 50px 80px rgba(0,0,0,0.5))'
              }} 
            />
          </div>
        </div>

        {/* Card stack */}
        <div className="cards-stack-container">
          {wallets.map((wallet, index) => {
            const brandColor = COLORS[index % COLORS.length];
            // Shift to white as the card rises into focus (d: 0.0 -> 0.3)
            // d is defined just below, so let's calculate it first
            const d = progress * wallets.length - index;
            const focusMix = d < 0 ? 0 : Math.min(1, d / 0.3);
            const bgColor = `color-mix(in srgb, ${brandColor}, #FFFFFF ${focusMix * 100}%)`;
            const textColor = '#1C1C1E'; // Always dark for white background
            const Icon      = wallet.cards[0]?.icon || Activity;
            // Dynamic zIndex: Active card (0 <= d < 1) jumps to the top (100)
            const zIndex    = (d >= 0 && d < 1 || expandedSubFrame) ? 100 : (wallets.length - index);

            // Each card's full lifecycle lives within d ∈ [0, 1]:
            //  d < 0          → resting in bottom stack (not yet active)
            //  0 ≤ d < 0.40   → rising from stack to center
            //  0.4 ≤ d < 0.65 → holding at center
            //  0.65 ≤ d < 1   → exiting upward
            //  d ≥ 1          → gone (completely off screen)
            // This guarantees card N is FULLY gone before card N+1 starts rising.

            const stackY      = index * -20;
            const stackScale  = 0.45 - index * 0.03; // Scale down slightly more so the huge cards still peek nicely
            const stackRotate = (index % 2 === 0 ? 1 : -1) * index * 1.8;
            const CENTER_Y    = -300; // Restored for 500px height

            let currentY, currentScale, currentRotate, opacity;

            if (d < 0) {
              // Resting in stack
              currentY      = stackY;
              currentScale  = stackScale;
              currentRotate = stackRotate;
              opacity       = 1;
            } else if (d < 0.4) {
              // Rising to center
              const ease    = 1 - Math.pow(1 - d / 0.4, 3);
              currentY      = stackY + (CENTER_Y - stackY) * ease;
              currentScale  = stackScale + (1 - stackScale) * ease;
              currentRotate = stackRotate * (1 - ease);
              opacity       = 1;
            } else if (d < 0.65) {
              // Holding at center
              currentY      = CENTER_Y;
              currentScale  = 1;
              currentRotate = 0;
              opacity       = 1;
            } else if (d < 1) {
              // Exiting upward
              const exitP   = (d - 0.65) / 0.35;
              currentY      = CENTER_Y - 460 * (exitP * exitP);
              currentScale  = 1;
              currentRotate = 0;
              opacity       = 1 - exitP;
            } else {
              // Gone
              currentY      = CENTER_Y - 460;
              currentScale  = 1;
              currentRotate = 0;
              opacity       = 0;
            }

            return (
              <div
                key={wallet.id}
                className="stacked-dashboard-card"
                style={{
                  backgroundColor: bgColor,
                  color: textColor,
                  zIndex,
                  transform: `translateY(${currentY}px) scale(${currentScale}) rotate(${currentRotate}deg)`,
                  opacity,
                  pointerEvents: (d >= 0 && d < 1) ? 'auto' : 'none',
                  /* Change to flex-start if there's content below the header */
                  justifyContent: (wallet.id === 'activities' || wallet.id === 'nutrition' || wallet.id === 'health-log' || wallet.id === 'bio-intel' || wallet.id === 'meditation') ? 'flex-start' : 'center',
                }}
              >
                <div className="sdc-header" style={{ justifyContent: 'center' }}>
                  <Icon size={56} color={textColor} />
                  <h3 className="sdc-title" style={{ textTransform: 'capitalize' }}>
                    {/* Only show the sub-frame title if this specific card is the one with the expanded sub-frame */}
                    {expandedSubFrame && (
                      (wallet.id === 'activities' && ['challenges', 'mapping', 'activities'].includes(expandedSubFrame)) ||
                      (wallet.id === 'nutrition' && ['macros', 'hydration', 'meal logs'].includes(expandedSubFrame)) ||
                      (wallet.id === 'health-log' && ['symptoms', 'medication', 'conditions', 'prescriptions'].includes(expandedSubFrame)) ||
                      (wallet.id === 'bio-intel' && ['sleep', 'reproductive', 'steps', 'vitals'].includes(expandedSubFrame)) ||
                      (wallet.id === 'meditation' && ['breathing', 'mood'].includes(expandedSubFrame))
                    ) ? expandedSubFrame : wallet.title}
                  </h3>
                </div>
                
                {wallet.id === 'activities' && (
                  <div className={`activities-frames-container ${expandedSubFrame ? 'has-expanded' : ''}`}>
                    <div className={`activity-item ${expandedSubFrame === 'challenges' ? 'is-expanded' : expandedSubFrame ? 'is-hidden' : ''}`}>
                      <div className="activity-frame-box mapping-frame">
                        <img 
                          src="/web-assets/pexels-cottonbro-5319398.jpg" 
                          alt="Challenges" 
                          className={expandedSubFrame === 'challenges' ? 'full-img' : 'crop-img'} 
                        />
                      </div>
                      <div className="activity-text-content">
                        <h4>Challenges</h4>
                          <p>
                            Push your limits with personalized health goals.
                            <span className="activity-more-link" onClick={() => setExpandedSubFrame('challenges')}> more</span>
                          </p>
                      </div>
                    </div>
                    <div className={`activity-item ${expandedSubFrame === 'mapping' ? 'is-expanded' : expandedSubFrame ? 'is-hidden' : ''}`}>
                      <div className="activity-frame-box mapping-frame">
                        <img 
                          src="/web-assets/mapping.png" 
                          alt="Mapping" 
                          className={expandedSubFrame === 'mapping' ? 'full-img' : 'crop-img'} 
                        />
                      </div>
                      <div className="activity-text-content">
                        <h4>Mapping</h4>
                          <p>
                            Explore your routes and visualize your progress.
                            <span className="activity-more-link" onClick={() => setExpandedSubFrame('mapping')}> more</span>
                          </p>
                      </div>
                    </div>
                    <div className={`activity-item ${expandedSubFrame === 'activities' ? 'is-expanded' : expandedSubFrame ? 'is-hidden' : ''}`}>
                      <div className="activity-frame-box"></div>
                      <div className="activity-text-content">
                        <h4>Activities</h4>
                          <p>
                            Track every movement and optimize performance.
                            <span className="activity-more-link" onClick={() => setExpandedSubFrame('activities')}> more</span>
                          </p>
                      </div>
                    </div>

                    {/* Right-Side Details Pane */}
                    <div className={`activity-details-pane ${(expandedSubFrame && ['challenges', 'mapping', 'activities'].includes(expandedSubFrame)) ? 'is-active' : ''}`}>
                      <div className="adp-header" style={{ justifyContent: 'flex-end' }}>
                            <button className="adp-back-btn" onClick={() => setExpandedSubFrame(null)}>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </button>
                          </div>
                          <div className="adp-content">
                            {currentOrLastSubFrame === 'challenges' && (
                              <p>
                                Engage in community-driven or personal health milestones. 
                                Whether it's a 30-day steps streak, a hydration goal, or a HIIT masterclass, 
                                SentNotes tracks your progress and rewards your consistency with personalized trophies and insights.
                              </p>
                            )}
                            {currentOrLastSubFrame === 'mapping' && (
                              <p>
                                Relive your outdoor adventures with high-precision GPS mapping. 
                                Analyze your pace, elevation, and heart rate zones across every trail, run, or cycle, 
                                giving you a spatial perspective on your fitness evolution and route efficiency.
                              </p>
                            )}
                            {currentOrLastSubFrame === 'activities' && (
                              <p>
                                From yoga to weightlifting, capture every session with granular detail. 
                                Monitor your sets, reps, and active calories while receiving real-time insights 
                                to help you optimize your training and prevent overexertion for long-term growth.
                              </p>
                            )}
                          </div>
                    </div>
                  </div>
                )}

                {wallet.id === 'nutrition' && (
                  <div className={`activities-frames-container ${expandedSubFrame ? 'has-expanded' : ''}`}>
                    <div className={`activity-item ${expandedSubFrame === 'macros' ? 'is-expanded' : expandedSubFrame ? 'is-hidden' : ''}`}>
                      <div className="activity-frame-box mapping-frame">
                        <img 
                          src="/web-assets/macros.png" 
                          alt="Macros" 
                          className={expandedSubFrame === 'macros' ? 'full-img' : 'crop-img'} 
                        />
                      </div>
                      <div className="activity-text-content">
                        <h4>Macros</h4>
                          <p>
                            Balance your intake for optimal health.
                            <span className="activity-more-link" onClick={() => setExpandedSubFrame('macros')}> more</span>
                          </p>
                      </div>
                    </div>
                    <div className={`activity-item ${expandedSubFrame === 'hydration' ? 'is-expanded' : expandedSubFrame ? 'is-hidden' : ''}`}>
                      <div className="activity-frame-box mapping-frame">
                        <img 
                          src="/web-assets/hydration.jpg" 
                          alt="Hydration" 
                          className={expandedSubFrame === 'hydration' ? 'full-img' : 'crop-img'} 
                        />
                      </div>
                      <div className="activity-text-content">
                        <h4>Hydration</h4>
                          <p>
                            Stay refreshed and energized throughout the day.
                            <span className="activity-more-link" onClick={() => setExpandedSubFrame('hydration')}> more</span>
                          </p>
                      </div>
                    </div>
                    <div className={`activity-item ${expandedSubFrame === 'meal logs' ? 'is-expanded' : expandedSubFrame ? 'is-hidden' : ''}`}>
                      <div className="activity-frame-box"></div>
                      <div className="activity-text-content">
                        <h4>Meal Logs</h4>
                          <p>
                            Log your meals and discover your body's needs.
                            <span className="activity-more-link" onClick={() => setExpandedSubFrame('meal logs')}> more</span>
                          </p>
                      </div>
                    </div>

                    {/* Right-Side Details Pane */}
                    <div className={`activity-details-pane ${(expandedSubFrame && ['macros', 'hydration', 'meal logs'].includes(expandedSubFrame)) ? 'is-active' : ''}`}>
                      <div className="adp-header" style={{ justifyContent: 'flex-end' }}>
                            <button className="adp-back-btn" onClick={() => setExpandedSubFrame(null)}>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </button>
                          </div>
                          <div className="adp-content">
                            {currentOrLastSubFrame === 'macros' && (
                              <p>
                                Take the guesswork out of your diet. Monitor your distribution of proteins, fats, 
                                and carbohydrates to ensure your body is fueled for your specific goals, 
                                whether it's muscle gain, weight loss, or sustained daily energy.
                              </p>
                            )}
                            {currentOrLastSubFrame === 'hydration' && (
                              <p>
                                Maintain peak physical and cognitive performance. SentNotes calculates 
                                your ideal daily water intake based on your activity level and environment, 
                                sending smart reminders to keep you perfectly hydrated throughout the day.
                              </p>
                            )}
                            {currentOrLastSubFrame === 'meal logs' && (
                              <p>
                                Build a mindful relationship with food. Quickly log your meals and snacks 
                                to identify how different ingredients affect your energy levels, digestion, 
                                and cognitive performance throughout the day and week.
                              </p>
                            )}
                          </div>
                    </div>
                  </div>
                )}

                {wallet.id === 'health-log' && (
                  <div className={`activities-frames-container ${expandedSubFrame ? 'has-expanded' : ''}`}>
                    <div className={`activity-item ${expandedSubFrame === 'symptoms' ? 'is-expanded' : expandedSubFrame ? 'is-hidden' : ''}`}>
                      <div className="activity-frame-box mapping-frame">
                        <img 
                          src="/web-assets/symptoms.jpg" 
                          alt="Symptoms" 
                          className={expandedSubFrame === 'symptoms' ? 'full-img' : 'crop-img'} 
                        />
                      </div>
                      <div className="activity-text-content">
                        <h4>Symptoms</h4>
                          <p>
                            Track your symptoms and identify trends.
                            <span className="activity-more-link" onClick={() => setExpandedSubFrame('symptoms')}> more</span>
                          </p>
                      </div>
                    </div>
                    <div className={`activity-item ${expandedSubFrame === 'medication' ? 'is-expanded' : expandedSubFrame ? 'is-hidden' : ''}`}>
                      <div className="activity-frame-box mapping-frame">
                        <img 
                          src="/web-assets/medication.jpg" 
                          alt="Medication" 
                          className={expandedSubFrame === 'medication' ? 'full-img' : 'crop-img'} 
                        />
                      </div>
                      <div className="activity-text-content">
                        <h4>Medication</h4>
                          <p>
                            Manage your prescriptions and never miss a dose.
                            <span className="activity-more-link" onClick={() => setExpandedSubFrame('medication')}> more</span>
                          </p>
                      </div>
                    </div>
                    <div className={`activity-item ${expandedSubFrame === 'conditions' ? 'is-expanded' : expandedSubFrame ? 'is-hidden' : ''}`}>
                      <div className="activity-frame-box mapping-frame">
                        <img 
                          src="/web-assets/condition.jpg" 
                          alt="Conditions" 
                          className={expandedSubFrame === 'conditions' ? 'full-img' : 'crop-img'} 
                        />
                      </div>
                      <div className="activity-text-content">
                        <h4>Conditions</h4>
                          <p>
                            Keep track of your health and stay informed.
                            <span className="activity-more-link" onClick={() => setExpandedSubFrame('conditions')}> more</span>
                          </p>
                      </div>
                    </div>
                    <div className={`activity-item ${expandedSubFrame === 'prescriptions' ? 'is-expanded' : expandedSubFrame ? 'is-hidden' : ''}`}>
                      <div className="activity-frame-box mapping-frame">
                        <img 
                          src="/web-assets/prescription.jpg" 
                          alt="Prescriptions" 
                          className={expandedSubFrame === 'prescriptions' ? 'full-img' : 'crop-img'} 
                        />
                      </div>
                      <div className="activity-text-content">
                        <h4>Prescriptions</h4>
                          <p>
                            Manage your health and stay organized.
                            <span className="activity-more-link" onClick={() => setExpandedSubFrame('prescriptions')}> more</span>
                          </p>
                      </div>
                    </div>

                    {/* Right-Side Details Pane */}
                    <div className={`activity-details-pane ${(expandedSubFrame && ['symptoms', 'medication', 'conditions', 'prescriptions'].includes(expandedSubFrame)) ? 'is-active' : ''}`}>
                      <div className="adp-header" style={{ justifyContent: 'flex-end' }}>
                            <button className="adp-back-btn" onClick={() => setExpandedSubFrame(null)}>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </button>
                          </div>
                          <div className="adp-content">
                            {currentOrLastSubFrame === 'symptoms' && (
                              <p>
                                Monitor recurring physical signals to gain a better understanding of your body's messages. 
                                By logging symptoms over time, you can provide your healthcare providers with accurate, 
                                data-driven reports for more effective diagnosis and treatment plans.
                              </p>
                            )}
                            {currentOrLastSubFrame === 'medication' && (
                              <p>
                                Stay on top of your regimen with intelligent schedules. Receive timely notifications 
                                for every dose and track your adherence, ensuring your treatment plan is followed 
                                exactly as prescribed by your medical team.
                              </p>
                            )}
                            {currentOrLastSubFrame === 'conditions' && (
                              <p>
                                Maintain a comprehensive history of your health status. Document flare-ups, 
                                treatments, and specialist notes in one secure, accessible space, allowing for 
                                total oversight of chronic or acute health journeys.
                              </p>
                            )}
                            {currentOrLastSubFrame === 'prescriptions' && (
                              <p>
                                Keep your entire prescription history at your fingertips. Store dosages, 
                                refill dates, and pharmacy details so you're always prepared and never 
                                run out of essential medications or health supplies.
                              </p>
                            )}
                          </div>
                    </div>
                  </div>
                )}

                {wallet.id === 'bio-intel' && (
                  <div className={`activities-frames-container ${expandedSubFrame ? 'has-expanded' : ''}`}>
                    <div className={`activity-item ${expandedSubFrame === 'sleep' ? 'is-expanded' : expandedSubFrame ? 'is-hidden' : ''}`}>
                      <div className="activity-frame-box mapping-frame">
                        <img 
                          src="/web-assets/sleep.jpg" 
                          alt="Sleep" 
                          className={expandedSubFrame === 'sleep' ? 'full-img' : 'crop-img'} 
                        />
                      </div>
                      <div className="activity-text-content">
                        <h4>Sleep</h4>
                          <p>
                            Understand your sleep patterns and wake up refreshed.
                            <span className="activity-more-link" onClick={() => setExpandedSubFrame('sleep')}> more</span>
                          </p>
                      </div>
                    </div>
                    <div className={`activity-item ${expandedSubFrame === 'reproductive' ? 'is-expanded' : expandedSubFrame ? 'is-hidden' : ''}`}>
                      <div className="activity-frame-box mapping-frame">
                        <img 
                          src="/web-assets/reproductive.jpg" 
                          alt="Reproductive" 
                          className={expandedSubFrame === 'reproductive' ? 'full-img' : 'crop-img'} 
                        />
                      </div>
                      <div className="activity-text-content">
                        <h4>Reproductive</h4>
                          <p>
                            Track your cycle and understand your body.
                            <span className="activity-more-link" onClick={() => setExpandedSubFrame('reproductive')}> more</span>
                          </p>
                      </div>
                    </div>
                    <div className={`activity-item ${expandedSubFrame === 'steps' ? 'is-expanded' : expandedSubFrame ? 'is-hidden' : ''}`}>
                      <div className="activity-frame-box mapping-frame">
                        <img 
                          src="/web-assets/steps.jpg" 
                          alt="Steps" 
                          className={expandedSubFrame === 'steps' ? 'full-img' : 'crop-img'} 
                        />
                      </div>
                      <div className="activity-text-content">
                        <h4>Steps</h4>
                          <p>
                            Track your daily steps and stay active.
                            <span className="activity-more-link" onClick={() => setExpandedSubFrame('steps')}> more</span>
                          </p>
                      </div>
                    </div>
                    <div className={`activity-item ${expandedSubFrame === 'vitals' ? 'is-expanded' : expandedSubFrame ? 'is-hidden' : ''}`}>
                      <div className="activity-frame-box mapping-frame">
                        <img 
                          src="/web-assets/vitals.jpg" 
                          alt="Vitals" 
                          className={expandedSubFrame === 'vitals' ? 'full-img' : 'crop-img'} 
                        />
                      </div>
                      <div className="activity-text-content">
                        <h4>Vitals</h4>
                          <p>
                            Monitor your vitals and stay healthy.
                            <span className="activity-more-link" onClick={() => setExpandedSubFrame('vitals')}> more</span>
                          </p>
                      </div>
                    </div>
                    {/* Right-Side Details Pane for Bio Intel */}
                    <div className={`activity-details-pane ${(expandedSubFrame && ['sleep', 'reproductive', 'steps', 'vitals'].includes(expandedSubFrame)) ? 'is-active' : ''}`}>
                      <div className="adp-header" style={{ justifyContent: 'flex-end' }}>
                            <button className="adp-back-btn" onClick={() => setExpandedSubFrame(null)}>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </button>
                          </div>
                          <div className="adp-content">
                            {currentOrLastSubFrame === 'sleep' && (
                              <p>
                                Unlock the secrets of your rest. Analyze your deep, light, and REM sleep stages, 
                                and track your sleep consistency to discover the habits that lead to truly 
                                restorative nights and energized mornings for optimal recovery.
                              </p>
                            )}
                            {currentOrLastSubFrame === 'reproductive' && (
                              <p>
                                Gain deeper insights into your hormonal health. Track your cycle, symptoms, 
                                and fertility windows to better understand your body's natural rhythms 
                                and optimize your wellness according to your unique personal biology.
                              </p>
                            )}
                            {currentOrLastSubFrame === 'steps' && (
                              <p>
                                Every movement counts toward your goals. Monitor your daily step count, 
                                distance traveled, and floors climbed to ensure you're meeting your baseline 
                                activity targets and staying consistently mobile throughout the day.
                              </p>
                            )}
                            {currentOrLastSubFrame === 'vitals' && (
                              <p>
                                Keep a finger on the pulse of your health. Securely track your heart rate, 
                                blood pressure, and oxygen saturation, allowing you to identify trends 
                                and take proactive, preventative steps for long-term cardiovascular health.
                              </p>
                            )}
                          </div>
                    </div>
                  </div>
                )}

                {wallet.id === 'meditation' && (
                  <div className={`activities-frames-container ${expandedSubFrame ? 'has-expanded' : ''}`}>
                    <div className={`activity-item ${expandedSubFrame === 'breathing' ? 'is-expanded' : expandedSubFrame ? 'is-hidden' : ''}`}>
                      <div className="activity-frame-box mapping-frame">
                        <img 
                          src="/web-assets/breathing.jpg" 
                          alt="Breathing" 
                          className={expandedSubFrame === 'breathing' ? 'full-img' : 'crop-img'} 
                        />
                      </div>
                      <div className="activity-text-content">
                        <h4>Breathing</h4>
                          <p>
                            Quick physiological resets with guided breathwork.
                            <span className="activity-more-link" onClick={() => setExpandedSubFrame('breathing')}> more</span>
                          </p>
                      </div>
                    </div>
                    <div className={`activity-item ${expandedSubFrame === 'mood' ? 'is-expanded' : expandedSubFrame ? 'is-hidden' : ''}`}>
                      <div className="activity-frame-box mapping-frame">
                        <img 
                          src="/web-assets/mood.jpg" 
                          alt="Mood Tracker" 
                          className={expandedSubFrame === 'mood' ? 'full-img' : 'crop-img'} 
                        />
                      </div>
                      <div className="activity-text-content">
                        <h4>Mood Tracker</h4>
                          <p>
                            Log your emotional state and track mental trends.
                            <span className="activity-more-link" onClick={() => setExpandedSubFrame('mood')}> more</span>
                          </p>
                      </div>
                    </div>

                    {/* Right-Side Details Pane for Meditation */}
                    <div className={`activity-details-pane ${(expandedSubFrame && ['breathing', 'mood'].includes(expandedSubFrame)) ? 'is-active' : ''}`}>
                      <div className="adp-header" style={{ justifyContent: 'flex-end' }}>
                            <button className="adp-back-btn" onClick={() => setExpandedSubFrame(null)}>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </button>
                          </div>
                          <div className="adp-content">
                            {currentOrLastSubFrame === 'breathing' && (
                              <p>
                                Master your physiology with science-backed breathing techniques. 
                                Whether you need to calm your nervous system with Box Breathing, 
                                find focus with the 4-7-8 method, or energize your body with Power Breathing, 
                                our interactive guides help you synchronize your breath with real-time biofeedback 
                                and visual cues for immediate stress relief.
                              </p>
                            )}
                            {currentOrLastSubFrame === 'mood' && (
                              <p>
                                Understand the patterns behind your emotional wellbeing. 
                                By logging your mood, energy levels, and daily stressors, 
                                SentNotes uses Bio-Intelligence to identify correlations between your 
                                lifestyle and your mental health. Discover how your physical activities, 
                                nutrition, and sleep quality directly impact your overall mood and happiness trends.
                              </p>
                            )}
                          </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* Spacer so the rest of the page sits below the fixed overlay. */}
      <div style={{ height: `calc(${TOTAL_VIRTUAL}px + 100vh)` }} aria-hidden="true" />
    </>
  );
};

export default WalletSectionV1;
