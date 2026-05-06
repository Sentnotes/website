import React, { useState, useEffect, useRef } from 'react';
import BentoSignalsSection from '../components/BentoSignalsSection';
import FeaturesBentoGrid from '../components/FeaturesBentoGrid';

const CHAT_SEQUENCE = [
  { sender: 'alison', text: ["I noticed something that might be worth a closer look.", "Over the past two weeks, your fatigue levels have been gradually increasing. This change started shortly after your medication adjustment in early May."], delay: 2000 },
  { sender: 'user', text: ["Oh, I didn’t realize that. I just thought I’d been more busy lately."], delay: 2500 },
  { sender: 'alison', text: ["That makes sense—it can be hard to spot these patterns day to day.", "Looking at your history, you’ve logged similar fatigue symptoms three times since the change, most often in the afternoon."], delay: 2500 },
  { sender: 'user', text: ["Could it be related to my sleep?"], delay: 2000 },
  { sender: 'alison', text: ["Your total sleep time has stayed fairly consistent, but your sleep quality has declined slightly over the same period.", "It’s possible that both your medication and changes in rest quality are contributing."], delay: 3000 },
  { sender: 'user', text: ["That’s interesting. I wouldn’t have connected those."], delay: 2000 },
  { sender: 'alison', text: ["That’s exactly what I’m here for—helping connect changes over time that aren’t always obvious.", "If you’d like, I can summarize these patterns so you can review them or share them with your doctor."], delay: 3500 },
  { sender: 'user', text: ["Yeah, that would be helpful."], delay: 1500 },
  { sender: 'alison', text: ["Great—I’ll prepare a short summary highlighting when the fatigue started, how it’s progressed, and the related factors we’ve identified.", "You’ll have it ready whenever you need it."], delay: 3000 }
];

const FeaturesPage = () => {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(true); // Start typing immediately
  const chatScrollRef = useRef(null);

  // Handle chat sequence timing
  useEffect(() => {
    if (visibleMessages < CHAT_SEQUENCE.length) {
      const nextMessage = CHAT_SEQUENCE[visibleMessages];
      setIsTyping(true);
      
      const timer = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(prev => prev + 1);
      }, nextMessage.delay);
      
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [visibleMessages]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);
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

        {/* iPhone 17 Mockup Hero */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '80px' }}>
          <div className="iphone-frame-wrapper" style={{ transform: 'scale(1)', transformOrigin: 'top center', boxShadow: '0 30px 60px rgba(0,0,0,0.15), inset 0 0 4px rgba(255, 255, 255, 0.8)' }}>
            {/* Hardware Buttons */}
            <div className="iphone-button-silent"></div>
            <div className="iphone-button-vol-up"></div>
            <div className="iphone-button-vol-down"></div>
            <div className="iphone-button-power"></div>

            <div className="iphone-inner-bezel">
              <div className="iphone-screen" style={{ backgroundColor: '#000', position: 'relative' }}>
                
                {/* Dynamic Island */}
                <div className="dynamic-island" style={{ zIndex: 100 }}>
                  <div className="island-lens-1"></div>
                  <div className="island-lens-2"></div>
                </div>

                {/* Background Home Screen */}
                <img 
                  src="/web-assets/homescreen.png" 
                  alt="SentNotes App Interface" 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} 
                />

                {/* Simulated Chat Modal Overlay */}
                <div className="iphone-chat-interface modal-overlay" style={{ zIndex: 50 }}>
                  <div className="modal-drag-handle"></div>
                  
                  <div className="chat-scroll-area" ref={chatScrollRef} style={{ scrollBehavior: 'smooth' }}>
                    {CHAT_SEQUENCE.slice(0, visibleMessages).map((msg, idx) => (
                      <div key={idx} className={`chat-message-row ${msg.sender}-row`}>
                        {msg.sender === 'alison' && (
                          <img src="/web-assets/AlisonMascot.png" alt="Alison" className="chat-row-avatar" />
                        )}
                        <div className={`chat-message ${msg.sender}`}>
                          {msg.text.map((p, pIdx) => <p key={pIdx}>{p}</p>)}
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && visibleMessages < CHAT_SEQUENCE.length && CHAT_SEQUENCE[visibleMessages].sender === 'alison' && (
                      <div className="chat-message-row alison-row">
                        <img src="/web-assets/AlisonMascot.png" alt="Alison" className="chat-row-avatar" />
                        <div className="chat-message alison typing-indicator">
                          <span></span><span></span><span></span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="chat-input-area">
                    <div className="chat-input-bar">
                      <span className="placeholder">Message Alison...</span>
                      <div className="send-button">↑</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Health Intelligence Bento Grid Section */}
      <BentoSignalsSection />

      {/* Features Bento Grid Section */}
      <section id="features" style={{ padding: 0 }}>
        <FeaturesBentoGrid />
      </section>
      
    </div>
  );
};

export default FeaturesPage;
