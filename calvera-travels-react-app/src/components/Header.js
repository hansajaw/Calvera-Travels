import React, { useEffect, useState } from "react";
import "./Header.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaSearch,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import SearchModal from "./SearchModal";
import logo from "../assets/LOGO.jpg";

export default function Header() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // kept for the inline search form (if you keep it)
  const [showTopBar, setShowTopBar] = useState(true);

  // theme boot
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    setDark(isDark);
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, []);

  // scroll reactions (solid header + hide top bar)
  useEffect(() => {
    const onScroll = () => {
      const passed = window.scrollY > 60;
      setScrolled(passed);
      setShowTopBar(!passed);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menus / search when route changes
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // close on ESC for menu
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.body.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // keeping this in case you still want the inline bar; the real “page-wide” search lives in SearchModal
    if (searchQuery.trim()) {
      // you could open SearchModal prefilled instead:
      setSearchOpen(true);
      // and clear the inline input:
      setSearchQuery("");
    }
  };

  const navIsActive = (path) =>
    location.pathname === path ||
    (path === "/" && (location.pathname === "/" || location.pathname.toLowerCase() === "/home"));

  return (
    <>
      <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
        {/* === Top Bar (hidden while scrolled) === */}
        <div className={`hdr-top ${showTopBar ? "show" : "hide"}`}>
          <div className="hdr-top__inner">
            <div className="hdr-top__contact">
              <FaEnvelope />
              <a href="mailto:inquiries@calveratravels.com">
                inquiries@calveratravels.com
              </a>
              <span className="sep">|</span>
              <FaPhoneAlt />
              <a href="tel:+94 76 191 5100">Call Us</a>
            </div>
          </div>
        </div>

        {/* === Navigation === */}
        <nav className="hdr-nav" role="navigation" aria-label="Primary">
          <div className="hdr-nav__inner">
            {/* Logo */}
            <div className="hdr-logo">
              <Link to="/" aria-label="Calvera Travels - Home">
                <img src={logo} alt="Calvera Travels" />
              </Link>
            </div>

            {/* Center Links */}
            <ul className="hdr-links" role="menubar">
              <li role="none">
                <Link role="menuitem" to="/" className={navIsActive("/") ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/AboutUs" className={navIsActive("/AboutUs") ? "active" : ""}>
                  About Us
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/Tours" className={navIsActive("/Tours") ? "active" : ""}>
                  Tours
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/Destination" className={navIsActive("/Destination") ? "active" : ""}>
                  Destinations
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/Planyourtrip" className={navIsActive("/Planyourtrip") ? "active" : ""}>
                  Plan Your Trip
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/blog" className={navIsActive("/blog") ? "active" : ""}>
                  Blog
                </Link>
              </li>
            </ul>

            {/* Right actions */}
            <div className="hdr-actions">
              <button
                className="icon-btn"
                aria-label="Search this page"
                onClick={() => setSearchOpen(true)}
              >
                <FaSearch />
              </button>

              {/* <button
                className="icon-btn"
                aria-label="Toggle theme"
                onClick={toggleTheme}
                title={dark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {dark ? <FaSun /> : <FaMoon />}
              </button> */}

              <button
                className="icon-btn hdr-burger"
                aria-label="Menu"
                onClick={() => setMenuOpen((s) => !s)}
                aria-expanded={menuOpen}
                aria-controls="hdr-mobile-menu"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* (Optional) Inline search row — keep or remove.
              You already have a global modal so this can be hidden in CSS if you prefer. */}
          {false && (
            <form className="hdr-search" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search destinations, tours..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button type="submit">Go</button>
            </form>
          )}

          {/* Compact dropdown */}
          <div
            id="hdr-mobile-menu"
            className={`hdr-mobile ${menuOpen ? "show" : ""}`}
            onClick={(e) => {
              // click outside links closes
              if (e.target.classList.contains("hdr-mobile")) setMenuOpen(false);
            }}
          >
            <ul>
              <li>
                <Link to="/Contact" onClick={() => setMenuOpen(false)}>
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link to="/AboutUs" onClick={() => setMenuOpen(false)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Tours" onClick={() => setMenuOpen(false)}>
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/Destination" onClick={() => setMenuOpen(false)}>
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/Planyourtrip" onClick={() => setMenuOpen(false)}>
                  Plan Your Trip
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => setMenuOpen(false)}>
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </header>

      {/* Page-wide Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
