import React, { useRef, useState, useEffect } from 'react';
import './ScrollStackWallet.css';

const BankCardChip = () => {
  return (
    <div className="bank-card-chip">
      <div className="chip-row">
        <div className="chip-cell border-right border-bottom" />
        <div className="chip-cell border-right border-bottom" />
        <div className="chip-cell border-bottom" />
      </div>
      <div className="chip-row">
        <div className="chip-cell border-right" />
        <div className="chip-cell border-right" />
        <div className="chip-cell" />
      </div>
    </div>
  );
};

const ScrollStackWallet = ({ walletId, title, description, cards }) => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrollableDistance = rect.height - windowHeight;
      let p = -rect.top / scrollableDistance;
      
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="wallet-scroll-container" 
      style={{ height: `${100 + (cards.length - 1) * 60}vh` }}
      id={walletId}
    >
      <div className="wallet-sticky-viewport">
        <div className="wallet-split-layout">
          
          <div className="wallet-text-content">
            <h2 className="wallet-section-title">{title}</h2>
            <p className="wallet-section-desc">{description}</p>
          </div>

          <div className="physical-wallet-container">
            <div className="wallet-pocket-line"></div>
            <div className="wallet-cards-stack">
              {cards.map((card, index) => {
              const progressPerCard = 1 / (cards.length - 1 || 1);
              const cardStartProgress = index * progressPerCard;
              
              let cardProgress = (progress - cardStartProgress) / progressPerCard;
              cardProgress = Math.max(-1, Math.min(1, cardProgress));

              const stackedY = index * 45;
              const hiddenY = 800; 
              
              let currentY;
              if (cardProgress < 0) {
                currentY = stackedY + (Math.abs(cardProgress) * hiddenY);
              } else {
                currentY = stackedY;
              }

              const activeIndexFloat = progress * (cards.length - 1);
              const cardsOnTopOfMe = Math.max(0, activeIndexFloat - index);
              
              const scale = Math.max(0.9, 1 - (cardsOnTopOfMe * 0.03));
              const zIndex = index;
              
              const Icon = card.icon;

              return (
                <div 
                  key={card.id}
                  className="stacked-wallet-card"
                  style={{
                    transform: `translateY(${currentY}px) scale(${scale})`,
                    zIndex: zIndex,
                    background: card.color || 'rgba(255, 255, 255, 0.45)'
                  }}
                >
                  <div className="stacked-card-peek">
                    {Icon && <Icon size={18} color="#1C1C1E" />}
                    <span className="stacked-card-label">{card.title}</span>
                  </div>
                  <div className="stacked-card-body">
                    <div className="bank-card-top-row">
                      <div className="bank-card-number">**** **** **** 2026</div>
                      <BankCardChip />
                    </div>
                    
                    <div className="bank-card-bottom-row">
                      <div className="bank-card-stats">
                        <span className="stacked-section-label">DATA / VALUE</span>
                        <div className="stacked-card-main-stat">
                          <span className="stacked-value">{card.value}</span>
                          <span className="stacked-unit">{card.unit}</span>
                        </div>
                      </div>
                      <div className="bank-card-member">
                        <span className="stacked-section-label">MEMBER SINCE</span>
                        <span className="member-date">Today</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollStackWallet;
