import React, { useState } from "react";
import "./CTA.css";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // ✅ Automatically detect correct API base URL
  const API_BASE_URL =
    process.env.REACT_APP_API_URL ||
    (window.location.hostname.includes("localhost")
      ? "http://localhost:4000/api/v1"
      : "https://calvera-travels-tt5v.vercel.app/api/v1");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    console.log("🌍 Using API_BASE_URL:", API_BASE_URL);
    console.log("📡 Sending POST to:", `${API_BASE_URL}/newsletter/subscribe`);

    try {
      const res = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({})); // Safe JSON parse
      console.log("✅ Response status:", res.status);
      console.log("✅ Response data:", data);

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setEmail("");
          setSubmitted(false);
        }, 5000);
      } else {
        alert(
          data.message ||
            "⚠️ Subscription failed. Please check your email and try again."
        );
      }
    } catch (err) {
      console.error("❌ Network or CORS error:", err);
      alert(
        "Could not connect to our server. Please try again in a moment or check your network connection."
      );
    }
  };

  return (
    <section className="cta-section">
      {/* Decorative Elements */}
     

      <div className="cta-background"></div>

      <div className="cta-content">
        {!submitted ? (
          <>
            

            <h2>
              Start Your Dream Journey Today
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
                  Get Started <i className="fas fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="cta-success">
            <i className="fas fa-check-circle"></i>
            <h3>Welcome Aboard!</h3>
            <p>
              Thank you for subscribing! Check your inbox for exclusive travel
              offers.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
