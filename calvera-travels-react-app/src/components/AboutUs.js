import React from "react";
import SEO from "./SEO";
import Hero from "./Hero";
import "./About.css";

const AboutUs = () => {
  // Use the same rotating-hero behavior via <Hero />
  const aboutHeroImages = [
    "/images/AboutUs/AHEROback/aboutback.jpg",
    "/images/AboutUs/AHEROback/Aheroback2.jpg",
    "/images/AboutUs/AHEROback/Aheroback3.jpg",
  ];

  return (
    <div className="about-page">
      <SEO
        title="About Calvera Travels - Our Story and Promise"
        description="Learn about Calvera Travels, our passion for crafting unforgettable journeys, and our commitment to providing personalized, authentic, and reliable travel experiences in Sri Lanka."
        name="Calvera Travels"
        type="website"
        image={`${process.env.PUBLIC_URL}/images/og-image-about.jpg`}
        url="https://calveratravels.com/about"
      />

      {/* ===== HERO (same style/behavior as Tours) ===== */}
      <Hero
        images={aboutHeroImages}
        title="About Calvera Travels"
        highlightText="Story & Spirit"
        subtitle="Crafting unforgettable journeys with passion and expertise."
        badge="Who We Are"
        primaryButton={{ text: "Our Promise", link: "#our-promise", icon: "fa-heart" }}
        secondaryButton={{ text: "Contact Us", link: "/contact", icon: "fa-phone" }}
        showFeatures
        showScrollIndicator
      />

      {/* ===== WELCOME SECTION ===== */}
      <section
        className="welcome-section"
        style={{
          backgroundImage: "url('/images/AboutUs/Awelcomeback/Awelcomesec.jpg')",
        }}
      >
        <div className="overlay"></div>
        <div className="welcome-content glass-card">
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
        </div>
      </section>

      {/* ===== WHAT WE DO SECTION ===== */}
      <section
        className="what-we-do-section"
        style={{ backgroundImage: "url('/images/AboutUs/Awhatwedoback/AWWDO.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="whatwedo-content">
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
        </div>
      </section>

      {/* ===== OUR PROMISE SECTION ===== */}
      <section
        id="our-promise"
        className="our-promise-section"
        style={{ backgroundImage: "url('/images/AboutUs/Aourpromiseback/Apromiseback.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="ourpromise-content">
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
        </div>
      </section>

      {/* ===== CALVERA MEANING SECTION ===== */}
      <section
        className="calvera-meaning-section"
        style={{ backgroundImage: "url('/images/AboutUs/Awhychose/AWCCT.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="calvera-content">
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
        </div>
      </section>

      {/* ===== WHY CHOOSE SECTION ===== */}
      <section
        className="why-choose-section"
        style={{ backgroundImage: "url('/images/AboutUs/aboutus back/ABUSBAK2.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="why-choose-content">
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
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
