import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = ({
  images = null,
  title = "Discover The Islands",
  subtitle = "Your adventure begins here. Let Calvera take you there.",
  highlightText = "With Calvera Travels",
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroScrolled, setHeroScrolled] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // Default images if none provided
  const defaultImages = [
    "/images/home page/hero page background/heroback1 (1).jpg",
    "/images/home page/hero page background/heroback2.jpg",
    "/images/home page/hero page background/heroback3.JPG",
  ];

  const backgroundImages = images || defaultImages;

  // Handle scroll effect and image rotation
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setHeroScrolled(y > 50);
      setParallaxOffset(y * 0.5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Background image rotation
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    // initial compute
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [backgroundImages.length]);

  const handleDotClick = (index) => {
    if (index !== currentImageIndex) setCurrentImageIndex(index);
  };

  return (
    <div className={`page-hero ${heroScrolled ? "hero-active" : ""}`}>
      {/* Background Images with Crossfade */}
      <div
        className="hero-backgrounds"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`hero-background ${
              index === currentImageIndex ? "active" : ""
            }`}
            style={{ backgroundImage: `url("${image}")` }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Animated Decorations */}
      <div className="hero-decorations">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          {title}
          <br />
          {highlightText}
        </h1>

        <p className="hero-subtitle">{subtitle}</p>
      </div>

      {/* Image Indicators */}
      <div className="hero-indicators">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${
              index === currentImageIndex ? "active" : ""
            }`}
            onClick={() => handleDotClick(index)}
          >
            <span className="dot-progress"></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
