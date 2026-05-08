import React, { useEffect } from 'react';
import './PrivacyPage.css';

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <div className="privacy-header">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-last-updated">Last updated: April 20, 2026</p>
        </div>

        <div className="privacy-content">
          
          <h2>Introduction</h2>
          <div className="privacy-alert">
            <p><strong>IMPORTANT:</strong> SentNotes is currently in active development.</p>
          </div>
          <p>
            SentNotes ("SentNotes", "we", "our", "us") builds tools that help you track habits, workouts, and wellness goals. This Privacy Policy explains how we collect, use, share, and protect your information when you use the SentNotes mobile application and any related services (collectively, the "Services"). As an app in active development, features may be enhanced or refined over time. By using the Services you agree to the practices described below.
          </p>

          <h2>Development Status</h2>
          <p>SentNotes is currently in active development. This means:</p>
          <ul>
            <li>Features and functionality may be enhanced or refined as we continue to develop the app.</li>
            <li>Data processing practices may be updated as we improve the Services.</li>
            <li>The app is in active development and features may evolve over time.</li>
          </ul>
          <p>By using SentNotes, you acknowledge that the app is in active development and that features may evolve over time.</p>

          <h2>Information We Collect</h2>
          <p>
            We collect information in three primary ways: (1) information you provide to us directly, (2) information we receive automatically when you use the Services, and (3) information we receive from third parties you authorize.
          </p>
          <ul>
            <li><strong>Account details</strong> such as name, email address, username, profile picture, bio, age, gender, time zone (automatically detected from device), and subscription status and transaction information (processed through Apple In-App Purchase).</li>
            <li><strong>Not a HIPAA Covered Entity (U.S.):</strong> SentNotes is NOT a HIPAA Covered Entity. Your voluntarily provided health data is NOT Protected Health Information (PHI) under HIPAA, and we do not manage medical records.</li>
            <li><strong>Saved meals</strong> (favorite meals saved for quick reuse) and meal scan events (AI detection data, corrections, feedback).</li>
            <li><strong>Challenge images</strong> you upload when creating challenges (stored securely on our servers).</li>
            <li><strong>Smart goal suggestions metadata</strong> (whether suggestions were shown, applied, or dismissed).</li>
            <li><strong>Device and usage data</strong> including IP address, device identifiers, app version, crash logs, and feature usage analytics.</li>
            <li><strong>Optional integrations</strong>, for example Apple HealthKit or Google Fit metrics that you explicitly connect. Note: SentNotes uses HealthKit and Google Fit for display and tracking purposes only. We DO NOT use or disclose any HealthKit or Google Fit data to third parties for advertising, marketing, tracking, or similar purposes.</li>
            <li><strong>Biometric/Camera Heart Rate Data:</strong> When you use the camera to estimate your heart rate, the processing is entirely local. We do NOT capture, extract, or transmit any biometric identifiers (facial geometry, fingerprints) to our servers.</li>
            <li><strong>Reproductive Health Data:</strong> If you choose to use our reproductive health tracking features, your data (including menstrual cycle information, basal body temperature, cervical mucus quality, ovulation test results, and sexual activity data) will be stored securely in our encrypted database with Row Level Security (RLS) protection. This ensures that only you can access your own reproductive health information. We may also attempt to sync this data to Apple HealthKit on your device if you grant permissions, but the primary storage location is our secure database. This sensitive information is protected by the same security measures as all other health data and is never shared with third parties.</li>
            <li><strong>Support interactions</strong>, survey responses, and feedback shared with Alison, our virtual assistant.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>Provide, personalize, and maintain the Services you request.</li>
            <li>Recommend routines, challenges, reminders, and insights tailored to your goals.</li>
            <li>Generate smart goal suggestions based on your activity patterns (AI-powered, not medical advice).</li>
            <li>Store and display challenge images and saved meals you create.</li>
            <li>Improve AI accuracy through meal scan event analysis (in anonymized, aggregated form).</li>
            <li>Deliver customer support, respond to requests, and resolve technical issues.</li>
            <li>Send transactional messages (for example password reset emails or subscription receipts).</li>
            <li>Improve the Services through analytics, testing, and research.</li>
            <li>Enforce our Terms of Use, protect against fraud, and comply with legal obligations.</li>
          </ul>

          <h2>Legal Bases for Processing</h2>
          <p>
            Where required by law, we rely on the following legal bases to process your information: your consent, fulfillment of a contract with you, compliance with legal obligations, and our legitimate interests in operating and improving the Services. We only rely on consent where it is required, and you may withdraw consent at any time.
          </p>

          <h2>How We Share Information</h2>
          <ul>
            <li><strong>Apple In-App Purchase:</strong> Subscription purchases are processed through Apple's In-App Purchase system. Apple handles all payment processing, and we receive only subscription status and transaction information necessary to provide premium features. We do not store your payment card information, which is securely managed by Apple. Subscription data (including purchase history, renewal dates, and cancellation status) is synced from Apple to manage your premium access.</li>
            <li><strong>Service providers</strong> that host our infrastructure, analytics, communication tools, customer support software, and payment processing. These providers may only use the information to perform services on our behalf and must protect it in accordance with this policy.</li>
            <li><strong>Third-party integrations</strong> that you choose, such as log-in providers or wellness data sources. We share only the information needed to enable the integration.</li>
            <li><strong>Business transfers</strong> if we merge, sell assets, restructure, or undergo financing; in such cases we will notify you and require the successor to honor this policy.</li>
            <li><strong>Legal and safety obligations</strong> when we must comply with applicable law, enforce our agreements, protect SentNotes, our users, or the public from harm, or respond to lawful requests from authorities.</li>
          </ul>

          <h2>International Data Transfers</h2>
          <p>
            SentNotes operates from Budapest, Hungary and uses service providers located in multiple countries. When you use the Services, your information may be transferred to and processed in regions with different data protection laws. We apply safeguards such as standard contractual clauses, data processing agreements, and technical controls to protect your information during these transfers.
          </p>

          <h2>Retention</h2>
          <p>
            We keep your information for as long as necessary to provide the Services, comply with our legal obligations, resolve disputes, secure our systems, and enforce agreements. When information is no longer needed, we securely delete or anonymize it.
          </p>

          <h2>Your Choices and Rights</h2>
          <ul>
            <li>Access, update, or delete your account information from within the app or by contacting support@sentnotes.com.</li>
            <li>Export your data using the account tools or request an export from our support team.</li>
            <li>Opt out of promotional emails by using the unsubscribe link or adjusting notification preferences.</li>
            <li>Control push notifications within device settings and inside the SentNotes notification preferences page.</li>
            <li>Revoke permissions for third-party integrations at any time.</li>
            <li>Depending on your jurisdiction, you may have additional rights (for example the right to object, restrict processing, or lodge a complaint with your local authority). We honor these rights where they apply.</li>
          </ul>

          <h2>Privacy Settings and Profile Visibility</h2>
          <p>You can control who can see your profile and activity information through privacy settings in the app:</p>
          <ul>
            <li><strong>Profile Visibility:</strong> This is your master privacy setting. You can set your profile to "Public" (visible to everyone), "Buddies Only" (visible only to your connections), or "Private" (visible only to you).</li>
            <li><strong>Achievements and Badges:</strong> The visibility of your achievements and badges automatically follows your Profile Visibility setting. If your profile is private, achievements and badges are also private.</li>
            <li><strong>Activity Visibility:</strong> When your Profile Visibility is set to "Private" or "Buddies Only", your activity visibility is automatically restricted to match. This prevents contradictory settings where your profile is private but activities are public.</li>
            <li><strong>Route Maps:</strong> Similar to activity visibility, route maps visibility is automatically restricted when your profile is set to "Private" or "Buddies Only".</li>
          </ul>
          <p>You can adjust these settings at any time in Settings &rarr; Profile &rarr; Privacy Settings. Changes take effect immediately.</p>

          <h2>Security</h2>
          <p>
            We maintain administrative, technical, and physical safeguards designed to protect your information against unauthorized access, disclosure, alteration, and destruction. Despite these protections, no system is perfectly secure. We encourage you to use strong passwords, enable device security features, and notify us promptly if you suspect unauthorized activity.
          </p>

          <h2>Reproductive Health Data Protection</h2>
          <p>
            Your reproductive health data is stored securely in our encrypted database with Row Level Security (RLS) protection. This ensures that only you can access your own reproductive health information. We may also attempt to sync this data to Apple HealthKit on your device if you grant permissions, but the primary storage location is our secure, encrypted database. This sensitive information is never shared with third parties and is protected by the same security measures as all other health data.
          </p>

          <h2>Children</h2>
          <p>
            SentNotes is intended for individuals aged 16 and older. We do not knowingly collect personal information from children under 16. If we learn that we have collected information from a child under 16, we will delete it promptly.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy to reflect changes to the Services, applicable law, or privacy practices. When we make material changes we will post an updated date at the top, provide a notice in the app, or obtain consent where required. Please review this policy periodically.
          </p>

          <h2>AI Features and Data Processing</h2>
          <p>
            <strong>AI Food Recognition and Search:</strong> When you use AI food recognition or search, food photos and text queries are sent to secure, third-party AI service providers for processing. These providers are bound by strict data processing agreements and do not use your data to train their public models, nor do they store this data beyond the immediate processing session. We may log meal scan events (detection data, corrections, feedback) internally to improve our own AI accuracy, but this data is processed strictly in accordance with this Privacy Policy.
          </p>
          <p>
            <strong>Smart Goal Suggestions:</strong> The App analyzes your activity patterns to generate personalized goal suggestions. This analysis uses your health data (steps, active minutes, calories, sleep) and is not medical advice. You can enable or disable this feature in Settings.
          </p>
          <p>
            <strong>Challenge Images and Saved Meals:</strong> Images you upload for challenges and meals you save are stored on our secure servers and associated with your account. You can delete these at any time.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions or requests related to privacy, email us at support@sentnotes.com with the subject line "Privacy Request". Alison, our virtual assistant, will acknowledge your message and the SentNotes privacy team will follow up shortly.
          </p>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
