import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-section">
            <div className="privacy-container">
                <h1>Privacy Policy</h1>
                
                <p>
                    We respect your privacy and are committed to protecting your personal information.
                </p>

                <div className="privacy-section-box">
                    <h2>Information We Collect</h2>
                    <p>When you submit a form, inquiry, or booking, we may collect:</p>
                    <ul>
                        <li>Name, contact details, and nationality</li>
                        <li>Travel preferences and itinerary details</li>
                        <li>Payment information (processed securely)</li>
                    </ul>
                </div>

                <div className="privacy-section-box">
                    <h2>How We Use Your Data</h2>
                    <p>We use your data only to:</p>
                    <ul>
                        <li>Process bookings and provide services</li>
                        <li>Communicate updates and offers</li>
                        <li>Improve our website and customer experience</li>
                    </ul>
                </div>

                <div className="privacy-highlight">
                    <p>
                        <strong>Your Data is Safe:</strong> We do not sell or share your personal data with unauthorized parties.
                    </p>
                </div>

                <p>
                    Data is shared only with trusted partners (hotels, airlines, and operators) when necessary for confirmed bookings.
                </p>

                <p>
                    You can request to update or delete your data anytime by contacting us at{' '}
                    <a href="mailto:info@calveratravels.com" className="privacy-email-link">
                        info@calveratravels.com
                    </a>.
                </p>

                <p>
                    For website performance, we use cookies — you can manage these through your browser settings.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;