import React from 'react';
import './CategoryShowcase.css';

const CategoryShowcase = () => {
  return (
    <section className="category-showcase-section" id="features">
      <div className="category-showcase-container">
        
        {/* MAIN HEADER */}
        <div className="category-main-header">
          <h2>A complete picture of your health.</h2>
          <p>Every signal connected. Everything private.</p>
        </div>

        {/* NUTRITION */}
        <div className="category-block">
          <div className="category-header-wrapper">
            <h2 className="category-title">Nutrition</h2>
            <p className="category-paragraph">
              The relationship people have with food is rarely isolated to meals alone. Energy changes throughout the day. Sleep shifts. Mood changes subtly over time. Some patterns become habits without ever being noticed clearly.
            </p>
            <p className="category-paragraph">
              SentNotes keeps nutrition connected to the rest of your health story, making it easier to understand how daily habits shape how you feel over time.
            </p>
          </div>
          <div className="category-images-grid">
            <div className="category-card-wrapper">
              <div className="category-image-placeholder">
                <img src="/web-assets/macros.png" alt="Meals" />
              </div>
              <div className="category-card-text">
                <h4 className="category-card-title">Meals</h4>
                <p className="category-card-description">Meals are more than what’s eaten during the day. Eating habits can influence energy, mood, sleep, focus, symptoms, and how the body feels over time. Keeping meals connected to the rest of your health story helps reveal patterns that are often overlooked in daily life.</p>
              </div>
            </div>
            <div className="category-card-wrapper">
              <div className="category-image-placeholder">
                <img src="/web-assets/hydration.jpg" alt="Hydration" />
              </div>
              <div className="category-card-text">
                <h4 className="category-card-title">Hydration</h4>
                <p className="category-card-description">Hydration affects more than thirst alone. Water intake can influence energy levels, focus, recovery, headaches, sleep, and how the body responds throughout the day. Understanding hydration over time adds important context to the bigger picture of your health.</p>
              </div>
            </div>
          </div>
        </div>

        {/* BODY SIGNALS */}
        <div className="category-block">
          <div className="category-header-wrapper">
            <h2 className="category-title">Body Signals</h2>
            <p className="category-paragraph">
              The body is constantly responding through sleep, recovery, activity, stress, cycles, and the small changes that often go unnoticed day to day.
            </p>
            <p className="category-paragraph">
              These signals become more meaningful when understood over time and in context with the rest of your health. SentNotes helps bring those patterns together into a clearer understanding of how your body changes and responds over time.
            </p>
          </div>
          <div className="category-images-grid">
            <div className="category-card-wrapper">
              <div className="category-image-placeholder">
                <img src="/web-assets/sleep.jpg" alt="Sleep" />
              </div>
              <div className="category-card-text">
                <h4 className="category-card-title">Sleep</h4>
                <p className="category-card-description">Sleep influences nearly every part of health — from energy and recovery to mood, focus, and how the body feels throughout the day. Understanding sleep over time helps bring context to many of the changes people experience daily.</p>
              </div>
            </div>
            <div className="category-card-wrapper">
              <div className="category-image-placeholder">
                <img src="/web-assets/reproductive.jpg" alt="Reproductive Health" />
              </div>
              <div className="category-card-text">
                <h4 className="category-card-title">Reproductive Health</h4>
                <p className="category-card-description">Reproductive health changes through cycles, symptoms, hormones, energy, mood, and experiences that often unfold gradually over time. Keeping these changes connected helps create a clearer understanding of how your body responds across different stages of life.</p>
              </div>
            </div>
            <div className="category-card-wrapper">
              <div className="category-image-placeholder">
                <img src="/web-assets/steps.jpg" alt="Steps & Activity" />
              </div>
              <div className="category-card-text">
                <h4 className="category-card-title">Steps & Activity</h4>
                <p className="category-card-description">Daily movement is more than numbers or goals reached by the end of the day. Activity levels can reflect energy, stress, recovery, routines, and overall wellbeing over time.</p>
              </div>
            </div>
            <div className="category-card-wrapper">
              <div className="category-image-placeholder">
                <img src="/web-assets/vitals.jpg" alt="Vitals" />
              </div>
              <div className="category-card-text">
                <h4 className="category-card-title">Vitals</h4>
                <p className="category-card-description">Heart rate, temperature, blood pressure, and other vitals provide signals about how the body is responding day to day. When viewed over time, these changes can reveal patterns that are easy to miss in isolated readings.</p>
              </div>
            </div>
          </div>
        </div>

        {/* MEDICAL */}
        <div className="category-block">
          <div className="category-header-wrapper">
            <h2 className="category-title">Medical</h2>
            <p className="category-paragraph">
              Health history is often fragmented into isolated moments — symptoms remembered later, prescriptions stored elsewhere, conversations forgotten over time.
            </p>
            <p className="category-paragraph">
              But understanding your health requires continuity, not disconnected records. SentNotes helps keep symptoms, medication, conditions, and medical history connected as part of a larger health story that evolves over time.
            </p>
          </div>
          <div className="category-images-grid">
            <div className="category-card-wrapper">
              <div className="category-image-placeholder">
                <img src="/web-assets/symptoms.jpg" alt="Symptoms" />
              </div>
              <div className="category-card-text">
                <h4 className="category-card-title">Symptoms</h4>
                <p className="category-card-description">Symptoms are often remembered as isolated moments, even though they usually develop through patterns over time. Keeping symptoms connected to daily life, routines, medication, and other changes can help create a clearer understanding of how your health is evolving.</p>
              </div>
            </div>
            <div className="category-card-wrapper">
              <div className="category-image-placeholder">
                <img src="/web-assets/condition.jpg" alt="Conditions" />
              </div>
              <div className="category-card-text">
                <h4 className="category-card-title">Conditions</h4>
                <p className="category-card-description">Health conditions are not static records stored in a file. They change through treatment, lifestyle, symptoms, routines, and daily experiences over time. Understanding those changes in context helps create a more complete view of long-term health.</p>
              </div>
            </div>
            <div className="category-card-wrapper">
              <div className="category-image-placeholder">
                <img src="/web-assets/medication.jpg" alt="Medication" />
              </div>
              <div className="category-card-text">
                <h4 className="category-card-title">Medication</h4>
                <p className="category-card-description">Medication becomes more meaningful when understood alongside symptoms, sleep, routines, mood, and overall wellbeing. Keeping medication history connected over time helps provide clearer context around treatment and how the body responds.</p>
              </div>
            </div>
            <div className="category-card-wrapper">
              <div className="category-image-placeholder">
                <img src="/web-assets/prescription.jpg" alt="Prescriptions" />
              </div>
              <div className="category-card-text">
                <h4 className="category-card-title">Prescriptions</h4>
                <p className="category-card-description">Prescriptions are often separated across appointments, pharmacies, and records over time. Keeping prescription history connected as part of your health story makes it easier to stay informed, organized, and aware of changes in treatment.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CategoryShowcase;
