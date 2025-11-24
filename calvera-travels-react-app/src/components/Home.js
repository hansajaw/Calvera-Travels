import React from "react";
import SEO from "./SEO";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Hero from "./Hero";
import "./Home.css";

function slugify(text = "") {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

const Home = () => {
  // === Tour packages (same data, no scroll stuff needed) ===
const scrollBarTourPackages = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL}/images/Tours/Calvera%20pakage/Calvera%20Honeymoon/Calvera%20Hoooneymoon.jpg`,
    title: "Calvera Romantic Escape",
    description:
      "Romantic 8-day honeymoon through Sri Lanka’s most scenic and intimate locations.",
    price: "USD 1,820 per person",
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/images/Tours/Calvera%20pakage/Calvera%20Cultuer/dance-6983578.jpg`,
    title: "Calvera Cultural Essence",
    description:
      "Discover Sri Lanka’s ancient capitals, sacred temples and authentic village life.",
    price: "USD 930 per person",
  },
  {
    id: 3,
    image: `${process.env.PUBLIC_URL}/images/Tours/Calvera%20pakage/Calvera%20Wild/henning-borgersen-Kr_RijTa0kg-unsplash.jpg`,
    title: "Calvera Wild Trails",
    description:
      "Thrilling wildlife safaris, scenic hikes and immersive nature experiences.",
    price: "USD 1,560 per person",
  },
  {
    id: 4,
    image: `${process.env.PUBLIC_URL}/images/Tours/Calvera%20pakage/Calvera%20Coastal%20Bliss%20(Leisure%20&%20Beach%20Relaxation/costalbills1.jpg`,
    title: "Calvera Coastal Bliss",
    description:
      "Relax on golden southern beaches with optional whale watching and coastal charm.",
    price: "USD 860 per person",
  },
  {
    id: 5,
    image: `${process.env.PUBLIC_URL}/images/Tours/Calvera%20pakage/Calvera%20Signature/Signature.jpg`,
    title: "Calvera Signature Journey",
    description:
      "Perfect balance of culture, tea country, safaris and beaches across Sri Lanka.",
    price: "USD 1,760 per person",
  },
];


  return (
    <>
      <SEO
        title="Calvera Travels - Your Gateway to Sri Lanka"
        description="Discover the beauty of Sri Lanka with Calvera Travels. We offer personalized tours, cultural experiences, and unforgettable adventures. Plan your dream vacation today!"
        name="Calvera Travels"
        type="website"
        image={`${process.env.PUBLIC_URL}/images/og-image.jpg`}
        url="https://calveratravels.com"
      />
      <Hero />

      {/* =========== WELCOME SECTION =========== */}
      <Fade direction="up" triggerOnce>
        <section
          className="welcome-section"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/home%20page/welcomesetion/welcomeback.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="container">
            <div className="welcome-content">
              <div className="welcome-icon-wrapper">
                <div className="welcome-icon">
                  <div className="icon-glow"></div>
                  <i className="fas fa-compass" aria-hidden="true"></i>
                </div>
              </div>
              <h2 className="welcome-main-title">Welcome to Calvera Travels</h2>
              <p className="welcome-subtitle">
                <span className="subtitle-icon"></span>
                Your journey begins here!
                <span className="subtitle-icon"></span>
              </p>
              <div className="welcome-description">
                <div className="flow-text">
                  <p>
                    At Calvera Travel, we believe every journey tells a story.
                    From the ancient wonders of Sri Lanka&apos;s Cultural
                    Triangle to the golden beaches and misty highlands, we craft
                    unforgettable experiences that go beyond travel. Whether you
                    dream of exploring iconic landmarks, relaxing in hidden
                    retreats, or discovering authentic local culture, our
                    dedicated team is here to guide you every step of the way.
                  </p>
                </div>
              </div>

              <div className="welcome-cta-center">
                <Link to="/tours" className="btn-journey glass-button">
                  <span className="btn-content">
                    <span className="btn-text">Start Your Journey</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      {/* =========== SRI LANKA SECTION =========== */}
      <Fade direction="up" triggerOnce>
        <section
          className="sri-lanka-section"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/home%20page/sri%20lanka%20section/sri%20lankaback.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="container">
            <div className="sri-lanka-content">
              <div className="section-badge">
                <i className="fas fa-gem" aria-hidden="true"></i>
                <span>Pearl of the Indian Ocean</span>
              </div>
              <h2>Where Every Journey Feels Like Home</h2>
              <h3>About Sri Lanka</h3>
              <p>
                Nestled in the heart of the Indian Ocean, Sri Lanka is a
                tropical paradise that captures hearts with its natural beauty
                and cultural charm. Known as the &quot;Pearl of the Indian
                Ocean,&quot; this island offers a perfect blend of golden
                beaches, misty mountains, and ancient heritage. From the lush
                tea gardens of Nuwara Eliya to the wildlife adventures in Yala
                National Park, every corner of Sri Lanka tells a story waiting
                to be discovered.
              </p>
            </div>
          </div>
        </section>
      </Fade>

      {/* =========== DISCOVER SECTION =========== */}
      <Fade direction="up" triggerOnce>
        <section
          className="discover-wonders-section"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/home%20page/discover/discoverback.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="container">
            <div className="discover-wonders-content">
              <div className="discover-header">
                <i
                  className="fas fa-location-arrow discover-icon"
                  aria-hidden="true"
                ></i>
                <h2>Discover the Wonders of Sri Lanka</h2>
              </div>
              <p>
                Embark on an unforgettable journey through Sri Lanka with our
                handpicked destinations. Each spot on the map reveals a unique
                story — from golden beaches and ancient cities to lush mountains
                and cultural wonders. Let Calvera Travels guide you through the
                island&apos;s most beautiful and inspiring places.
              </p>
              <Link to="/destination" className="btn btn-primary mt-4">
                <span>Explore All Destinations</span>
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </section>
      </Fade>

      {/* =========== TOUR PACKAGES GRID (centered) =========== */}
      <section className="tour-scroll-bar">
        <div className="container">
          <h2 className="tour-section-title">Featured Tour Packages</h2>
          <p className="tour-section-subtitle">
            Handpicked experiences crafted just for you.
          </p>

          <div className="tour-grid">
            {scrollBarTourPackages.map((tour) => {
              const slug = slugify(tour.title);
              return (
                <Link
                  key={tour.id}
                  to={`/tours#${slug}`}
                  className="tour-card-link"
                >
                  <div className="tour-card">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      onError={(e) => {
                        e.currentTarget.src = `${process.env.PUBLIC_URL}/images/placeholder.jpg`;
                        // eslint-disable-next-line no-console
                        console.error(`Failed to load: ${tour.image}`);
                      }}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="tour-info">
                      <h4>{tour.title}</h4>
                      <p>{tour.description}</p>
                      <span className="price">{tour.price}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
