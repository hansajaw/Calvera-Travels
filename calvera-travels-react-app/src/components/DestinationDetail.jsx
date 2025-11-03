import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./DestinationDetail.css";
import { DESTINATIONS } from "../data/destinationData";

export default function DestinationDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [isFavorite, setIsFavorite] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const destination =
    DESTINATIONS.find((d) => d.slug === slug) ||
    DESTINATIONS.find(
      (d) => (d.name || "").toLowerCase().replace(/\s+/g, "-") === slug
    );

  useEffect(() => {
    if (!destination) navigate("/Destination", { replace: true });
  }, [destination, navigate]);

  if (!destination) return null;

  const bgImage =
    destination.image ||
    "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1200&auto=format&fit=crop&q=70";

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: destination.name,
        text: destination.tagline || destination.description,
        url: window.location.href,
      });
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  const bestTimeCards =
    destination.bestTime?.cards || destination.bestTime || [];
  const highlights = destination.highlights || [];
  const travelTips = destination.travelTips || [];
  const places = destination.places || [];

  return (
    <div className="destination-page">
      {/* Breadcrumbs */}
      <nav className="crumbs container">
        <Link to="/" className="crumb">Home</Link>
        <span className="crumb-sep">›</span>
        <Link to="/Destination" className="crumb">Destinations</Link>
        <span className="crumb-sep">›</span>
        <span className="crumb current">{destination.name}</span>
      </nav>

      {/* Hero */}
      <header
        className="luxe-hero"
        style={{ backgroundImage: `url(${bgImage})`, marginTop: "80px" }}
      >
        <div className="luxe-veil" />
        <div className="luxe-noise" />
        <div className="luxe-rimlight" />

        <div className="detail-hero__content container">
          <div className="hero-top-actions">
            <Link to="/Destination" className="btn-back">
              <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <span>Back to Destinations</span>
            </Link>

            <div className="hero-actions">
              <button
                className={`action-icon ${isFavorite ? "active" : ""}`}
                onClick={() => setIsFavorite(!isFavorite)}
                title={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill={isFavorite ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z" />
                </svg>
              </button>

              <div className="share-wrapper">
                <button className="action-icon" onClick={handleShare} title="Share">
                  <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
                    <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
                  </svg>
                </button>

                {showShareMenu && (
                  <div className="share-menu">
                    <button onClick={() => navigator.clipboard.writeText(window.location.href)}>Copy Link</button>
                    <button>Facebook</button>
                    <button>Twitter</button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="badge-row">
            <span className="detail-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {(destination.region || "Unknown").toUpperCase()}
            </span>
            {places.length > 0 && (
              <span className="detail-badge soft">
                <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z" />
                </svg>
                {places.length} Places
              </span>
            )}
          </div>

          <h1 className="luxe-title">
            {destination.name}
            <span className="luxe-underline" />
          </h1>
          <p className="detail-subtitle">
            {destination.tagline || destination.short}
          </p>

          <div className="hero-cta">
            <a href="#gallery" className="cta primary">View Gallery</a>
            <a href="#places" className="cta ghost">Explore Places</a>
            <a href="#about" className="cta ghost">Learn More</a>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="detail-main container">
        {/* Quick Info */}
        <div className="info-cards fancy">
          <div className="info-card">
            <svg className="info-card-icon" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M12 2a9.7 9.7 0 0 1 0 20c-5.5 0-10-4.5-10-10S6.5 2 12 2z" />
            </svg>
            <h3>Region</h3>
            <p>{destination.region || "—"}</p>
          </div>
          <div className="info-card">
            <svg className="info-card-icon" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
              <polygon points="12 2 15 9 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 9 12 2" />
            </svg>
            <h3>Rating</h3>
            <p>★ {destination.rating?.average || 4.8}</p>
          </div>
          <div className="info-card">
            <svg className="info-card-icon" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <h3>Photos</h3>
            <p>{destination.images?.length || 1}</p>
          </div>
          <div className="info-card">
            <svg className="info-card-icon" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <h3>Highlights</h3>
            <p>{highlights.length}</p>
          </div>
        </div>

        {/* Gallery */}
        <DestinationCarousel id="gallery" destination={destination} />

        {/* Highlights */}
        {highlights.length > 0 && (
          <section className="highlights">
            {highlights.map((h, i) => (
              <article key={i} className="highlight">
                <svg
                  className="highlight-icon"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                >
                  <path d="M12 2l4 8H8l4-8zM2 22h20l-10-8-10 8z" />
                </svg>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </article>
            ))}
          </section>
        )}

        {/* Tabs */}
        <section className="tabbed-content">
          <div className="tabs-nav">
            {["overview", "besttime", "tips"].map((tab) => (
              <button
                key={tab}
                className={`tab-nav-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "overview" && "Overview"}
                {tab === "besttime" && "Best Time"}
                {tab === "tips" && "Travel Tips"}
              </button>
            ))}
          </div>

          <div className="tab-panels">
            {activeTab === "overview" && (
              <div id="about" className="tab-panel">
                <h2>About {destination.name}</h2>
                <p className="desc">{destination.description}</p>
              </div>
            )}

            {activeTab === "besttime" && bestTimeCards.length > 0 && (
              <div className="tab-panel">
                <h2>Best Time to Visit</h2>
                <div className="season-cards">
                  {bestTimeCards.map((b, i) => (
                    <div
                      key={i}
                      className={`season-card ${
                        b.label?.toLowerCase().includes("recommend")
                          ? "recommended"
                          : ""
                      }`}
                    >
                      <h3>
                        {b.season}{" "}
                        <span className="season-tag">{b.label}</span>
                      </h3>
                      <p>
                        <strong>{b.months}</strong> — {b.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "tips" && travelTips.length > 0 && (
              <div className="tab-panel">
                <h2>Essential Travel Tips</h2>
                <div className="tips-grid">
                  {travelTips.map((t, i) => (
                    <div key={i} className="tip-card">
                      <svg
                        className="tip-number"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                      <h4>{t.title}</h4>
                      <p>{t.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Places */}
        {places.length > 0 && (
          <section id="places" className="places-section">
            <div className="section-head">
              <h2>Must-Visit Places in {destination.name}</h2>
              <p className="section-subtitle">
                Discover the iconic landmarks and hidden gems
              </p>
            </div>

            <div className="places-list-modern">
              {places.map((p, index) => (
                <div
                  key={p.id || index}
                  className={`place-box creative ${index % 2 ? "reverse" : ""}`}
                >
                  <div className="place-box-image">
                    <img src={p.image} alt={p.title} loading="lazy" />
                    <span className="img-gradient" />
                    <span className="place-tag">#{index + 1}</span>
                  </div>
                  <div className="place-box-content">
                    <h3>{p.title}</h3>
                    {p.short && <p className="short">{p.short}</p>}
                    {p.details && <p className="details">{p.details}</p>}
                    <div className="place-meta">
                      <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                          <path d="M12 2a9 9 0 0 1 9 9c0 5-9 11-9 11S3 16 3 11a9 9 0 0 1 9-9z" />
                        </svg>
                        Scenic Spot
                      </span>
                      <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        2–3 hrs
                      </span>
                      <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                          <polygon points="12 2 15 9 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 9 12 2" />
                        </svg>
                        {p.rating?.average || "4.8"}/5
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <FAQSection />

        {/* CTA */}
        <footer className="luxe-cta">
          <div className="luxe-cta-inner container">
            <div className="luxe-cta-copy">
              <h2>Ready to Plan Your Trip?</h2>
              <p>Create your perfect itinerary and start your adventure</p>
            </div>
            <div className="luxe-cta-actions">
              <Link to="/Planyourtrip" className="cta primary">Plan Your Trip</Link>
              <Link to="/Destination" className="cta ghost">Browse More</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* Carousel */
function DestinationCarousel({ id, destination }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const images = useMemo(
    () => destination.images?.length ? destination.images : [destination.image],
    [destination]
  );

  useEffect(() => {
    start();
    return stop;
  }, [images.length]);

  const start = () => {
    stop();
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
  };
  const stop = () => timerRef.current && clearInterval(timerRef.current);

  return (
    <section id={id} className="detail-carousel-section">
      <div className="section-header">
        <h2>Photo Gallery</h2>
        <div className="carousel-counter">
          <span className="current">{index + 1}</span>/<span className="total">{images.length}</span>
        </div>
      </div>
      <div className="detail-carousel" onMouseEnter={stop} onMouseLeave={start}>
        {images.map((src, i) => (
          <div key={i} className={`carousel-slide-wrapper ${i === index ? "active" : ""}`}>
            <img src={src} alt={`${destination.name} ${i + 1}`} className="carousel-slide" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* FAQ */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    { q: "Is it family-friendly?", a: "Yes! Perfect for all ages with plenty of activities and safe areas." },
    { q: "What about connectivity?", a: "Excellent Wi-Fi and mobile coverage. eSIMs recommended for tourists." },
    { q: "Do I need a visa?", a: "Depends on your nationality. Check with your local embassy." },
    { q: "Best way to get around?", a: "Public transport, taxis, and rental cars are all reliable options." },
  ];

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, idx) => (
        <div key={idx} className={`faq-item ${openIndex === idx ? "open" : ""}`}>
          <button className="faq-head" onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}>
            <span>{faq.q}</span>
            <span className="faq-toggle">{openIndex === idx ? "−" : "+"}</span>
          </button>
          <div className="faq-body">
            <p>{faq.a}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
