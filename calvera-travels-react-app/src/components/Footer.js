import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <div className="logo-wrapper">
                            <div className="logo">
                                <img 
                                    src="/images/FooterLogo.jpg" 
                                    alt="Calvera Travels Logo" 
                                    className="logo-img" 
                                />
                                <div className="logo-text">
                                    <h2>CALVERA</h2>
                                    <span>TRAVELS</span>
                                </div>
                            </div>
                            <p className="tagline">
                                Jobs fill your pocket, but adventures fill your soul.
                            </p>
                        </div>
                        
                        <div className="social-icons">
                            <a href="https://web.facebook.com/calveratravels/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/calvera_travels_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://x.com/Calveratravel" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/calvera-travels-pvt-ltd/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.youtube.com/@CalveraTravels" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="https://www.tiktok.com/@calveratravels" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
                                <i className="fab fa-tiktok"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section links">
                        <h3>
                            <i className="fas fa-compass"></i>
                            Navigation
                        </h3>
                        <ul>
                            <li><Link to="/Home"><i className="fas fa-angle-right"></i>Home</Link></li>
                            <li><Link to="/AboutUs"><i className="fas fa-angle-right"></i>About Us</Link></li>
                            <li><Link to="/Destination"><i className="fas fa-angle-right"></i>Destinations</Link></li>
                            <li><Link to="/Tours"><i className="fas fa-angle-right"></i>Tours</Link></li>
                            <li><Link to="/Planyourtrip"><i className="fas fa-angle-right"></i>Plan Your Trip</Link></li>
                            <li><Link to="/Blog"><i className="fas fa-angle-right"></i>Blog</Link></li>
                            <li><Link to="/Contact"><i className="fas fa-angle-right"></i>Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section links">
                        <h3>
                            <i className="fas fa-link"></i>
                            Quick Links
                        </h3>
                        <ul>
                            <li><Link to="/privacy-policy"><i className="fas fa-angle-right"></i>Privacy Policy</Link></li>
                            <li><Link to="/terms-and-condition"><i className="fas fa-angle-right"></i>Terms & Conditions</Link></li>
                            <li><Link to="/qa"><i className="fas fa-angle-right"></i>FAQ</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section contact">
                        <h3>
                            <i className="fas fa-envelope-open-text"></i>
                            Get in Touch
                        </h3>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Colombo, Sri Lanka</span>
                            </li>
                            <li>
                                <i className="fas fa-phone"></i>
                                <span>+94 77 123 4567</span>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <span>inquiries@calveratravels.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Calvera Travels PVT. All Rights Reserved.</p>
                    <div className="payment-methods">
                        <span>We Accept:</span>
                        <i className="fab fa-cc-visa"></i>
                        <i className="fab fa-cc-mastercard"></i>
                        <i className="fab fa-cc-amex"></i>
                        <i className="fab fa-cc-paypal"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;