import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Hero from "./Hero";
import "./Home.css";

const Home = () => {
  // === Tour packages with URL-encoded paths ===
  const scrollBarTourPackages = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/images/Tours/Calvera%20pakage/Calvera%20Cultuer/sri-lanka-2726044.jpg`,
      title: "Cultural Wonders of Kandy",
      description: "Explore the heart of Sri Lanka’s cultural triangle.",
      price: "$850",
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/images/Tours/Calvera pakage/Calvera Coastal Bliss (Leisure & Beach Relaxation/filipp-nekhaev-Ycnt8BKlMtY-unsplash.jpg`,
      title: "Galle & Southern Coast",
      description: "Discover colonial charm and pristine beaches.",
      price: "$920",
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/images/Tours/Calvera%20pakage/Calvera%20Signature/etienne-boulanger-C5yfbvMWxC8-unsplash.jpg`,
      title: "Misty Mountains of Ella",
      description: "Hike through tea plantations and scenic views.",
      price: "$780",
    },
    {
      id: 4,
      image: `${process.env.PUBLIC_URL}/images/Tours/Calvera%20pakage/Calvera%20Wild/female-tourists-hand-have-happy-travel-map.jpg`,
      title: "Wildlife Safari in Yala",
      description: "Encounter leopards and elephants in their habitat.",
      price: "$1100",
    },
  ];

  // === Manual carousel (no autoplay) ===
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index) => {
    if (scrollRef.current && cardRefs.current[index]) {
      const card = cardRefs.current[index];
      const container = scrollRef.current;
      const left =
        card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
      container.scrollTo({ left, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container || cardRefs.current.length === 0) return;

    const center = container.scrollLeft + container.offsetWidth / 2;
    let closestIndex = 0;
    let smallest = Infinity;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const diff = Math.abs(cardCenter - center);
      if (diff < smallest) {
        smallest = diff;
        closestIndex = i;
      }
    });

    setActiveIndex(closestIndex);
  };

  // Center the first card on mount (one-time). This is not autoplay.
  useEffect(() => {
    if (scrollRef.current && cardRefs.current[0]) {
      scrollToCard(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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

      {/* =========== TOUR PACKAGES CAROUSEL (manual scroll) =========== */}
      <div className="tour-scroll-bar">
        <div className="scroll-content" ref={scrollRef} onScroll={handleScroll}>
          {scrollBarTourPackages.map((tour, index) => (
            <div
              key={tour.id}
              className={`tour-card ${activeIndex === index ? "active" : ""}`}
              ref={(el) => (cardRefs.current[index] = el)}
              onClick={() => scrollToCard(index)}
            >
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
