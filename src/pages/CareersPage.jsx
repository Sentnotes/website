import React, { useEffect } from 'react';
import './CareersPage.css';
import { ArrowRight, MapPin } from 'lucide-react';

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="careers-hero-content">
          <h1 className="careers-hero-title">Help us build the future of connected health.</h1>
          <p className="careers-hero-subtitle">
            We are looking for passionate individuals to join our team and help us build a world where health stories are unified, secure, and fully understood.
          </p>
        </div>
      </section>

      {/* Listings Section */}
      <section className="careers-listings-section">
        <div className="careers-listings-container">
          
          {/* Category: Health & Medical */}
          <div className="careers-category">
            <h2 className="careers-category-header">Health & Medical</h2>
            <div className="careers-grid">
              
              <a href="mailto:support@sentnotes.com?subject=Application:%20Clinical%20Lead" className="job-card">
                <h3 className="job-title">Clinical Lead / Medical Director</h3>
                <p className="job-description">
                  Help shape our health algorithms and ensure the clinical accuracy of our continuous symptom and routine tracking models.
                </p>
                <div className="job-footer">
                  <div className="job-location"><MapPin size={16} /> Remote</div>
                  <div className="job-apply-btn">Apply <ArrowRight size={16} /></div>
                </div>
              </a>

              <a href="mailto:support@sentnotes.com?subject=Application:%20General%20Practitioner%20Consultant" className="job-card">
                <h3 className="job-title">General Practitioner Consultant</h3>
                <p className="job-description">
                  Work alongside our product team to design features that seamlessly bridge the gap between a patient's daily life and clinical visits.
                </p>
                <div className="job-footer">
                  <div className="job-location"><MapPin size={16} /> Hybrid</div>
                  <div className="job-apply-btn">Apply <ArrowRight size={16} /></div>
                </div>
              </a>

            </div>
          </div>

          {/* Category: Information Technology */}
          <div className="careers-category">
            <h2 className="careers-category-header">Information Technology</h2>
            <div className="careers-grid">
              
              <a href="mailto:support@sentnotes.com?subject=Application:%20Senior%20Systems%20Engineer" className="job-card">
                <h3 className="job-title">Senior Systems Engineer</h3>
                <p className="job-description">
                  Build scalable, secure backend infrastructure to handle encrypted, continuous health data streams across devices seamlessly.
                </p>
                <div className="job-footer">
                  <div className="job-location"><MapPin size={16} /> Remote</div>
                  <div className="job-apply-btn">Apply <ArrowRight size={16} /></div>
                </div>
              </a>

            </div>
          </div>

          {/* Category: Marketing */}
          <div className="careers-category">
            <h2 className="careers-category-header">Marketing</h2>
            <div className="careers-grid">
              
              <a href="mailto:support@sentnotes.com?subject=Application:%20Growth%20Marketing%20Expert" className="job-card">
                <h3 className="job-title">Growth Marketing Expert</h3>
                <p className="job-description">
                  Drive user acquisition and tell the SentNotes story to the world, helping people everywhere understand the value of connected health.
                </p>
                <div className="job-footer">
                  <div className="job-location"><MapPin size={16} /> Remote</div>
                  <div className="job-apply-btn">Apply <ArrowRight size={16} /></div>
                </div>
              </a>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CareersPage;
