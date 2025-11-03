import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./About.css";

const AboutUs = () => {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const heroImages = [
    "/images/AboutUs/AHEROback/aboutback.jpg",
    "/images/AboutUs/AHEROback/Aheroback2.jpg",
    "/images/AboutUs/AHEROback/Aheroback3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // ===== Scroll progress indicator (top thin bar) =====
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  // Hide bottom cue after user scrolls a bit
  const [showCue, setShowCue] = useState(true);
  useEffect(() => {
    const onScroll = () => setShowCue(window.scrollY < 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="about-page">
      {/* ===== Fixed top scroll progress ===== */}
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${heroImages[currentHeroImage]})` }}
        >
          <div className="hero-overlay" />
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="hero-badge">
              <i className="fas fa-users" aria-hidden="true"></i> Story & Spirit
            </span>
            <h1>About Calvera Travels</h1>
            <p>Crafting unforgettable journeys with passion and expertise.</p>

            <div className="hero-stats">
              <div>
                <h3>Tours</h3>
                <p>Curated for You</p>
              </div>
              <div>
                <h3>Team</h3>
                <p>Travel Enthusiasts</p>
              </div>
              <div>
                <h3>20+</h3>
                <p>Destinations</p>
              </div>
            </div>
          </motion.div>

          {/* ===== Bottom scroll cue (bouncing chevron) ===== */}
          {showCue && (
            <div className="hero-scroll-cue" aria-hidden="true">
              <span className="cue-label">Scroll</span>
              <i className="fas fa-chevron-down" />
            </div>
          )}
        </div>
      </section>

      {/* ===== WELCOME SECTION ===== */}
      <section
        className="welcome-section"
        style={{
          backgroundImage: "url('/images/AboutUs/Awelcomeback/Awelcomesec.jpg')",
        }}
      >
        <div className="overlay"></div>
        <motion.div
          className="welcome-content glass-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Welcome to Calvera Travel</h2>
          <p>
            At Calvera, we believe every journey is crafted with passion,
            purpose, and a personal touch.
          </p>
          <p>
            We are a full-service travel company based in Sri Lanka, curating
            unforgettable travel experiences across the island and beyond.
          </p>
          <p>
            Whether you seek a relaxing beach escape, a cultural adventure, or a
            luxury honeymoon, our team ensures every detail is handled with care.
          </p>
        </motion.div>
      </section>

      {/* ===== WHAT WE DO SECTION ===== */}
      <section
        className="what-we-do-section"
        style={{ backgroundImage: "url('/images/AboutUs/Awhatwedoback/AWWDO.jpg')" }}
      >
        <div className="overlay"></div>
        <motion.div
          className="whatwedo-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>What We Do</h2>
          <p>
            At Calvera, we specialize in custom-designed travel experiences that
            suit your style, budget, and purpose.
          </p>
          <ul>
            <li>
              <strong>Tailor-made Tours –</strong> Personalized itineraries
              designed around your interests.
            </li>
            <li>
              <strong>Hotel Bookings & Transport –</strong> Comfortable stays and
              reliable transfers across Sri Lanka.
            </li>
            <li>
              <strong>Adventure & Nature Tours –</strong> From misty hill-country
              treks to ocean safaris.
            </li>
            <li>
              <strong>Cultural & Heritage Trips –</strong> Explore the rich
              traditions, temples, and festivals of our island.
            </li>
            <li>
              <strong>Corporate & Group Travel –</strong> Seamless planning for
              meetings, incentives, and events.
            </li>
          </ul>
          <p>
            We combine local knowledge with global standards to bring you
            experiences that are authentic, safe, and unforgettable.
          </p>
        </motion.div>
      </section>

      {/* ===== OUR PROMISE SECTION ===== */}
      <section
        className="our-promise-section"
        style={{ backgroundImage: "url('/images/AboutUs/Aourpromiseback/Apromiseback.jpg')" }}
      >
        <div className="overlay"></div>
        <motion.div
          className="ourpromise-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Our Promise</h2>
          <p>
            To deliver journeys filled with trust, comfort, and inspiration. We
            believe every traveler deserves more than a tour; they deserve an
            experience that feels personal, meaningful, and perfectly planned.
          </p>
          <ul>
            <li>Listen carefully to your needs and expectations.</li>
            <li>Provide transparent pricing and honest guidance.</li>
            <li>Ensure safety, comfort, and responsible travel practices.</li>
            <li>Be available 24/7 for support and assistance.</li>
            <li>
              Help you discover the soul of each place with confidence and care.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* ===== CALVERA MEANING SECTION ===== */}
      <section
        className="calvera-meaning-section"
        style={{ backgroundImage: "url('/images/AboutUs/Awhychose/AWCCT.jpg')" }}
      >
        <div className="overlay"></div>
        <motion.div
          className="calvera-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Meaning of CALVERA</h2>
          <ul>
            <li>
              <strong>C → Culture & Connection –</strong> celebrating heritage and
              traditions of Sri Lanka and the world.
            </li>
            <li>
              <strong>A → Adventure –</strong> exploring new places with excitement
              and wonder.
            </li>
            <li>
              <strong>L → Luxury & Leisure –</strong> offering comfort and quality
              in every journey.
            </li>
            <li>
              <strong>V → Vision –</strong> shaping the future of tourism with
              creativity.
            </li>
            <li>
              <strong>E → Experience –</strong> creating moments that last a
              lifetime.
            </li>
            <li>
              <strong>R → Reliability –</strong> trusted service for travelers.
            </li>
            <li>
              <strong>A → Authenticity –</strong> genuine experiences rooted in
              real stories and tradition.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* ===== WHY CHOOSE SECTION ===== */}
      <section
        className="why-choose-section"
        style={{ backgroundImage: "url('/images/AboutUs/aboutus back/ABUSBAK2.jpg')" }}
      >
        <div className="overlay"></div>
        <motion.div
          className="why-choose-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Why Choose Calvera Travel</h2>
          <ul>
            <li>Professional, experienced travel planners.</li>
            <li>Personalized itineraries for every type of traveler.</li>
            <li>Strong partnerships with trusted hotels and tour operators.</li>
            <li>24/7 traveler support and on-ground assistance.</li>
            <li>Commitment to sustainable and ethical tourism.</li>
            <li>Transparent communication and flexible booking options.</li>
          </ul>
          <p>
            We don’t just take you places — we help you experience them in ways
            you’ll never forget.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
