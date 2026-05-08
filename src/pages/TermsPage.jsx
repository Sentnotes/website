import React, { useEffect } from 'react';
import './TermsPage.css';

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page">
      <div className="terms-container">
        <div className="terms-header">
          <h1 className="terms-title">Terms of Service</h1>
          <p className="terms-last-updated">Last updated: April 20, 2026</p>
        </div>

        <div className="terms-content">
          
          <h2>1. Agreement to Terms</h2>
          <div className="terms-alert">
            <p><strong>IMPORTANT:</strong> SentNotes is currently in active development. As an app in active development, features may be enhanced or refined over time.</p>
          </div>
          <p>
            SentNotes ("SentNotes", "we", "our", "us") provides mobile applications and related services that help you track habits, workouts, and overall wellness (collectively, the "Services"). These Terms of Service ("Terms" or "EULA") govern your access to and use of the Services. By creating an account, downloading the app, or otherwise using the Services you agree to these Terms and our Privacy Policy. If you do not agree, do not use the Services.
          </p>

          <h3>1.1 Apple App Store Acknowledgement</h3>
          <p>
            You and SentNotes acknowledge that: (i) This End User License Agreement ("EULA") is concluded between you and SentNotes only, and not with Apple Inc. ("Apple"); (ii) SentNotes, not Apple, is solely responsible for the Licensed Application and the content thereof; (iii) This EULA may not provide for usage rules for the Licensed Application that are in conflict with the Apple Media Services Terms and Conditions as of the Effective Date (which you acknowledge you have had the opportunity to review).
          </p>

          <h3>1.2 Scope of License</h3>
          <p>
            The license granted to you for the Licensed Application is limited to a non-transferable license to use the Licensed Application on any Apple-branded products that you own or control and as permitted by the Usage Rules set forth in the Apple Media Services Terms and Conditions, except that such Licensed Application may be accessed and used by other accounts associated with you via Family Sharing or volume purchasing.
          </p>

          <h2>2. Development Status</h2>
          <p>SentNotes is currently in active development. This means:</p>
          <ul>
            <li>Features and functionality may be enhanced or refined as we continue to develop the app.</li>
            <li>The app is in active development and features may evolve over time.</li>
          </ul>
          <p>By using SentNotes, you acknowledge that the app is in active development and that features may evolve over time.</p>

          <h2>3. Eligibility & Account Responsibilities</h2>
          <ul>
            <li>You must be at least 16 years old to create an account (or 13 in the United States). If you are between 13–16, you confirm that a parent or guardian has reviewed these Terms.</li>
            <li>If you are in the EU/EEA and under 16, you confirm you have obtained parental consent as required by GDPR.</li>
            <li>Keep your account credentials confidential and notify us immediately if you suspect unauthorized use.</li>
            <li>Provide accurate information when creating an account and keep it up to date.</li>
            <li>You are responsible for all activity that occurs under your account.</li>
          </ul>

          <h3>3.1 Legal Compliance</h3>
          <p>
            You represent and warrant that: (i) You are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country; and (ii) You are not listed on any U.S. Government list of prohibited or restricted parties.
          </p>
          <p>
            <strong>EU/EEA Users — GDPR Rights:</strong> If you are located in the European Economic Area, United Kingdom, or other jurisdictions with similar data protection laws, you have rights under GDPR including access, rectification, erasure, restriction, objection, and data portability. See our Privacy Policy for details.
          </p>

          <h2>4. Wellness Guidance, Not Professional Advice</h2>
          <p>
            SentNotes offers habit tracking, coaching prompts, and educational tips to support a healthy lifestyle. SentNotes is not a substitute for professional advice or individualized care. Always consult a qualified professional before relying on any information provided through the Services. If you have an emergency, contact your local emergency services immediately.
          </p>

          <h3>4.1 AI Features and Smart Suggestions Disclaimer</h3>
          <div className="terms-alert">
            <p><strong>IMPORTANT: AI-Generated Content is Not Medical Advice.</strong> SentNotes includes AI-powered features such as "Alison" (AI Nutrition Advisor, food recognition, food search, and smart goal suggestions). These AI features provide guidance and suggestions for wellness purposes only. Alison is a virtual assistant, not a doctor, healthcare provider, or medical advisor. AI-generated content, recommendations, and suggestions are NOT medical advice, nutritional advice, or professional health guidance.</p>
          </div>
          <p>
            <strong>No Liability for AI Recommendations:</strong> SentNotes is NOT responsible for any outcomes, results, injuries, or health issues resulting from following AI-generated recommendations. AI accuracy may vary, and you should use your own judgment and consult with qualified professionals when making health and fitness decisions.
          </p>
          <p>
            <strong>Smart Goal Suggestions:</strong> Smart goal suggestions are AI-generated recommendations based on your activity patterns. These suggestions are estimates and may not be appropriate for your individual health status. You should consult with a healthcare provider before implementing any goal suggestions.
          </p>

          <h2>5. Legal Disclaimer, Assumption of Risk, and Release of Liability</h2>
          <div className="terms-alert">
            <p><strong>PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS.</strong></p>
          </div>

          <h3>5.1 Inherent Risks</h3>
          <p>
            Diet suggestions, challenges, and other wellness activities available through SentNotes carry inherent risks including but not limited to emotional distress, allergic reactions, or other adverse physical or psychological effects. These risks may arise from improper use, pre-existing medical conditions, environmental factors, or individual health status. Diet suggestions may not be appropriate for individuals with food allergies, medical conditions, or dietary restrictions.
          </p>

          <h3>5.2 Medical Clearance Required</h3>
          <p>
            <strong>DO NOT PARTICIPATE IN ANY DIET PROGRAMS OR CHALLENGES UNLESS YOU ARE HEALTHY ENOUGH TO DO SO.</strong> If you have or may have a heart condition, respiratory illness, a history of seizures or epilepsy, are pregnant, have eating disorders, food allergies, or use medication that affects consciousness or metabolism, YOU MUST CONSULT WITH A LICENSED PHYSICIAN OR QUALIFIED HEALTHCARE PROVIDER BEFORE PARTICIPATION. SentNotes' diet suggestions and challenges are for general wellness purposes only and are NOT a substitute for medical, psychological, or nutritional care. If you experience faintness, dizziness, pain, shortness of breath, allergic reactions, or any adverse effect, stop immediately and seek medical attention.
          </p>

          <h3>5.3 Assumption of Risk</h3>
          <p>
            <strong>BY USING THE PLATFORM OR PARTICIPATING IN ANY DIET SUGGESTIONS, CHALLENGES, OR OTHER WELLNESS ACTIVITIES, YOU VOLUNTARILY ASSUME ALL RISKS, KNOWN AND UNKNOWN</strong>, including those arising from ordinary negligence to the fullest extent permitted by law, and including risk of serious injury, illness, or death. This assumption of risk does not apply to gross negligence, reckless conduct, or intentional misconduct where such waivers are prohibited by applicable law.
          </p>

          <h3>5.4 Release and Waiver of Liability</h3>
          <p>
            <strong>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, YOU HEREBY WAIVE, RELEASE, AND DISCHARGE SENTNOTES AND ITS OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, AND AFFILIATES ("RELEASEES") FROM ANY AND ALL LIABILITY, CLAIMS, DEMANDS, DAMAGES, OR COSTS</strong> arising from your participation in diet suggestions, challenges, or use of the Platform, including property damage, personal injury, illness, or loss.
          </p>

          <h3>5.5 Agreement Not to Sue and Indemnification</h3>
          <p>
            <strong>YOU AGREE NOT TO SUE, and to INDEMNIFY, DEFEND, AND HOLD HARMLESS</strong> the Releasees for any claims, losses, or expenses brought by you or third parties (including heirs or medical providers) related to your use of the Platform, including reasonable legal fees incurred in connection with any third-party claim, suit, action, or proceeding arising out of or resulting from your use of the Platform, following diet suggestions, or participation in challenges.
          </p>

          <h3>5.6 State-Specific Limits</h3>
          <p>
            In jurisdictions such as California, New York, Florida, and Texas, waivers and releases are enforceable only to the extent permitted by law and shall be construed narrowly. This Section does not waive rights that cannot legally be waived or claims based on gross negligence, reckless conduct, intentional acts, or violations of public policy. In Florida, certain recreational activity waivers must contain specific statutory language and may be subject to heightened scrutiny. In Texas, certain claims related to recreational activities may be governed by state-specific laws limiting liability.
          </p>

          <h3>5.7 Privacy, Symptoms, and Health Information</h3>
          <p>
            When you use the app to track and log your symptoms, medications, conditions, diet, or other personal health data, you do so willingly and voluntarily. SentNotes provides these logging tools for your personal organization and convenience only. SentNotes is NOT liable for any decisions, health outcomes, or actions you take based on the data you record. We are not a medical record keeper and you should always consult a licensed medical professional for health advice. This information is collected and processed in accordance with our Privacy Policy. By using these features, you consent to the collection, storage, and processing of such health information. We implement reasonable security measures, but you acknowledge that no system is completely secure and we cannot guarantee absolute security of your health data.
          </p>
          <p>
            <strong>Not a HIPAA Covered Entity (U.S. Users):</strong> SentNotes is NOT a "Covered Entity" or "Business Associate" under the Health Insurance Portability and Accountability Act (HIPAA). The health, mood, and fitness data you voluntarily upload to the Services is NOT Protected Health Information (PHI) under HIPAA, and is not subject to HIPAA's required privacy and security protections.
          </p>
          <p>
            <strong>Biometric and Camera Data (Heart Rate Scanning):</strong> SentNotes includes a feature to estimate your heart rate using your device's camera. This completely local process detects subtle changes in light absorption but does NOT capture, store, or transmit biometric identifiers (such as retinal scans or facial geometry) to our servers. All camera analysis for heart rate calculation is done exclusively on-device. The resulting mathematical estimate (e.g., "75 BPM") is the only data persisted.
          </p>
          <p>
            <strong>Apple HealthKit and Google Fit:</strong> If you grant SentNotes permission to read or write data to Apple HealthKit or Google Fit, we strictly abide by their respective terms. We WILL NOT use or disclose HealthKit or Google Fit data to third parties for advertising, marketing, tracking, or similar purposes. We do not use this data to determine insurance eligibility or to build consumer profiles.
          </p>

          <h2>6. SnS Tokens and Credits</h2>
          <div className="terms-alert">
            <p><strong>SnS Tokens are Gamified Items, Not Financial Instruments.</strong></p>
          </div>
          <p>
            SentNotes incorporates a reward system utilizing "SnS Tokens" or "credits." These items are purely gamified virtual items designed to encourage healthy habits and app engagement. They are NOT financial instruments, cryptocurrency, money, or property. SnS Tokens have no real-world monetary value, cannot be redeemed or exchanged for cash or legal tender outside the Platform, and cannot be transferred or sold to others. SentNotes reserves the right to modify, expire, or remove these virtual items at any time without liability.
          </p>

          <h2>7. Challenges and Prizes</h2>
          <div className="terms-alert">
            <p><strong>IMPORTANT:</strong> SentNotes is not responsible for challenge prizes or agreements.</p>
          </div>
          <p>
            SentNotes provides a platform for users to create and participate in wellness and fitness challenges. Challenges may include prizes, rewards, or other incentives offered by challenge creators or participants. SentNotes is not a party to any prize agreements, reward arrangements, or other commitments made in connection with challenges.
          </p>
          <p><strong>No Liability for Prizes:</strong> SentNotes is NOT responsible for, and assumes NO liability for:</p>
          <ul>
            <li>The fulfillment, delivery, or quality of any prizes, rewards, or incentives offered in challenges.</li>
            <li>Any agreements, promises, or commitments made between challenge creators and participants regarding prizes or rewards.</li>
            <li>Disputes between challenge creators and participants regarding prizes, rewards, or challenge outcomes.</li>
            <li>The accuracy of challenge results, leaderboard rankings, or progress calculations.</li>
            <li>Any financial losses, damages, or harm resulting from prize agreements or challenge participation.</li>
          </ul>
          <p>
            <strong>User Responsibility:</strong> Challenge creators are solely responsible for fulfilling any prizes, rewards, or commitments they offer. Participants participate in challenges at their own risk and acknowledge that SentNotes is not responsible for prize fulfillment. Any disputes regarding prizes or challenge agreements are between the challenge creator and participants, and SentNotes is not obligated to intervene or resolve such disputes.
          </p>
          <p>
            By creating or participating in a challenge, you acknowledge and agree that SentNotes is not liable for any prizes, rewards, or agreements associated with that challenge.
          </p>

          <h2>8. Subscriptions & Billing</h2>
          <p>
            SentNotes offers subscription plans with different features and pricing. By subscribing, you agree to the pricing and terms for your selected plan.
          </p>

          <h3>8.1 Subscription Plans and Pricing</h3>
          <ul>
            <li><strong>Free Plan:</strong> Basic features including health tracking, mood logging, limited meal logging (10 logs/month), limited connections, and ability to join challenges.</li>
            <li><strong>Premium Monthly:</strong> All Free plan features plus unlimited messaging, create unlimited challenges, unlimited meal logging, all breathing patterns, premium badge, priority support, and early access to features. Subscription length: 1 month. Price: $9.99 USD per month.</li>
            <li><strong>Premium Annual:</strong> All Free plan features plus unlimited messaging, create unlimited challenges, unlimited meal logging, all breathing patterns, premium badge, priority support, and early access to features. Subscription length: 1 year. Price: $99.99 USD per year (equivalent to $8.33 USD per month, saving 17%).</li>
          </ul>
          <p>Pricing may vary by region and is subject to applicable taxes. All prices are displayed in your local currency during checkout.</p>

          <h3>8.2 Subscription Duration and Renewal</h3>
          <ul>
            <li>Premium Monthly: Auto-renewable subscription with a duration of 1 month. Price: $9.99 USD per month. Price per unit: $9.99 per month.</li>
            <li>Premium Annual: Auto-renewable subscription with a duration of 1 year. Price: $99.99 USD per year. Price per unit: $8.33 per month (billed annually).</li>
            <li>Your subscription will automatically renew at the end of each billing period unless you cancel at least 24 hours before the renewal date.</li>
            <li>You will be charged the same amount for each renewal period unless we notify you of a price change.</li>
            <li>If you upgrade or downgrade your plan, the new pricing will apply to your next billing cycle.</li>
          </ul>

          <h3>8.3 Cancellation and Refunds</h3>
          <ul>
            <li>You may cancel your subscription at any time through your device settings (iOS: Settings &gt; Apple ID &gt; Subscriptions) or through the App Store.</li>
            <li>Cancellation takes effect at the end of your current billing period. You will continue to have access to Premium features until the period ends.</li>
            <li>Refunds are handled by Apple for App Store purchases in accordance with Apple's refund policy. Contact Apple Support for refund requests.</li>
            <li>We do not provide refunds for partially used subscription periods, except as required by law.</li>
          </ul>

          <h3>8.4 Payment Processing</h3>
          <ul>
            <li>Subscriptions purchased through the Apple App Store are managed by Apple. All billing, renewals, upgrades, downgrades, and cancellations must be handled through Apple's subscription management system.</li>
            <li>Payment is charged to your Apple ID account at confirmation of purchase.</li>
            <li>We may change plan pricing or features with advance notice. Continued use of the Services after price changes constitutes acceptance of the new pricing.</li>
          </ul>

          <h3>8.5 Maintenance and Support</h3>
          <p>
            SentNotes is solely responsible for providing any maintenance and support services with respect to the Licensed Application, as specified in these Terms, or as required under applicable law. You and SentNotes acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the Licensed Application.
          </p>

          <h3>8.6 Warranty</h3>
          <p>
            SentNotes is solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. In the event of any failure of the Licensed Application to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price for the Licensed Application to you. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the Licensed Application, and any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be SentNotes' sole responsibility.
          </p>

          <h3>8.7 Product Claims</h3>
          <p>
            You and SentNotes acknowledge that SentNotes, not Apple, is responsible for addressing any claims of you or any third party relating to the Licensed Application or your possession and/or use of that Licensed Application, including, but not limited to: (i) product liability claims; (ii) any claim that the Licensed Application fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection, privacy, or similar legislation, including in connection with the Licensed Application's use of the HealthKit framework. This EULA may not limit SentNotes' liability to you beyond what is permitted by applicable law.
          </p>

          <h3>8.8 Intellectual Property Rights</h3>
          <p>
            You and SentNotes acknowledge that, in the event of any third party claim that the Licensed Application or your possession and use of that Licensed Application infringes that third party's intellectual property rights, SentNotes, not Apple, will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim.
          </p>

          <h3>8.9 Third Party Beneficiary</h3>
          <p>
            You and SentNotes acknowledge and agree that Apple, and Apple's subsidiaries, are third party beneficiaries of this EULA, and that, upon your acceptance of the terms and conditions of this EULA, Apple will have the right (and will be deemed to have accepted the right) to enforce this EULA against you as a third party beneficiary thereof.
          </p>
          <p>
            <strong>Apple App Store:</strong> If you purchase a subscription through the Apple App Store, you acknowledge that (i) these Terms are between you and SentNotes only, and Apple is not a party to these Terms; (ii) Apple is not responsible for the App or its content; (iii) your use of the App must comply with the App Store Terms of Service; and (iv) Apple has no obligation to furnish any maintenance or support services with respect to the App.
          </p>

          <h2>10. User Content and Acceptable Use</h2>
          <p>
            You may log notes, metrics, attachments, create challenges, send messages, and post other content ("User Content"). You retain ownership of your User Content, but grant SentNotes a worldwide, royalty-free license to host, store, process, analyze, and display User Content solely for the purpose of providing and improving the Services.
          </p>

          <h3>10.1 Zero Tolerance for Objectionable Content</h3>
          <p>
            SentNotes has a <strong>ZERO TOLERANCE POLICY</strong> for objectionable content and abusive users. "Objectionable Content" includes, but is not limited to: hate speech, violence, explicit/sexual material, harassment, bullying, copyright infringement, and illegal activities.
          </p>
          <ul>
            <li><strong>Reporting:</strong> Users can report objectionable content or abusive users directly within the app (e.g., via the Message screen or Challenge screen).</li>
            <li><strong>Blocking:</strong> Users have the ability to proactively block other users from contacting them or viewing their profiles.</li>
            <li><strong>Review & Moderation:</strong> SentNotes administrators review all reported content and users within 24 hours.</li>
            <li><strong>Action Taken:</strong> If a user is found to be generating objectionable content or engaging in abusive behavior, their content will be immediately removed, and their account will be permanently banned.</li>
          </ul>
          <p>You are solely responsible for ensuring that your User Content does not violate the rights of others or applicable laws.</p>

          <h2>11. Feedback</h2>
          <p>
            If you provide feedback, suggestions, or ideas, you grant SentNotes the right to use that feedback without restriction or compensation, including to improve existing products or develop new ones.
          </p>

          <h2>12. Third-Party Links & Services</h2>
          <p>
            The Services may integrate with third-party tools, wellness devices, or content. SentNotes is not responsible for third-party services and your use of them is governed by their terms and policies. Review those documents carefully before connecting an integration.
          </p>
          <p>
            <strong>Third Party Terms of Agreement:</strong> You must comply with applicable third party terms of agreement when using the Licensed Application. For example, if you use features that require network connectivity, you must not be in violation of your wireless data service agreement when using the Licensed Application.
          </p>

          <h2>13. Termination</h2>
          <ul>
            <li>You may stop using the Services at any time and request account deletion by contacting support@sentnotes.com.</li>
            <li>We reserve the right to suspend or terminate your access if we believe you violated these Terms, pose a security risk, or cause harm to other users.</li>
            <li>Upon termination these Terms will continue for provisions that by their nature should survive (including ownership, warranty disclaimers, indemnity, and liability limitations).</li>
          </ul>

          <h2>14. Disclaimers</h2>
          <p>
            The Services are provided "as is" and "as available" without warranties of any kind, express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. SentNotes does not guarantee specific wellness outcomes or continuous, error-free operation.
          </p>

          <h2>15. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, SentNotes will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits or data, arising out of or in connection with the Services or these Terms. Our total liability for any claim arising under these Terms will not exceed the amount you paid to use the Services in the twelve months preceding the event giving rise to the claim.
          </p>

          <h2>16. Indemnity</h2>
          <p>
            You agree to defend, indemnify, and hold SentNotes and its affiliates, directors, employees, and agents harmless from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or relating to your use of the Services, your User Content, or your violation of these Terms or applicable law.
          </p>

          <h2>17. Updates to These Terms</h2>
          <p>
            We may modify these Terms from time to time. If we make material changes we will notify you through the Services or by email, and update the "Last updated" date above. Your continued use after the effective date of the revised Terms constitutes acceptance.
          </p>

          <h2>18. Governing Law & Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of Hungary, without regard to conflict of law principles.
          </p>
          <p>
            <strong>EU/EEA Users:</strong> If you are in the EU/EEA, these Terms are subject to applicable EU laws including GDPR and EU consumer protection laws. You may have additional rights that cannot be waived. You can use the EU Online Dispute Resolution platform for resolving disputes.
          </p>
          <p>
            Any disputes will be resolved in the courts located in Budapest, Hungary, or in your country of residence if required by applicable EU law. You and SentNotes agree to submit to the personal jurisdiction of those courts.
          </p>

          <h2>19. Developer Information and Contact</h2>
          <p><strong>Developer:</strong> SentNotes, Budapest, Hungary</p>
          <p><strong>Contact:</strong> For questions, complaints, or claims with respect to the Licensed Application, please contact us at support@sentnotes.com</p>
          <p>
            <em>Alison, our virtual support assistant, will acknowledge your message and the SentNotes legal team will follow up shortly.</em>
          </p>

        </div>
      </div>
    </div>
  );
};

export default TermsPage;
