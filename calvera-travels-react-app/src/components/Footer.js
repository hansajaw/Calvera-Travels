import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            
            <div className="container">
                <div className="footer-content">
                    {/* Brand Section */}
                    <div className="footer-section about">
                        <div className="logo-wrapper">
                            <div className="logo">
                                <img 
                                    src="/images/FooterLogo.jpg" 
                                    alt="Calvera Travels Logo" 
                                    className="logo-img" 
                                />
                                <div className="logo-text">
                                    <h2>CALVERA </h2>
                                        Travels
                                </div>
                            </div>
                            <p className="tagline">
                                <i className="fas fa-quote-left"></i>
                                Jobs fill your pocket, but adventures fill your soul.
                                <i className="fas fa-quote-right"></i>
                            </p>
                        </div>
                        
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <i className="fab fa-youtube"></i>
                            </a>
                             <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
                                <i className="fab fa-tiktok"></i>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
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

                    {/* Quick Links */}
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

                    {/* Contact Section */}
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

                {/* Footer Bottom */}
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