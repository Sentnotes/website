import React, { useRef, useState, useEffect, useMemo } from 'react';
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
export const EditableWalletCard = ({ title, cards, pocketColor = '#FCF9E2' }) => {
  const colors = ['#E20303', '#18024C', '#01B84E'];
  return (
    <svg width="100%" height="100%" viewBox="0 0 322 326" fill="none" style={{ overflow: 'visible', filter: 'drop-shadow(0 15px 30px rgba(0, 120, 255, 0.12))' }}>
      {/* Wallet Back */}
      <path d="M281.7 49.2H39.9C31.3 49.2 24.2 56.2 24.2 64.9V211.7C24.2 220.4 31.3 227.4 39.9 227.4H281.7C290.3 227.4 297.3 220.4 297.3 211.7V64.9C297.3 56.2 290.3 49.2 281.7 49.2Z" fill={pocketColor} stroke="rgba(0,0,0,0.08)" strokeWidth="2.5" />
      
      {/* Dynamic Cards Stack */}
      {cards?.map((cardItem, idx) => {
        const yOffset = 10.8 + idx * (cards.length > 3 ? 22 : 30);
        // Add subtle rotation to alternating cards for realism
        const rotation = idx % 2 === 1 ? `rotate(-2 24 ${yOffset})` : '';
        const defaultColor = ['#E20303', '#18024C', '#01B84E', '#FFB800'][idx % 4];
        const cardColor = cardItem.color || defaultColor;
        
        // Use dark text if the card color is very bright (like Snack yellow)
        const textColor = cardColor === '#FFE66D' ? '#3C3C43' : 'white';
        
        return (
          <g key={cardItem.id || idx} transform={rotation}>
            <rect x="27.7" y={yOffset} width="266.3" height="144.9" rx="15.7" fill={cardColor} stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
            <text x="45" y={yOffset + 27} fill={textColor} fontFamily="Inter" fontSize="16" fontWeight="800">{cardItem.title}</text>
            <text x="275" y={yOffset + 27} fill={textColor} fontFamily="Inter" fontSize="16" fontWeight="800" textAnchor="end">{cardItem.value} {cardItem.unit}</text>
          </g>
        );
      })}

      {/* Wallet Front Lip */}
      <path d="M299.8 214.2V114.8C299.8 106.2 292.8 99.1 284.1 99.1H223.3C223.3 99.1 211.6 98.8 200.9 104.6C174.9 118.7 146.7 118.7 120.6 104.6C110 98.8 98.2 99.1 98.2 99.1H37.5C28.8 99.1 21.8 106.2 21.8 114.8V214.2C21.8 222.8 28.8 229.8 37.5 229.8H284.1C292.8 229.8 299.8 222.8 299.8 214.2Z" fill={pocketColor} />
      <path d="M299.8 214.2V114.8C299.8 106.2 292.8 99.1 284.1 99.1H223.3C223.3 99.1 211.6 98.8 200.9 104.6C174.9 118.7 146.7 118.7 120.6 104.6C110 98.8 98.2 99.1 98.2 99.1H37.5C28.8 99.1 21.8 106.2 21.8 114.8V214.2C21.8 222.8 28.8 229.8 37.5 229.8H284.1C292.8 229.8 299.8 222.8 299.8 214.2Z" fill="#0B1B3D" fillOpacity={0.03} />
      
      <path d="M293.6 217V112C293.6 107.6 290.1 104.1 285.8 104.1H220.6C220.6 104.1 209.4 106.2 199.2 111.6C174.3 124.6 147.3 124.6 122.4 111.6C112.2 106.2 101 104.1 101 104.1H35.8C31.5 104.1 28 107.6 28 112V217C28 221.4 31.5 224.9 35.8 224.9H285.8C290.1 224.9 293.6 221.4 293.6 217Z" fill={pocketColor} />
      <path d="M293.6 217V112C293.6 107.6 290.1 104.1 285.8 104.1H220.6C220.6 104.1 209.4 106.2 199.2 111.6C174.3 124.6 147.3 124.6 122.4 111.6C112.2 106.2 101 104.1 101 104.1H35.8C31.5 104.1 28 107.6 28 112V217C28 221.4 31.5 224.9 35.8 224.9H285.8C290.1 224.9 293.6 221.4 293.6 217Z" fill="#0B1B3D" fillOpacity={0.08} />

      {/* Wallet Text Details */}
      <text x="161" y="145" fill="rgba(60,60,67,0.6)" fontFamily="Inter" fontSize="10" fontWeight="600" textAnchor="middle">Hide Metrics ∨</text>
      <text x="161" y="175" fill="#3C3C43" fontFamily="Inter" fontSize="18" fontWeight="800" textAnchor="middle">{title}</text>
      <text x="161" y="195" fill="rgba(60,60,67,0.6)" fontFamily="Inter" fontSize="10" fontWeight="600" textAnchor="middle">SentNotes Intel</text>
    </svg>
  );
};

export const AnimatedClouds = () => (
  <div style={{
    position: 'absolute', top: 0, left: 0,
    width: '100%', height: '100%',
    overflow: 'hidden', pointerEvents: 'none', zIndex: 1,
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
const PX_PER_CARD = 350;

// V3 Constants
const ARC_RADIUS = 600; // Adjust for web viewport

const WalletSectionV3 = ({ wallets }) => {
  const [progress, setProgress]   = useState(0);   
  const [released, setReleased]   = useState(false); 
  const [expandedSubFrame, setExpandedSubFrame] = useState(null); 
  const lastExpandedRef = useRef(null);
  
  if (expandedSubFrame) {
    lastExpandedRef.current = expandedSubFrame;
  }
  const currentOrLastSubFrame = expandedSubFrame || lastExpandedRef.current;
  
  const TOTAL_VIRTUAL = wallets.length * PX_PER_CARD;

  // Arc Setup
  const angleOffsets = [-60, -30, 0, 30, 60];
  const arcCards = useMemo(() => {
    return wallets.map((w, i) => ({
      ...w,
      angleOffset: angleOffsets[i] || 0,
    }));
  }, [wallets]);

  const [activeIndex, setActiveIndex] = useState(2);
  const [rotation, setRotation] = useState(-angleOffsets[2]);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startRotation = useRef(0);
  const sectionRef = useRef(null);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX || (e.touches && e.touches[0].clientX);
    startRotation.current = rotation;
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const dx = clientX - startX.current;
    const newRotation = startRotation.current + dx * 0.15;
    setRotation(newRotation);
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    
    // Snap to closest
    let closestIdx = 0;
    let minDiff = Infinity;
    const predictedOffset = -rotation;
    arcCards.forEach((c, i) => {
      const diff = Math.abs(c.angleOffset - predictedOffset);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = i;
      }
    });
    setActiveIndex(closestIdx);
    setRotation(-arcCards[closestIdx].angleOffset);
  };

  useEffect(() => {
    const onMouseUp = () => handlePointerUp();
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchend', onMouseUp);
    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [rotation, arcCards]);

  /* ── Scroll capture ── */
  useEffect(() => {
    const onScroll = () => {
      const offsetTop = sectionRef.current ? sectionRef.current.offsetTop : 0;
      const relativeScroll = window.scrollY - offsetTop;
      const p = Math.max(0, Math.min(relativeScroll / TOTAL_VIRTUAL, 1));
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

  useEffect(() => {
    setExpandedSubFrame(null);
  }, [Math.floor(progress * wallets.length)]);

  const firstCardD   = progress * wallets.length;           
  const heroSlide    = Math.min(1, firstCardD) * -30;       
  const heroOpacity  = Math.max(0, 1 - firstCardD * 2.5);  

  const sectionOpacity = released ? 0 : 1;

  const renderDialTicks = () => {
    const ticks = [];
    const startAngle = -60;
    const endAngle = 60;
    for (let i = 0; i <= 60; i++) {
      const angle = startAngle + (i * (endAngle - startAngle) / 60);
      const rad = (angle - 90) * (Math.PI / 180);
      const isMajor = i % 5 === 0;
      const tickLength = isMajor ? 16 : 8;
      const x1 = ARC_RADIUS + ARC_RADIUS * Math.cos(rad);
      const y1 = ARC_RADIUS + ARC_RADIUS * Math.sin(rad);
      const x2 = ARC_RADIUS + (ARC_RADIUS - tickLength) * Math.cos(rad);
      const y2 = ARC_RADIUS + (ARC_RADIUS - tickLength) * Math.sin(rad);
      ticks.push(<line key={`t-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(0,0,0,0.3)" strokeWidth={isMajor ? 2 : 1.5} strokeLinecap="round" />);
    }
    return ticks;
  };

  return (
    <div ref={sectionRef}>
      <div
        className="wallet-fullscreen"
        style={{
          position: 'sticky',
          top: 0,
          pointerEvents: 'auto',
          paddingTop: '80px', 
        }}
      >


        {/* Hero text - Concept 3: Arc Dial */}
        <div
          className="hero-content v3-arc-hero"
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
            justifyContent: 'flex-end',
            overflow: 'hidden',
          }}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
        >
          
          {/* Features Header */}
          <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <h2 style={{ color: '#111', fontSize: '3rem', margin: 0, fontWeight: 700, letterSpacing: '-1px' }}>Features</h2>
            <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '1.2rem', marginTop: '10px' }}>Explore the interactive wallet.</p>
          </div>

          <div style={{
            position: 'relative',
            width: '100%',
            height: '60%', // Arc is at the bottom half
            display: 'flex',
            justifyContent: 'center',
            cursor: isDragging.current ? 'grabbing' : 'grab'
          }}>
            {/* Welcome text inside the arc centered */}
            <div style={{ position: 'absolute', top: '240px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', pointerEvents: 'none', zIndex: 1, width: '100%' }}>
              <h1 style={{ color: '#111', fontSize: '3rem', margin: 0, fontWeight: 700 }}>Welcome back.</h1>
              <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '1.2rem', marginTop: '0.5rem', marginBottom: 0 }}>What would you like to explore?</p>
            </div>

            {/* Dial Ticks SVG */}
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }}>
              <svg width={ARC_RADIUS * 2} height={ARC_RADIUS + 40}>
                {renderDialTicks()}
                <line x1={ARC_RADIUS} y1={ARC_RADIUS - 20} x2={ARC_RADIUS} y2={ARC_RADIUS + 20} stroke="#111" strokeWidth="3" />
              </svg>
            </div>

            {/* Rotator Circle */}
            <div
              style={{
                position: 'absolute',
                width: ARC_RADIUS * 2,
                height: ARC_RADIUS * 2,
                borderRadius: '50%',
                top: 0,
                left: `calc(50% - ${ARC_RADIUS}px)`,
                transform: `rotate(${rotation}deg)`,
                transition: isDragging.current ? 'none' : 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                transformOrigin: 'center center'
              }}
            >
              {arcCards.map((card, idx) => {
                const angleDeg = card.angleOffset;
                const angleRad = (angleDeg - 90) * (Math.PI / 180);
                const WRAPPER_WIDTH = 220;
                const WRAPPER_HEIGHT = 240;
                const cardRadius = ARC_RADIUS - 40;
                const cardX = ARC_RADIUS + cardRadius * Math.cos(angleRad) - (WRAPPER_WIDTH / 2);
                const cardY = ARC_RADIUS + cardRadius * Math.sin(angleRad) - (WRAPPER_HEIGHT / 2);
                
                const bgColors = ['#E20AFF', '#FFE233', '#6B21A8', '#0AFFFF', '#99FF0A'];
                const cardBgColor = bgColors[idx % bgColors.length];

                return (
                  <div
                    key={card.id}
                    style={{
                      position: 'absolute',
                      left: cardX,
                      top: cardY,
                      width: WRAPPER_WIDTH,
                      height: WRAPPER_HEIGHT,
                      transform: `rotate(${angleDeg}deg)`,
                      transformOrigin: 'center center'
                    }}
                  >
                    <div style={{ width: '100%', height: '100%', transform: 'scale(0.85) translateY(10px)', pointerEvents: 'none' }}>
                      <EditableWalletCard 
                        title={card.title} 
                        cards={card.cards} 
                        pocketColor={card.id === 'nutrition' ? '#BDE0FE' : '#FCF9E2'} 
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Card stack (Scroll Content remains the exact same as V1/V2) */}
        <div className="cards-stack-container">
          {wallets.map((wallet, index) => {
            const brandColor = COLORS[index % COLORS.length];
            const d = progress * wallets.length - index;
            const focusMix = d < 0 ? 0 : Math.min(1, d / 0.3);
            const bgColor = `color-mix(in srgb, ${brandColor}, #FFFFFF ${focusMix * 100}%)`;
            const textColor = '#1C1C1E'; 
            const Icon      = wallet.cards[0]?.icon || Activity;
            const zIndex    = (d >= 0 && d < 1 || expandedSubFrame) ? 100 : (wallets.length - index);

            const stackY      = index * -20;
            const stackScale  = 0.45 - index * 0.03;
            const stackRotate = (index % 2 === 0 ? 1 : -1) * index * 1.8;
            const CENTER_Y    = -300; 

            let currentY, currentScale, currentRotate, opacity;

            if (d < 0) {
              currentY      = stackY;
              currentScale  = stackScale;
              currentRotate = stackRotate;
              opacity       = 1;
            } else if (d < 0.4) {
              const ease    = 1 - Math.pow(1 - d / 0.4, 3);
              currentY      = stackY + (CENTER_Y - stackY) * ease;
              currentScale  = stackScale + (1 - stackScale) * ease;
              currentRotate = stackRotate * (1 - ease);
              opacity       = 1;
            } else if (d < 0.65) {
              currentY      = CENTER_Y;
              currentScale  = 1;
              currentRotate = 0;
              opacity       = 1;
            } else if (d < 1) {
              const exitP   = (d - 0.65) / 0.35;
              currentY      = CENTER_Y - 460 * (exitP * exitP);
              currentScale  = 1;
              currentRotate = 0;
              opacity       = 1 - exitP;
            } else {
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
                  justifyContent: (wallet.id === 'activities' || wallet.id === 'nutrition' || wallet.id === 'health-log' || wallet.id === 'bio-intel' || wallet.id === 'meditation') ? 'flex-start' : 'center',
                }}
              >
                <div className="sdc-header" style={{ justifyContent: 'center' }}>
                  <Icon size={56} color={textColor} />
                  <h3 className="sdc-title" style={{ textTransform: 'capitalize' }}>
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
    </div>
  );
};

export default WalletSectionV3;
