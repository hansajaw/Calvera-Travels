import React, { useState } from 'react';
import './CTA.css';

const CTA = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
        const res = await fetch("http://localhost:4000/api/v1/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        });

        const data = await res.json();

        if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
            setEmail("");
            setSubmitted(false);
        }, 5000);
        } else {
        alert(data.message || "Subscription failed. Try again.");
        }
    } catch (err) {
        console.error("❌ Error subscribing:", err);
        alert("Could not connect to the server.");
    }
    };


    return (
        <section className="cta-section">
            {/* Decorative Elements */}
            <div className="cta-decorative-circle circle-1"></div>
            <div className="cta-decorative-circle circle-2"></div>
            <div className="cta-decorative-circle circle-3"></div>
            
            <div className="cta-background"></div>
            
            <div className="cta-content">
                {!submitted ? (
                    <>
                        <div className="cta-info-badge">
                            <i className="fas fa-star"></i>
                            <span>Your Adventure Begins with Us</span>
                        </div>
                        
                        <h2>
                            Start Your <span>Dream Journey</span> Today
                        </h2>
                        <p>
                            Subscribe to our newsletter and get exclusive travel deals, 
                            insider tips, and inspiration delivered straight to your inbox.
                        </p>
                        
                        <div className="cta-form-wrapper">
                            <form className="cta-form" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit">
                                    Get Started
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </form>
                        </div>
                    </>
                ) : (
                    <div className="cta-success">
                        <i className="fas fa-check-circle"></i>
                        <h3>Welcome Aboard!</h3>
                        <p>
                            Thank you for subscribing! Check your inbox for exclusive travel offers.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CTA;