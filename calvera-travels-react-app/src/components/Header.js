import React, { useEffect, useState } from "react";
import "./Header.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import SearchModal from "./SearchModal";
import logo from "../assets/Without Text.png";

export default function Header() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  // Handle scroll JUST for header
  useEffect(() => {
    const onScroll = () => {
      const passed = window.scrollY > 40;
      setHeaderScrolled(passed);
      setShowTopBar(!passed);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu/search on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navIsActive = (path) =>
    location.pathname === path ||
    (path === "/" &&
      (location.pathname === "/" ||
        location.pathname.toLowerCase() === "/home"));

  return (
    <>
      <header className={`hdr ${headerScrolled ? "scrolled" : ""}`}>
        {/* Top Bar */}
        <div className={`hdr-top ${showTopBar ? "show" : "hide"}`}>
          <div className="hdr-top__inner">
            <div className="hdr-top__contact">
              <a href="mailto:inquiries@calveratravels.com">
                <FaEnvelope />
                inquiries@calveratravels.com
              </a>
              <span className="sep">|</span>
              <a href="tel:+94761915100">
                <FaPhoneAlt />
                +94 76 191 5100
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="hdr-nav">
          <div className="hdr-nav__inner">
            {/* Logo */}
            <div className="hdr-logo">
              <Link to="/" aria-label="Calvera Travels">
                <img src={logo} alt="Calvera Travels" />
              </Link>
            </div>

            {/* Navigation Links */}
            <ul className="hdr-links">
              <li>
                <Link to="/" className={navIsActive("/") ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/AboutUs"
                  className={navIsActive("/AboutUs") ? "active" : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Tours"
                  className={navIsActive("/Tours") ? "active" : ""}
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  to="/Destination"
                  className={navIsActive("/Destination") ? "active" : ""}
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/Planyourtrip"
                  className={navIsActive("/Planyourtrip") ? "active" : ""}
                >
                  Plan Trip
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={navIsActive("/blog") ? "active" : ""}
                >
                  Blog
                </Link>
              </li>
            </ul>

            {/* Actions */}
            <div className="hdr-actions">
              <button
                className="icon-btn"
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
              >
                <FaSearch />
              </button>

              <button
                className="icon-btn"
                aria-label="Menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <div className={`hdr-mobile ${menuOpen ? "show" : ""}`}>
            <ul>
              <li>
                <Link to="/" className={navIsActive("/") ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/AboutUs"
                  className={navIsActive("/AboutUs") ? "active" : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Tours"
                  className={navIsActive("/Tours") ? "active" : ""}
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  to="/Destination"
                  className={navIsActive("/Destination") ? "active" : ""}
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/Planyourtrip"
                  className={navIsActive("/Planyourtrip") ? "active" : ""}
                >
                  Plan Trip
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={navIsActive("/blog") ? "active" : ""}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/Contact" onClick={() => setMenuOpen(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
