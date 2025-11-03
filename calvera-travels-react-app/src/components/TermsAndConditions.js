import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
    return (
        // Main container with padding for visual separation from headers/footers
        <div className="container" style={{paddingTop: '150px', paddingBottom: '50px', maxWidth: '900px', margin: '0 auto'}}>
            <header style={{textAlign: 'center', marginBottom: '40px'}}>
                <h1 style={{color: '#0056b3', borderBottom: '2px solid #0056b3', paddingBottom: '10px'}}>
                    Travel Terms & Conditions
                </h1>
                <p style={{color: '#6c757d', fontSize: '1.1em'}}>
                    Your guide to a smooth journey with Calvera Travel.
                </p>
            </header>

            <section style={{marginBottom: '40px'}}>
                <h2 style={sectionHeadingStyle}>7-1. Bookings & Payments</h2>
                <ul style={listStyle}>
                    <li>**Confirmation:** Bookings are confirmed upon payment of a deposit.</li>
                    <li>**Full Payment:** Full payment is due before the commencement of your tour.</li>
                    <li>**Pricing:** All prices are subject to change based on exchange rates and availability.</li>
                </ul>
            </section>

            <section style={{marginBottom: '40px'}}>
                <h2 style={sectionHeadingStyle}>7-2. Cancellations & Refunds</h2>
                <p style={{marginBottom: '10px'}}>Our standard refund policy is as follows:</p>
                <ul style={listStyle}>
                    <li>**30+ days before travel:** 90% refund</li>
                    <li>**15–30 days before travel:** 50% refund</li>
                    <li>**Less than 15 days before travel:** No refund</li>
                </ul>
                <blockquote style={noteStyle}>
                    **Note:** Refund policies of hotels, airlines, and other third-party services may apply separately and supersede this policy.
                </blockquote>
            </section>

            <section style={{marginBottom: '40px'}}>
                <h2 style={sectionHeadingStyle}>7-3. Liability Statement</h2>
                <p style={paragraphStyle}>
                    Calvera Travel acts solely as an **agent** between clients and service providers. We are not liable for delays, losses, or injuries caused by third-party suppliers (e.g., hotels, transportation companies) or events beyond our direct control.
                </p>
            </section>

            <section style={{marginBottom: '40px'}}>
                <h2 style={sectionHeadingStyle}>7-4. Client Responsibility</h2>
                <p style={paragraphStyle}>
                    Travelers must ensure they possess **valid travel documents**, adhere to all local laws, and respect cultural and safety guidelines throughout their journey.
                </p>
            </section>

            <section style={{marginBottom: '40px'}}>
                <h2 style={sectionHeadingStyle}>7-5. Force Majeure</h2>
                <p style={paragraphStyle}>
                    We are not responsible for any cancellations, changes, or delays resulting from **Force Majeure** events, including but not limited to natural disasters, pandemics, strikes, or political unrest.
                </p>
            </section>

            <section style={{marginBottom: '40px'}}>
                <h2 style={sectionHeadingStyle}>7-6. Governing Law</h2>
                <p style={paragraphStyle}>
                    These terms and conditions are governed by the laws of **Sri Lanka**. All disputes will be handled exclusively under the jurisdiction of Sri Lankan courts.
                </p>
            </section>
            
            <hr style={{margin: '50px 0', borderTop: '1px solid #ddd'}} />

            {/* Added the Destinations section content here as a closing statement */}
            <section style={{textAlign: 'center'}}>
                <h2 style={sectionHeadingStyle}>8. Destinations: Discover Sri Lanka with Calvera Travel</h2>
                <p style={{...paragraphStyle, fontStyle: 'italic', fontSize: '1.1em'}}>
                    Every journey tells a story — and Sri Lanka has thousands to share.
                </p>
                <p style={paragraphStyle}>
                    At Calvera Travel, we take you beyond the ordinary, guiding you through the island’s **vibrant cities, misty mountains, golden beaches, lush jungles, and ancient wonders.** Let us craft your perfect Sri Lankan adventure.
                </p>
            </section>
        </div>
    );
};

// Simple styles for a clean look
const sectionHeadingStyle = {
    color: '#333',
    borderLeft: '4px solid #f9a03f',
    paddingLeft: '10px',
    marginBottom: '15px',
};

const listStyle = {
    paddingLeft: '20px',
    lineHeight: '1.8',
};

const paragraphStyle = {
    lineHeight: '1.6',
    color: '#555',
};

const noteStyle = {
    backgroundColor: '#f8f9fa',
    borderLeft: '5px solid #ffc107',
    padding: '15px',
    margin: '20px 0',
    color: '#333',
    fontSize: '0.95em',
};


// FIX: The export statement must match the component name.
export default TermsAndConditions;