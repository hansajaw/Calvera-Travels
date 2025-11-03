import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ 
    images = null,
    title = "Discover The Islands",
    subtitle = "Your adventure begins here. Let Calvera take you there.",
    highlightText = "With Calvera Travels",
    badge = "Premium Travel Experience",
    showFeatures = true,
    showScrollIndicator = true
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const [parallaxOffset, setParallaxOffset] = useState(0);
    
    // Default images if none provided
    const defaultImages = [
        '/images/home page/hero page background/heroback1 (1).jpg',
        '/images/home page/hero page background/heroback2.jpg',
        '/images/home page/hero page background/heroback3.JPG'
    ];

    const backgroundImages = images || defaultImages;

    // Handle scroll effect and image rotation
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrolled(scrollPosition > 50);
            setParallaxOffset(scrollPosition * 0.5); // Creates a parallax effect
        };

        window.addEventListener('scroll', handleScroll);
        
        // Background image rotation
        const interval = setInterval(() => {
          setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, [backgroundImages.length]);

    const handleDotClick = (index) => {
        if (index !== currentImageIndex) {
            setCurrentImageIndex(index);
        }
    };

    return (
        <div className={`page-hero ${scrolled ? 'scrolled' : ''}`}>
            {/* Background Images with Crossfade */}
            {/* This transform applies the parallax "move up" effect to the background */}
            <div className="hero-backgrounds" style={{ transform: `translateY(${parallaxOffset}px)` }}>
                {backgroundImages.map((image, index) => (
                    <div
                        key={index}
                        className={`hero-background ${index === currentImageIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url("${image}")` }}
                    />
                ))}
            </div>

            {/* Dark Overlay */}
            <div className="hero-overlay"></div>

            {/* Animated Particles/Decorations */}
            <div className="hero-decorations">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
                <div className="decoration-circle circle-3"></div>
            </div>

            {/* Hero Content */}
            <div className="hero-content">
                <div className="hero-badge">
                    <i className="fas fa-paper-plane"></i>
                    <span>{badge}</span>
                </div>
                
                <h1 className="hero-title">
                    {title}<br />
                    <span className="highlight">{highlightText}</span>
                </h1>
                
                <p className="hero-subtitle">
                    {subtitle}
                </p>

                

                {/* Feature Pills */}
                {showFeatures && (
                    <div className="hero-features">
                        <div className="feature-pill">
                            <i className="fas fa-shield-alt"></i>
                            <span>Safe Travel</span>
                        </div>
                        <div className="feature-pill">
                            <i className="fas fa-star"></i>
                            <span>Best Prices</span>
                        </div>
                        <div className="feature-pill">
                            <i className="fas fa-headset"></i>
                            <span>24/7 Support</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Scroll Down Indicator */}
            {showScrollIndicator && (
                <div className="scroll-indicator">
                </div>
            )}
            
            {/* Image Indicators */}
            <div className="hero-indicators">
                {backgroundImages.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator-dot ${index === currentImageIndex ? 'active' : ''}`}
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