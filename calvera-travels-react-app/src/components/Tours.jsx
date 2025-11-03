import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import "./Tours.css";

// =======================================================================
// SMALL POPUP: Thank You
// =======================================================================
const ConfirmationPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-content small-popup"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="popup-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className="popup-body">
          <h2 className="ty-title">
            <i className="fas fa-envelope-open-text"></i>
            Thank you for choosing Calvera!
          </h2>
          <p className="ty-text">
            Your booking request has been received. Our travel crew will contact you
            shortly to confirm your itinerary and final details. We’re excited to plan
            your dream adventure in Sri Lanka!
          </p>

          <button onClick={onClose} className="btn-primary center-btn">
            <i className="fas fa-arrow-left"></i> Return to Tours
          </button>
        </div>
      </div>
    </div>
  );
};

// =======================================================================
// POPUP: Booking Form
// =======================================================================
const BookingFormPopup = ({ pkg, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    travellers: "",
    note: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to your backend API
      const res = await fetch("http://localhost:4000/api/v1/tour/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          travelers: Number(formData.travellers || 1),
          notes: formData.note,
          tourId: pkg?.id,
          tourName: pkg?.title, // so emails show the package name
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Booking failed");

      onSubmit?.(); // Show thank-you popup
    } catch (err) {
      console.error("Booking error:", err);
      alert(err.message || "Could not connect to server.");
    } finally {
      setLoading(false);
    }
  };

  if (!pkg) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="popup-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        {/* Header (Hero) — not scrollable */}
        <div className="popup-header">
          <img src={pkg.image} alt={pkg.imageAlt} />
          <div className="popup-title">
            <h2>Book {pkg.title}</h2>
            <p>{pkg.duration}</p>
          </div>
        </div>

        {/* Scrollable body only */}
        <div className="popup-body scrollable-popup">
          <h3 className="form-heading">Fill these fields to receive your package</h3>
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+94 7X XXX XXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Preferred Start Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Number of Travellers</label>
                <input
                  type="number"
                  name="travellers"
                  min="1"
                  placeholder="1"
                  value={formData.travellers}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Additional Notes (Optional)</label>
              <textarea
                name="note"
                rows="4"
                placeholder="Any special requests or comments?"
                value={formData.note}
                onChange={handleChange}
              />
            </div>

            <div className="popup-buttons">
              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Submit Inquiry
                  </>
                )}
              </button>
              <button type="button" className="btn-secondary" onClick={onClose}>
                <i className="fas fa-arrow-left"></i> Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// =======================================================================
// POPUP: Package Details (View Summary)
// =======================================================================
const PackagePopup = ({ pkg, onClose, onReceiveNow }) => {
  if (!pkg) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="popup-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        {/* Header (Hero) — not scrollable */}
        <div className="popup-header">
          <img src={pkg.image} alt={pkg.imageAlt} />
          <div className="popup-title">
            <h2>{pkg.title}</h2>
            <p>{pkg.duration}</p>
          </div>
        </div>

        {/* Scrollable details */}
        <div className="popup-body scrollable-popup">
          <ul className="popup-details">
            <li>
              <strong>Destinations:</strong> {pkg.destinations.join(" • ")}
            </li>
            <li>
              <strong>Ideal For:</strong> {pkg.idealFor}
            </li>
            <li>
              <strong>Starting From:</strong> {pkg.price}
            </li>
          </ul>

          <div className="popup-summary">
            <h3>Summary</h3>
            <p>{pkg.summary}</p>
          </div>

          <div className="popup-highlights">
            <h3>Highlights</h3>
            <ul>
              {pkg.highlights.map((h, i) => (
                <li key={i}>
                  <i className="fas fa-check-circle"></i> {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="popup-buttons">
            <button className="btn-primary" onClick={onReceiveNow}>
              <i className="fas fa-calendar-check"></i> Receive Now
            </button>
            <button className="btn-secondary" onClick={onClose}>
              <i className="fas fa-arrow-left"></i> Back to Tours
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// =======================================================================
// MAIN PAGE
// =======================================================================
const Tours = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showPackagePopup, setShowPackagePopup] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Hide header & lock body scroll when any popup is shown
  useEffect(() => {
    const anyOpen = showPackagePopup || showBookingForm || showConfirmation;
    document.body.classList.toggle("popup-active", anyOpen);
    document.body.style.overflow = anyOpen ? "hidden" : "auto";
    return () => {
      document.body.classList.remove("popup-active");
      document.body.style.overflow = "auto";
    };
  }, [showPackagePopup, showBookingForm, showConfirmation]);

  const toursHeroImages = [
    "/images/Tours/tours hero back/tourshero (1).jpg",
    "/images/Tours/tours hero back/tourshero (2).jpg",
    "/images/Tours/tours hero back/tourshero (3).jpg",
  ];

  const packages = [
    {
      id: "romantic-escape",
      title: "Calvera Romantic Escape",
      duration: "8 Days / 7 Nights",
      destinations: ["Sigiriya", "Kandy", "Ella", "Yala", "Galle"],
      idealFor: "Honeymooners & Couples",
      price: "USD 1,820 per person",
      summary:
        "Embark on an unforgettable honeymoon through Sri Lanka's most romantic landscapes. From the ancient majesty of Sigiriya to the misty hills of Ella and the wild wonders of Yala, each day is filled with love, discovery, and relaxation by golden beaches.",
      highlights: [
        "Climb the legendary Sigiriya Rock Fortress",
        "Enjoy a Minneriya elephant safari",
        "Visit the Temple of the Tooth Relic in Kandy",
        "Ride the scenic train to Ella",
        "Experience a Yala National Park safari",
        "Unwind on golden beaches under tropical sunsets",
      ],
      theme: "romantic",
      image:
        "/images/Tours/Calvera pakage/Calvera Honeymoon/Calvera Hoooneymoon.jpg",
      hoverImage:
        "/images/Tours/Calvera pakage/Calvera Honeymoon/Calvera Hoooneymoon.jpg",
      imageAlt: "Romantic couple in Sri Lanka",
    },
    {
      id: "cultural-essence",
      title: "Calvera Cultural Essence",
      duration: "6 Days / 5 Nights",
      destinations: [
        "Kandy",
        "Sigiriya",
        "Anuradhapura",
        "Polonnaruwa",
        "Hiriwadunna",
        "Negombo",
      ],
      idealFor: "Culture Lovers & Explorers",
      price: "USD 930 per person",
      summary:
        "Step into the heart of Sri Lanka's cultural heritage. Explore sacred temples, ancient capitals, and traditional village life as you uncover the timeless beauty of this island's past and present.",
      highlights: [
        "Visit Temple of the Tooth Relic",
        "Climb Sigiriya Fortress",
        "Explore Anuradhapura & Polonnaruwa",
        "Village life in Hiriwadunna",
        "Relax by the beaches of Negombo",
      ],
      theme: "cultural",
      image: "/images/Tours/Calvera pakage/Calvera Cultuer/dance-6983578.jpg",
      imageAlt: "Cultural heritage of Sri Lanka",
    },
    {
      id: "wild-trails",
      title: "Calvera Wild Trails",
      duration: "8 Days / 7 Nights",
      destinations: ["Wilpattu", "Kandy", "Nuwara Eliya", "Yala", "Mirissa"],
      idealFor:
        "Nature Lovers, Wildlife Enthusiasts & Adventure Seekers",
      price: "USD 1,560 per person",
      summary:
        "Journey deep into the wild heart of Sri Lanka with this thrilling nature and wildlife adventure. From leopard safaris to whale watching, every moment immerses you in breathtaking natural beauty.",
      highlights: [
        "Safari in Wilpattu & Yala",
        "Trekking at Udawattekele, Moon Plains & Horton Plains",
        "Visit Temple of the Tooth Relic",
        "Whale watching in Mirissa",
        "Relax on golden beaches at sunset",
      ],
      theme: "adventure",
      image:
        "/images/Tours/Calvera pakage/Calvera Wild/henning-borgersen-Kr_RijTa0kg-unsplash.jpg",
      imageAlt: "Safari jeep exploring the wild",
    },
    {
      id: "coastal-bliss",
      title: "Calvera Coastal Bliss",
      duration: "6 Days / 5 Nights",
      destinations: ["Galle", "Mirissa (Optional)", "Colombo"],
      idealFor: "Couples, Families & Beach Lovers",
      price: "USD 860 per person",
      summary:
        "Escape to Sri Lanka's southern coast for pure relaxation. From Galle's golden beaches to Mirissa's whale watching and Colombo's modern charm, experience sunshine, serenity, and sea breezes.",
      highlights: [
        "Relax on beaches of Galle",
        "Enjoy sunset walks at Galle Fort",
        "Optional whale watching in Mirissa",
        "Luxury coastal resorts",
        "Explore vibrant Colombo",
      ],
      theme: "coastal",
      image:
        "/images/Tours/Calvera pakage/Calvera Coastal Bliss (Leisure & Beach Relaxation/costalbills1.jpg",
      imageAlt: "Beautiful coastal beach view",
    },
    {
      id: "signature-journey",
      title: "Calvera Signature Journey",
      duration: "10 Days / 9 Nights",
      destinations: [
        "Dambulla",
        "Sigiriya",
        "Kandy",
        "Nuwara Eliya",
        "Udawalawe",
        "Galle",
        "Colombo",
      ],
      idealFor: "Couples, Families & Explorers",
      price: "USD 1,760 per person",
      summary:
        "Discover Sri Lanka's perfect balance of culture, nature, and relaxation. Explore temples, tea plantations, safaris, and beaches — each crafted to create your personal signature experience.",
      highlights: [
        "Climb Sigiriya Fortress",
        "Visit Dambulla Cave Temple & Temple of the Tooth",
        "Tour tea plantations",
        "Safari in Udawalawe",
        "Explore Galle Fort",
        "Final night in Colombo",
      ],
      theme: "signature",
      image: "/images/Tours/Calvera pakage/Calvera Signature/Signature.jpg",
      hoverImage:
        "/images/Tours/Calvera pakage/Calvera Signature/Signature.jpg",
      imageAlt: "Traveler exploring Sri Lanka",
    },
  ];

  // Flow handlers
  const openSummary = (pkg) => {
    setSelectedPackage(pkg);
    setShowPackagePopup(true);
  };
  const closeSummary = () => {
    setSelectedPackage(null);
    setShowPackagePopup(false);
  };
  const receiveNow = () => {
    setShowPackagePopup(false);
    setShowBookingForm(true);
  };
  const closeBookingForm = () => {
    setShowBookingForm(false);
  };
  const onBooked = () => {
    setShowBookingForm(false);
    setShowConfirmation(true);
  };
  const closeConfirmation = () => setShowConfirmation(false);

  return (
    <div className="tours-page">
      <Hero
        images={toursHeroImages}
        title="Our Tours"
        highlightText="Unforgettable Experiences"
        subtitle="Handcrafted Journeys Across Sri Lanka"
        badge="Calvera Signature Collection"
        primaryButton={{ text: "View Packages", link: "#packages", icon: "fa-gift" }}
        secondaryButton={{ text: "Contact Us", link: "/contact", icon: "fa-phone" }}
        showFeatures
        showScrollIndicator
      />

      <section id="packages" className="packages-section">
        <div className="container">
          <h2 className="section-title">Our Tour Packages</h2>

          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`package-card ${pkg.theme}`}>
                <div className="image-wrapper">
                  <img src={pkg.image} alt={pkg.imageAlt} className="card-image-main" />
                  <span className="package-tag">{pkg.title.split(" ")[1]}</span>
                </div>

                <div className="package-info">
                  <h3>{pkg.title}</h3>
                  <p>{pkg.summary.slice(0, 120)}...</p>
                  <p className="duration">
                    <i className="far fa-clock"></i> {pkg.duration}
                  </p>
                  <button className="btn-view" onClick={() => openSummary(pkg)}>
                    <i className="fas fa-eye"></i> View Summary
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showPackagePopup && (
        <PackagePopup
          pkg={selectedPackage}
          onClose={closeSummary}
          onReceiveNow={receiveNow}
        />
      )}

      {showBookingForm && selectedPackage && (
        <BookingFormPopup pkg={selectedPackage} onSubmit={onBooked} onClose={closeBookingForm} />
      )}

      {showConfirmation && <ConfirmationPopup onClose={closeConfirmation} />}
    </div>
  );
};

export default Tours;
