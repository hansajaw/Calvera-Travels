import React, { useState } from "react";
import Hero from "./Hero"; // Import the Hero component
import "./PlanYourTrip.css";
import tourPackages from "../data/tourPackages";

const PlanYourTrip = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Enhanced hero background images
  const heroImages = [
    "/images/Planyortrip/PYTBack1.jpg",
    "/images/Planyortrip/PYTBack2.jpg",
    "/images/Planyortrip/PYTBack.jpg",
  ];

const handleSubmit = async (e) => {
  e.preventDefault();
  const data = new FormData(e.target);

  // Convert FormData → plain object
  const formObject = {
    tripType: [],
    destinations: [],
    experiences: [],
  };

  data.forEach((value, key) => {
    if (["tripType", "destinations", "experiences"].includes(key)) {
      formObject[key].push(value);
    } else {
      formObject[key] = value;
    }
  });

  // ✅ Add the date conversion here
  if (data.get("arrivalDate")) {
    formObject.arrivalDate = new Date(data.get("arrivalDate"));
  }
  if (data.get("departureDate")) {
    formObject.departureDate = new Date(data.get("departureDate"));
  }

  // Add a few defaults
  formObject.sourcePage = "plan-trip";
  formObject.agreePrivacy = data.get("agreePrivacy") ? true : false;
  formObject.agreeTerms = data.get("agreeTerms") ? true : false;

  console.log("Submitting form:", formObject);

  try {
    const res = await fetch("http://localhost:4000/api/v1/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formObject),
    });

    if (!res.ok) throw new Error("Failed to submit");
    const result = await res.json();
    console.log("✅ Backend response:", result);
    setIsSubmitted(true);

    // Reset form
    e.target.reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  } catch (err) {
    console.error("❌ Error submitting:", err);
    alert("Something went wrong while submitting. Please try again.");
  }
};


  return (
    <div className="plan-trip-page">
      {/* Hero Section with custom backgrounds */}
      <Hero 
        images={heroImages}
        title="Plan Your Dream Trip"
        highlightText="Tailored Just For You"
        subtitle="Fill out the form and our travel experts will craft the perfect itinerary"
        badge="Personalized Planning"
        primaryButton={{ 
          text: "Start Planning", 
          link: "#travel-form", 
          icon: "fa-clipboard-list" 
        }}
        secondaryButton={{ 
          text: "View Packages", 
          link: "/tours", 
          icon: "fa-gift" 
        }}
        showFeatures={true}
        showScrollIndicator={true}
      />

      <div className="container">
        <div className="section">
          <h2 className="section-title">Your Travel Preferences</h2>

          {/* Tour Packages Scroll Bar */}
          <div className="tour-scroll-bar">
            <div className="scroll-content">
              {tourPackages.map((tour) => (
                <div key={tour.id} className="tour-card">
                  <img src={tour.image} alt={tour.title} />
                  <div className="tour-info">
                    <h4>{tour.title}</h4>
                    <p>{tour.description}</p>
                    <span className="price">{tour.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {isSubmitted ? (
            <div className="success-message">
              <div className="success-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Thank You!</h3>
              <p>
                Your travel plan has been submitted successfully. Our team will
                contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form id="travel-form" onSubmit={handleSubmit}>
              {/* 1. Trip Type */}
              <div className="form-card">
                <h3>What type of trip are you planning?</h3>
                <div className="checkbox-grid">
                  {[
                    "Leisure / Holiday",
                    "Honeymoon",
                    "Adventure",
                    "Cultural & Heritage",
                    "Family Vacation",
                    "Business / Corporate",
                  ].map((type) => (
                    <label key={type} className="checkbox-label">
                      <input type="checkbox" name="tripType" value={type} />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 2. Destinations */}
              <div className="form-card">
                <h3>Which destinations are you most interested in?</h3>
                <div className="checkbox-grid">
                  {[
                    "Colombo",
                    "Kandy",
                    "Sigiriya",
                    "Nuwara Eliya",
                    "Ella",
                    "Galle / Mirissa",
                    "Yala / Udawalawe",
                    "Jaffna",
                  ].map((place) => (
                    <label key={place} className="checkbox-label">
                      <input type="checkbox" name="destinations" value={place} />
                      <span>{place}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 3. Experiences */}
              <div className="form-card">
                <h3>What activities or experiences interest you most?</h3>
                <div className="checkbox-grid">
                  {[
                    "Beach Relaxation",
                    "Wildlife & Safari",
                    "Hiking & Nature Trails",
                    "Cultural Heritage Tours",
                    "Water Sports / Diving",
                    "Ayurveda & Spa",
                    "Food & Culinary Experiences",
                    "City Tours & Shopping",
                  ].map((exp) => (
                    <label key={exp} className="checkbox-label">
                      <input type="checkbox" name="experiences" value={exp} />
                      <span>{exp}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 4. Personal Details */}
              <div className="form-card">
                <h3>Fill Your Details</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label>Title *</label>
                    <select name="title" required>
                      <option value="">Select</option>
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                      <option value="Miss">Miss</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="First and Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact Number *</label>
                    <input
                      type="tel"
                      name="contact"
                      placeholder="+94 7XX XXX XXX"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Nationality *</label>
                    <input
                      type="text"
                      name="nationality"
                      placeholder="Your nationality"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Expected Number of Days *</label>
                    <input
                      type="number"
                      name="expectedDays"
                      min="1"
                      placeholder="e.g., 7"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Arrival Date</label>
                    <input type="date" name="arrivalDate" />
                  </div>
                  <div className="form-group">
                    <label>Departure Date</label>
                    <input type="date" name="departureDate" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Number of Adults *</label>
                    <input
                      type="number"
                      name="adults"
                      min="1"
                      placeholder="1"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Number of Children</label>
                    <input type="number" name="children" min="0" placeholder="0" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Budget per Person (USD)</label>
                  <select name="budget">
                    <option value="">Select Budget</option>
                    <option value="300-500">$300 - $500</option>
                    <option value="500-800">$500 - $800</option>
                    <option value="800-1000">$800 - $1,000</option>
                    <option value="1000-2000">$1,000 - $2,000</option>
                    <option value="2000-3000">$2,000 - $3,000</option>
                  </select>
                </div>

                <div className="terms-box">
                  <label>
                    <input type="checkbox" name="agreePrivacy" required /> I agree
                    to the <a href="/privacy-policy">Privacy Policy</a>
                  </label>
                  <label>
                    <input type="checkbox" name="agreeTerms" required /> I agree to
                    the <a href="/terms-and-condition">Terms & Conditions</a>
                  </label>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Submit Your Plan
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanYourTrip;